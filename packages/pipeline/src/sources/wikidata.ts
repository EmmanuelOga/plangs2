/**
 * Wikidata importer (PLAN §5.3) — CC0.
 *
 * Fetches `Special:EntityData/Q*.json` per entity, ONLY for nodes that already
 * carry a `sources.wikidata` QID. There is no name-based fallback: guessing a
 * QID from a language name is exactly the kind of match that produces silent
 * garbage, so unresolved nodes are reported instead (batch-resolving QIDs via
 * one SPARQL pass is a separate, reviewable step — see PLAN §5.3).
 *
 * Owns the hard facts (inception, website). Paradigm / typing / designer
 * claims are SUGGESTIONS: they land in the review report, never in YAML,
 * because mapping a QID onto our own taxonomy is a human call.
 */

import type { RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "wikidata";

export const ENTITY_URL = (qid: string) => `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;

/** Wikidata property ids we read. */
export const PROPS = {
  inception: "P571",
  officialWebsite: "P856",
  designedBy: "P287",
  developer: "P178",
  programmingParadigm: "P3966",
  typingDiscipline: "P7935",
} as const;

/** `+2008-01-01T00:00:00Z` with precision 9/10/11 -> `2008` / `2008-01` / `2008-01-15`. */
export function parseTimeValue(value: { time?: string; precision?: number } | undefined): string | undefined {
  if (!value?.time) return undefined;
  const m = /^[+-](\d{4})-(\d{2})-(\d{2})T/.exec(value.time);
  if (!m) return undefined;
  const [, year, month, day] = m;
  const precision = value.precision ?? 9;
  if (precision <= 9) return year;
  if (precision === 10) return `${year}-${month}`;
  return `${year}-${month}-${day}`;
}

interface Snak {
  datavalue?: { value: unknown; type?: string };
}
interface Claim {
  mainsnak?: Snak;
  rank?: string;
}
interface Entity {
  labels?: Record<string, { value?: string }>;
  claims?: Record<string, Claim[]>;
}
export interface EntityData {
  entities?: Record<string, Entity>;
}

/** Claims for a property, dropping deprecated ones (upstream marks bad data that way). */
function claimsOf(entity: Entity, prop: string): Claim[] {
  return (entity.claims?.[prop] ?? []).filter(c => c.rank !== "deprecated");
}

function firstValue(entity: Entity, prop: string): unknown {
  return claimsOf(entity, prop)[0]?.mainsnak?.datavalue?.value;
}

/** Item ids (`Q123`) referenced by a property. */
export function itemIds(entity: Entity, prop: string): string[] {
  const out: string[] = [];
  for (const claim of claimsOf(entity, prop)) {
    const v = claim.mainsnak?.datavalue?.value as { id?: string } | undefined;
    if (v?.id) out.push(v.id);
  }
  return out;
}

export function extractEntity(data: EntityData, qid: string): Entity | undefined {
  return data.entities?.[qid];
}

/** The facts we read: inception (suggested only) and the official website. */
export function factsOf(entity: Entity): { created?: string; extHomeURL?: string } {
  const created = parseTimeValue(firstValue(entity, PROPS.inception) as { time?: string; precision?: number } | undefined);
  const site = firstValue(entity, PROPS.officialWebsite);
  return { created, extHomeURL: typeof site === "string" ? site : undefined };
}

/** `https://www.X.org/path/` -> `x.org/path` — same page, different punctuation. */
function samePage(a: string, b: string): boolean {
  const strip = (u: string) =>
    u
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/+$/, "");
  return strip(a) === strip(b);
}

/**
 * Would replacing `ours` with `theirs` be a pure downgrade?
 *
 * True when they are the SAME page and ours is no worse: identical but for a
 * trailing slash or `www.` (65 of 110 real changes — churn with no reader
 * benefit), or ours is https and theirs is http (15 more, which would have the
 * site hand readers an insecure link to a page we already have securely).
 *
 * Nothing editorial here: a genuinely different URL still wins, because
 * wikidata owns this field.
 */
function isNoBetter(ours: unknown, theirs: string): boolean {
  if (typeof ours !== "string" || !ours) return false;
  if (!samePage(ours, theirs)) return false;
  return ours === theirs || !(ours.startsWith("http://") && theirs.startsWith("https://"));
}

