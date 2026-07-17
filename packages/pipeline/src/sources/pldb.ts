/**
 * PLDB importer (PLAN §5.4) — the Programming Language DataBase (pldb.io),
 * Public Domain. The bulk export `pldb.io/pldb.json` is one object per concept.
 *
 * SCOPE: this importer does exactly ONE thing — backfill a MISSING `created`
 * (the "Appeared" year) from PLDB's `appeared`. It is deliberately **fill-only**:
 * a node that already declares `created` is curated truth and is never touched,
 * so PLDB can never clobber a hand-set appeared-year (contrast wikidata, whose
 * P571 *inception* disagrees with our release-year `created` and is therefore
 * sent to review rather than written — see wikidata.ts).
 *
 * WHY it may own `created`: no other source owns it (wikidata keeps it
 * review-only), so the disjoint-ownership invariant is satisfied. PLDB's
 * `appeared` is a *first-release year*, which is exactly what our `created`
 * ("Appeared") means — unlike wikidata inception. The AI enricher owns
 * `extWikipediaPath`; PLDB never writes it, only *reads* its presence as a gate.
 *
 * NOTABILITY GATE (PLAN §5.4): PLDB carries thousands of concepts, many stubs.
 * We only trust its `appeared` for a well-attested concept — one that carries
 * both an appeared year AND a Wikipedia link. A match that fails the gate is
 * sent to review, not written.
 *
 * NOT DONE HERE (owner's call): using PLDB's notability filter to ADD new nodes
 * to the dataset. This importer only enriches nodes that already exist, exactly
 * like every other importer.
 */

import { indexRemote, resolveNode, reviewFor } from "../core/match.ts";
import type { NodeDoc, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "pldb";

export const PLDB_URL = "https://pldb.io/pldb.json";

/** The handful of PLDB measures we read. PLDB objects carry ~200 more we ignore. */
export interface PldbConcept {
  /** Canonical PLDB id (a slug, e.g. `nim`) — written to `sources.pldb`. */
  id: string;
  /** Display name, e.g. `Nim`. */
  name: string;
  /** First-release year, when PLDB knows it. */
  appeared?: number;
  /** Wikipedia URL, when present. Used only as a notability gate, never written. */
  wikipedia?: string;
}

/** Coerce PLDB's `appeared` (number or numeric string) to a plausible year. */
function toYear(raw: unknown): number | undefined {
  const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : Number.NaN;
  return Number.isInteger(n) && n >= 1900 && n <= 2100 ? n : undefined;
}

export function parsePldb(json: string): PldbConcept[] {
  let doc: unknown;
  try {
    doc = JSON.parse(json);
  } catch {
    throw new Error("PLDB: response was not JSON — upstream format changed");
  }
  if (!Array.isArray(doc)) throw new Error("PLDB: expected a JSON array of concepts — upstream format changed");

  const out: PldbConcept[] = [];
  for (const raw of doc) {
    if (!raw || typeof raw !== "object") continue;
    const r = raw as Record<string, unknown>;
    const id = typeof r.id === "string" ? r.id.trim() : "";
    const name = typeof r.name === "string" ? r.name.trim() : "";
    if (!id || !name) continue;
    const wikipedia = typeof r.wikipedia === "string" && r.wikipedia.trim() ? r.wikipedia.trim() : undefined;
    out.push({ id, name, appeared: toYear(r.appeared), wikipedia });
  }
  if (!out.length) throw new Error("PLDB: no concepts parsed — upstream format changed");
  return out;
}

/** True if the node already declares a usable `created` — then PLDB stays out. */
function hasCreated(doc: NodeDoc): boolean {
  const c = doc.data.created;
  return typeof c === "string" && c.trim().length > 0;
}

/** Node identities to try against PLDB names. NAME only — never slug (the linguist lesson). */
function namesOf(doc: NodeDoc): (string | undefined)[] {
  const name = doc.data.name;
  return [typeof name === "string" ? name : undefined];
}

export const pldbSource: Source = {
  id: SOURCE_ID,
  description:
    "PLDB (pldb.io, Public Domain) — fill-only backfill of a missing `created` (appeared year) for well-attested concepts (appeared + a Wikipedia link).",
  owns: ["created", `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const url = ctx.options.url ?? PLDB_URL;
    ctx.origin(url);

    const concepts = parsePldb(await ctx.fetch(url));
    const index = indexRemote(concepts, c => ({ id: c.id, exact: [c.name] }));

    for (const doc of ctx.nodesOfKind("plang")) {
      // Fill-only: only nodes MISSING an appeared-year are in scope. A curated
      // `created` is never re-examined, so PLDB cannot overwrite it.
      if (hasCreated(doc)) continue;

      const res = resolveNode(index, doc, SOURCE_ID, namesOf(doc), c => c.id);
      const review = reviewFor(doc, SOURCE_ID, res, c => c.id);
      if (review) {
        ctx.review(review);
        continue;
      }
      // PLDB does not know every niche language we track; a miss is the actionable
      // direction (a human can pin sources.pldb to accept a differently-named concept).
      if (!res.record) {
        ctx.unmatched(doc.key);
        continue;
      }

      // Notability gate (PLAN §5.4): trust `appeared` only for a well-attested
      // concept — both an appeared year AND a Wikipedia link. Otherwise report it.
      const c = res.record;
      if (c.appeared === undefined || !c.wikipedia) {
        const missing = c.appeared === undefined ? "an appeared year" : "a Wikipedia link";
        ctx.review({
          key: doc.key,
          kind: "pldb-below-threshold",
          message: `PLDB matched '${doc.data.name ?? doc.slug}' to '${c.id}' but it lacks ${missing}; not backfilling created.`,
          data: { pldbId: c.id, appeared: c.appeared, wikipedia: c.wikipedia },
        });
        continue;
      }

      ctx.match({ key: doc.key, method: res.method, remoteId: c.id });
      ctx.patch(doc.key, {
        created: String(c.appeared),
        sources: { [SOURCE_ID]: c.id },
      });
    }
  },
};
