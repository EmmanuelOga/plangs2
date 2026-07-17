/**
 * Stack Exchange importer (PLAN §5) — Stack Overflow tag activity as a
 * popularity signal, CC BY-SA.
 *
 * Unlike every other importer this one needs no name-matching heuristic. Our
 * nodes already carry `stackovTags`: the canonical Stack Overflow tag(s) for the
 * language. That tag IS the identity, so a node's question count is an identity
 * lookup, not a guess — the same reason the wikidata seeder trusts an
 * `extWikipediaPath`. We hit the `/tags/{tags}/info` batch endpoint and rank the
 * matched nodes by question count.
 *
 * This is a THIRD popularity lens, not a replacement: it lands in
 * `rankings.stackexchange` beside `rankings.languish` and `rankings.pypl` and is
 * never merged into one number (PLAN §5, "Rankings UX note").
 */

import { indexRemote, normalize, resolveNode, reviewFor, sourceIdOf } from "../core/match.ts";
import type { NodeDoc, ReviewItem, RunContext, Source } from "../core/types.ts";

const SOURCE_ID = "stackexchange";

/** The Stack Exchange site whose tags we count. Overridable via `--opt.site`. */
export const DEFAULT_SITE = "stackoverflow";

const API_BASE = "https://api.stackexchange.com/2.3/tags";

/**
 * `/tags/{tags}/info` accepts at most 100 semicolon-separated tags per request
 * (the API's documented vectorized-request cap). We have ~150 tagged nodes, so
 * the real run makes two calls; tests stay under one.
 */
export const MAX_TAGS_PER_QUERY = 100;

/** One tag's activity, as returned by `/tags/{tags}/info`. */
export interface TagInfo {
  name: string;
  /** Number of questions carrying the tag. */
  count: number;
}

/**
 * Parse a `/tags/{tags}/info` response. The API returns `{ items: [...] }` on
 * success and `{ error_id, error_name, error_message }` on failure — a 200 can
 * still carry an error body, so we check for it explicitly rather than trusting
 * the HTTP status the fetcher already accepted.
 */
export function parseTagInfo(json: string): TagInfo[] {
  let doc: unknown;
  try {
    doc = JSON.parse(json);
  } catch {
    throw new Error("Stack Exchange: response was not JSON — upstream format changed");
  }
  const obj = (doc ?? {}) as Record<string, unknown>;
  if (obj.error_id !== undefined) {
    throw new Error(`Stack Exchange API error ${obj.error_id}: ${obj.error_name} — ${obj.error_message}`);
  }
  if (!Array.isArray(obj.items)) {
    throw new Error("Stack Exchange: response has no 'items' array — upstream format changed");
  }
  const out: TagInfo[] = [];
  for (const item of obj.items) {
    const name = (item as Record<string, unknown>)?.name;
    const count = (item as Record<string, unknown>)?.count;
    // A tag with no questions (or a tag that does not exist) is simply omitted
    // from `items` — there is no zero row — so absence means "no data", handled
    // downstream as an unmatched node, never as count 0.
    if (typeof name === "string" && typeof count === "number") out.push({ name, count });
  }
  return out;
}

/**
 * Build a batch-info URL. Each tag is percent-encoded (so `c++` becomes `c%2B%2B`
 * rather than a stray `+` the server would read as a space); the `;` separators
 * are literal, since that is the API's delimiter.
 */
export function tagInfoUrl(tags: readonly string[], site: string): string {
  const path = tags.map(encodeURIComponent).join(";");
  return `${API_BASE}/${path}/info?site=${encodeURIComponent(site)}`;
}

/** The node's Stack Overflow tags, in authored order. */
function stackTagsOf(doc: NodeDoc): string[] {
  const tags = doc.data.stackovTags;
  return Array.isArray(tags) ? tags.filter((t): t is string => typeof t === "string" && t.length > 0) : [];
}