export const wikidataSource: Source = {
  id: SOURCE_ID,
  description: "Wikidata per-entity facts — official website (CC0). Inception, paradigms and designers go to review.",
  /*
   * `created` is deliberately NOT owned (owner's call, 2026-07-17).
   *
   * Wikidata's P571 is *inception* — when the project began. Our `created`
   * renders as "Appeared", i.e. first release. They are different facts and
   * they disagree for 26 of our languages: C++ 1985 vs 1983, Rust 2015 vs
   * 2006, Julia 2012 vs 2009, HTML 1993 vs 1989. Importing P571 into `created`
   * would relabel a project-start date as a release date and quietly make those
   * pages wrong.
   *
   * The inception value still reaches the review report, so the information is
   * not lost — it just needs a human, or a separate field, before it is a fact
   * this site asserts.
   */
  owns: ["extHomeURL", `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const entityUrl = ctx.options.entityUrl ? (qid: string) => `${ctx.options.entityUrl}${qid}.json` : ENTITY_URL;
    ctx.origin("https://www.wikidata.org/wiki/Special:EntityData/{QID}.json");

    for (const doc of ctx.nodes) {
      const sources = doc.data.sources as Record<string, unknown> | undefined;
      const qid = sources?.[SOURCE_ID];

      if (typeof qid !== "string" || !/^Q\d+$/.test(qid)) {
        if (doc.kind === "plang") ctx.unmatched(doc.key);
        continue;
      }

      let data: EntityData;
      try {
        data = JSON.parse(await ctx.fetch(entityUrl(qid))) as EntityData;
      } catch (err) {
        ctx.review({
          key: doc.key,
          kind: "fetch-error",
          message: `Could not fetch ${qid}: ${err instanceof Error ? err.message : String(err)}`,
        });
        continue;
      }

      const entity = extractEntity(data, qid);
      if (!entity) {
        ctx.review({ key: doc.key, kind: "bad-qid", message: `${qid} returned no entity — the QID may have been merged or deleted.` });
        continue;
      }

      ctx.match({ key: doc.key, method: "source-id", remoteId: qid });

      const facts = factsOf(entity);
      const patch: Record<string, unknown> = { sources: { [SOURCE_ID]: qid } };
      // Only write a fact we actually have: `undefined` in a patch means
      // "delete", and wikidata being silent is not a reason to drop our data.
      if (facts.extHomeURL !== undefined && !isNoBetter(doc.data.extHomeURL, facts.extHomeURL)) patch.extHomeURL = facts.extHomeURL;
      ctx.patch(doc.key, patch);

      // Inception is a SUGGESTION, not an owned fact — see `owns` above. Only
      // worth a human's attention when it actually disagrees with what we hold.
      if (facts.created !== undefined && facts.created !== doc.data.created) {
        ctx.review({
          key: doc.key,
          kind: "inception-suggestion",
          message: `${qid} gives inception ${facts.created}; we hold created ("Appeared") ${doc.data.created ?? "nothing"}. P571 is when the project BEGAN, not when it was released — confirm before changing.`,
          data: { inception: facts.created, created: doc.data.created },
        });
      }

      // Suggestions — reviewed by a human, never written (PLAN §5.3).
      const paradigms = itemIds(entity, PROPS.programmingParadigm);
      if (paradigms.length) {
        ctx.review({
          key: doc.key,
          kind: "paradigm-suggestion",
          message: `${qid} lists ${paradigms.length} programming paradigm claim(s). Map onto para/* and add to rels.paradigms if correct.`,
          data: { qids: paradigms },
        });
      }
      const typing = itemIds(entity, PROPS.typingDiscipline);
      if (typing.length) {
        ctx.review({
          key: doc.key,
          kind: "typing-suggestion",
          message: `${qid} lists ${typing.length} typing-discipline claim(s). Map onto tsys/* and add to rels.typeSystems if correct.`,
          data: { qids: typing },
        });
      }
      const designers = [...itemIds(entity, PROPS.designedBy), ...itemIds(entity, PROPS.developer)];
      if (designers.length) {
        ctx.review({
          key: doc.key,
          kind: "designer-suggestion",
          message: `${qid} lists designer/developer claim(s). There is no designer field in the v3 schema yet (the 'author' kind is deprecated, PLAN D2) — recorded for triage only.`,
          data: { qids: [...new Set(designers)] },
        });
      }
    }
  },
};
