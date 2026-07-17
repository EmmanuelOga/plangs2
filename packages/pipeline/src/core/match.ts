/**
 * Matching remote records to nodes (PLAN §5).
 *
 * Importers are node-driven: our node set is small and curated, the remote
 * catalogs are large (linguist ships ~800 languages, we track ~270). So we
 * index the REMOTE records and walk our nodes looking each one up.
 *
 * The ladder order is deliberate and non-negotiable:
 *   1. `sources.<id>` — an id already recorded on the node. Authoritative.
 *   2. exact — a deterministic identifier lookup (name/alias table).
 *   3. fuzzy — normalized/heuristic. NEVER written; emitted to the review
 *      report so a human can promote it into a `sources.<id>` entry.
 */

import type { MatchMethod, NodeDoc, ReviewItem } from "./types.ts";

/** Lowercase and strip punctuation/whitespace. Only ever used for fuzzy candidates. */
export function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[\s._/+#-]+/g, "")
    .trim();
}

/** Identifiers a remote record can be found by. */
export interface RemoteKeys {
  /** Canonical id — what gets written to `sources.<sourceId>`. */
  id: string;
  /**
   * Exact, deterministic identifiers: other spellings of THIS record's own
   * identity (a filesystem name, a numeric id).
   *
   * Not "any string upstream associates with the record". An alias table is
   * usually built for a different question than ours — Linguist's exists to
   * label a *file*, so JavaScript lists `node` as an alias and `bun`/`deno` as
   * interpreters. Those name real, separate projects that we model as their own
   * nodes. Putting them here silently stamps Bun with JavaScript's identity.
   * Such strings belong in `fuzzy`.
   */
  exact: string[];
  /**
   * Suggestions: strings that *associate* a record with a node without being its
   * identity (alias tables, interpreter lists).
   *
   * These reach the normalized index only, so they can surface as review
   * candidates and never get written. A human promotes a real one by pinning
   * `sources.<id>` on the node, which the ladder then treats as authoritative.
   */
  fuzzy?: string[];
}

export interface RemoteIndex<T> {
  byId(id: string): T | undefined;
  byExact(name: string): T | undefined;
  fuzzy(name: string): T[];
  size: number;
}

/**
 * Build a lookup over remote records. Exact keys are inserted first-wins so a
 * record's primary name beats another record's alias (the legacy Linguist
 * lookup did multiple passes for the same reason — callers control priority by
 * ordering `exact`).
 */
export function indexRemote<T>(records: readonly T[], keys: (record: T) => RemoteKeys): RemoteIndex<T> {
  const byId = new Map<string, T>();
  const byExact = new Map<string, T>();
  const byNormalized = new Map<string, T[]>();

  const all = records.map(record => ({ record, keys: keys(record) }));

  for (const { record, keys: k } of all) if (!byId.has(k.id)) byId.set(k.id, record);

  // Pass 1: primary ids. Pass 2: aliases. Keeps a primary name from being
  // shadowed by some other record's alias.
  for (const { record, keys: k } of all) {
    const primary = k.id.trim().toLowerCase();
    if (primary && !byExact.has(primary)) byExact.set(primary, record);
  }
  for (const { record, keys: k } of all) {
    for (const alias of k.exact) {
      const a = alias.trim().toLowerCase();
      if (a && !byExact.has(a)) byExact.set(a, record);
    }
  }

  // The normalized index carries `fuzzy` keys too: they are exactly the
  // associations a human should be shown and asked about.
  for (const { record, keys: k } of all) {
    for (const alias of [k.id, ...k.exact, ...(k.fuzzy ?? [])]) {
      const norm = normalize(alias);
      if (!norm) continue;
      const bucket = byNormalized.get(norm);
      if (bucket) {
        if (!bucket.includes(record)) bucket.push(record);
      } else byNormalized.set(norm, [record]);
    }
  }

  return {
    byId: id => byId.get(id),
    byExact: name => byExact.get(name.trim().toLowerCase()),
    fuzzy: name => byNormalized.get(normalize(name)) ?? [],
    size: records.length,
  };
}