function chunk<T>(items: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/** A node paired with the tag it resolved to. */
interface Match {
  doc: NodeDoc;
  tag: string;
  method: "source-id" | "exact";
  count: number;
}

/**
 * Pick the single node a shared tag's count belongs to, or `undefined` if it
 * cannot be decided.
 *
 * A tag is routinely claimed by several of our nodes: an implementation inherits
 * its host language's Stack Overflow tag, so `pl/v8`, `pl/typescript` and
 * `pl/bun` all carry `javascript`. Stack Overflow's question count is one number,
 * and attributing it to each claimant would reprise the "PyPy #1 beside
 * Python #1" bug that a 2c baseline caught for languish/pypl. So exactly one
 * owner is chosen:
 *   1. a human pin (`sources.stackexchange`) — the authoritative designation;
 *   2. otherwise the claimant whose OWN identity is the tag (its normalized name
 *      or slug equals the tag). This is a deterministic tie-break among nodes
 *      that all legitimately claim the tag, not a fuzzy remote guess.
 * Anything else (no name match, or two pins/two name matches) is genuinely
 * ambiguous and ranks nobody — a human resolves it with a pin.
 */
export function resolveOwner(tag: string, claimants: readonly Match[]): Match | undefined {
  if (claimants.length === 1) return claimants[0];
  const pinned = claimants.filter(c => c.method === "source-id");
  if (pinned.length === 1) return pinned[0];
  if (pinned.length > 1) return undefined; // two nodes pin the same tag — a data error, not our call to break
  const norm = normalize(tag);
  const named = claimants.filter(c => normalize(String(c.doc.data.name ?? "")) === norm || normalize(c.doc.slug) === norm);
  return named.length === 1 ? named[0] : undefined;
}

function sharedTagReview(node: Match, tag: string, claimants: readonly Match[], owner?: Match): ReviewItem {
  const others = claimants.map(c => c.doc.key).filter(k => k !== node.doc.key);
  const message = owner
    ? `Tag '${tag}' is shared; its Stack Overflow count is ranked under ${owner.doc.key}. '${node.doc.key}' also carries it (an implementation inheriting the host language's tag) and is left unranked. Pin sources.${SOURCE_ID} on '${node.doc.key}' only if it should own the count instead.`
    : `Tag '${tag}' is claimed by ${claimants.length} nodes (${claimants.map(c => c.doc.key).join(", ")}) with no clear owner, so none is ranked. Pin sources.${SOURCE_ID} on the one that should own the Stack Overflow count.`;
  return { key: node.doc.key, kind: "shared-tag", message, data: { tag, others } };
}

export const stackexchangeSource: Source = {
  id: SOURCE_ID,
  description: "Stack Overflow tag question counts — a popularity ranking keyed by each node's stackovTags (CC BY-SA).",
  owns: [`rankings.${SOURCE_ID}`, `sources.${SOURCE_ID}`],

  async run(ctx: RunContext): Promise<void> {
    const site = ctx.options.site ?? DEFAULT_SITE;
    // `--opt.batch` exists only so a test can force chunking with a small set.
    const perQuery = Math.max(1, Number(ctx.options.batch ?? MAX_TAGS_PER_QUERY) || MAX_TAGS_PER_QUERY);

    const nodes = ctx.nodesOfKind("plang");

    // Collect every tag we need to look up: each node's stackovTags plus any
    // pinned sources.stackexchange. Sorted + deduped so the request URL (and the
    // recorded fixture) is deterministic across runs.
    const wanted = new Set<string>();
    for (const doc of nodes) {
      for (const tag of stackTagsOf(doc)) wanted.add(tag);
      const pin = sourceIdOf(doc, SOURCE_ID);
      if (pin) wanted.add(pin);
    }
    const tags = [...wanted].sort();
    if (!tags.length) return;

    const counts = new Map<string, number>();
    for (const group of chunk(tags, perQuery)) {
      const url = tagInfoUrl(group, site);
      ctx.origin(url);
      for (const { name, count } of parseTagInfo(await ctx.fetch(url))) counts.set(name, count);
    }

    // The remote catalog is exactly what came back. A node whose tag is absent
    // (no questions, or a synonym the API resolved to a different canonical name)
    // resolves to `none` and is reported unmatched, never mis-ranked.
    const records = [...counts].map(([name, count]) => ({ name, count }));
    const index = indexRemote(records, r => ({ id: r.name, exact: [] }));

    const matched: Match[] = [];
    for (const doc of nodes) {
      const res = resolveNode(index, doc, SOURCE_ID, stackTagsOf(doc), r => r.name);
      const review = reviewFor(doc, SOURCE_ID, res, r => r.name);
      if (review) {
        ctx.review(review);
        continue;
      }
      if (!res.record) {
        // Only nodes that actually claim a tag are worth flagging as unmatched;
        // a node with no stackovTags simply is not a Stack Overflow entry.
        if (stackTagsOf(doc).length) ctx.unmatched(doc.key);
        continue;
      }
      matched.push({ doc, tag: res.record.name, count: res.record.count, method: res.method });
    }

    // Collapse each tag to a single owner (see resolveOwner) before ranking, so a
    // count shared across an implementation family is attributed once.
    const byTag = new Map<string, Match[]>();
    for (const m of matched) byTag.set(m.tag, [...(byTag.get(m.tag) ?? []), m]);

    const owners: Match[] = [];
    for (const [tag, claimants] of byTag) {
      const owner = resolveOwner(tag, claimants);
      for (const c of claimants) if (c !== owner) ctx.review(sharedTagReview(c, tag, claimants, owner));
      if (owner) owners.push(owner);
    }

    // Rank the owners by descending question count. Ties break on the tag name so
    // the assigned rank is deterministic (same reason as pypl).
    owners.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
    owners.forEach(({ doc, tag, method }, i) => {
      ctx.match({ key: doc.key, method, remoteId: tag });
      ctx.patch(doc.key, {
        rankings: { [SOURCE_ID]: i + 1 },
        sources: { [SOURCE_ID]: tag },
      });
    });
  },
};