/**
 * Outcome of running the ladder for one node.
 *
 * A discriminated union on purpose: only the `matched` arm carries a `record`,
 * so the type system — not a code review — is what stops a caller from writing
 * a fuzzy guess to disk.
 */
export type Resolution<T> =
  /** A trustworthy match. Safe to patch. */
  | { method: Exclude<MatchMethod, "fuzzy">; record: T; remoteId: string; candidates: [] }
  /** Heuristic candidates. Report only — there is no `record` to write. */
  | { method: "fuzzy"; record?: undefined; remoteId?: string; candidates: T[] }
  /**
   * A recorded `sources.<id>` that no longer resolves upstream (renamed,
   * merged, deleted, or a typo). Distinct from `none` on purpose: the node has
   * a dead pin and will silently never be updated again until a human fixes it,
   * so callers MUST surface it rather than lump it in with "no match".
   */
  | { method: "stale-id"; record?: undefined; remoteId: string; candidates: [] }
  /** No match at all. */
  | { method: "none"; record?: undefined; remoteId?: string; candidates: [] };

/** Read `sources.<sourceId>` off a node, if it is a usable string id. */
export function sourceIdOf(doc: NodeDoc, sourceId: string): string | undefined {
  const sources = doc.data.sources as Record<string, unknown> | undefined;
  const id = sources?.[sourceId];
  return typeof id === "string" && id ? id : undefined;
}

/**
 * The review item for a resolution that must not be written (`fuzzy` or
 * `stale-id`), or `undefined` when there is nothing to say. Shared so every
 * source reports these two cases identically instead of each inventing wording.
 */
export function reviewFor<T>(doc: NodeDoc, sourceId: string, res: Resolution<T>, idOf: (record: T) => string): ReviewItem | undefined {
  const label = doc.data.name ?? doc.slug;
  if (res.method === "stale-id") {
    return {
      key: doc.key,
      kind: "stale-source-id",
      message: `sources.${sourceId} is '${res.remoteId}', which no longer exists upstream (renamed, merged, or a typo). This node is pinned to a dead id and will NOT be updated until it is fixed.`,
      data: { recordedId: res.remoteId },
    };
  }
  if (res.method === "fuzzy") {
    const candidates = res.candidates.map(idOf);
    return {
      key: doc.key,
      kind: "fuzzy-match",
      message: `No exact ${sourceId} match for '${label}'. Candidates: ${candidates.join(", ")}. Set sources.${sourceId} to accept one.`,
      data: { candidates },
    };
  }
  return undefined;
}

/**
 * Run the ladder for `doc`. `exactNames` are the node-side identifiers to try
 * against the remote index, in priority order.
 *
 * A `fuzzy` result deliberately carries `record: undefined`: callers must not
 * write it, only report it.
 */
export function resolveNode<T>(
  index: RemoteIndex<T>,
  doc: NodeDoc,
  sourceId: string,
  exactNames: readonly (string | undefined)[],
  idOf: (record: T) => string,
): Resolution<T> {
  const recordedId = sourceIdOf(doc, sourceId);
  if (recordedId) {
    const record = index.byId(recordedId);
    if (record) return { record, method: "source-id", remoteId: recordedId, candidates: [] };
    // A recorded id that no longer resolves is a data bug, not a reason to
    // silently fall back to guessing — report it as its own case.
    return { method: "stale-id", remoteId: recordedId, candidates: [] };
  }

  const names = exactNames.filter((n): n is string => typeof n === "string" && n.trim().length > 0);

  for (const name of names) {
    const record = index.byExact(name);
    if (record) return { record, method: "exact", remoteId: idOf(record), candidates: [] };
  }

  for (const name of names) {
    const candidates = index.fuzzy(name);
    const first = candidates[0];
    if (first) return { method: "fuzzy", candidates, remoteId: idOf(first) };
  }

  return { method: "none", candidates: [] };
}
