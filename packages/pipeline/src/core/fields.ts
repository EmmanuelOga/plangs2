/**
 * THE canonical shape of a node YAML file.
 *
 * This module is the single source of truth for field order + serialization,
 * shared by the pipeline patcher and by `scripts/data-fmt.mjs`, which imports it
 * as `@plangs/pipeline/fields` (a public subpath; Node strips the types). Keep
 * it dependency-free apart from `yaml`: that is what lets the formatter script
 * run without dragging in the pipeline's Anthropic/jsdom/turndown deps.
 *
 * The ordering is the one established by `scripts/migrate-definitions.mjs`
 * (`FIELD_ORDER` + `orderData`), extended with the v3 provenance/ranking
 * fields. Re-formatting the migrated dataset MUST produce a zero diff.
 */

import { parse as parseYaml, stringify as stringifyYaml } from "yaml";

/** Fields pinned to the top, in this order — the human-readable identity of a node. */
export const FIELD_ORDER_HEAD: readonly string[] = ["name", "shortDesc", "description", "created", "keywords"];

/**
 * Fields pinned to the bottom, in this order — machine-written provenance and
 * the relation map. Everything not in HEAD or TAIL sorts alphabetically between
 * them (matching the legacy migration output exactly).
 */
export const FIELD_ORDER_TAIL: readonly string[] = ["rankings", "trends", "sources", "updated", "rels"];

/**
 * Namespaced maps: a pipeline source may only write the sub-key matching its
 * own id (e.g. the `languish` source owns `rankings.languish`). Enforced by the
 * patcher so importers can never clobber each other.
 */
export const NAMESPACED_FIELDS: readonly string[] = ["rankings", "trends", "sources"];

/** Serialization options. `lineWidth: 0` disables wrapping — one fact per line. */
const YAML_OPTS = { lineWidth: 0 } as const;

/** Reorder a node document's top-level keys into canonical order. */
export function orderData<T extends Record<string, unknown>>(data: T): T {
  const keys = Object.keys(data);
  const head = FIELD_ORDER_HEAD.filter(k => keys.includes(k));
  const tail = FIELD_ORDER_TAIL.filter(k => keys.includes(k));
  const pinned = new Set<string>([...FIELD_ORDER_HEAD, ...FIELD_ORDER_TAIL]);
  const middle = keys.filter(k => !pinned.has(k)).sort();
  const out: Record<string, unknown> = {};
  for (const k of [...head, ...middle, ...tail]) out[k] = data[k];
  return out as T;
}

/** Qualifier key order inside an annotated ref (D8): `ref` first, then valid time. */
const ANNOTATED_REF_ORDER: readonly string[] = ["ref", "since", "until"];

/**
 * Canonical inner form of one rel target (D8 annotated refs). An object with
 * only `ref` collapses to the bare key — one canonical spelling per fact.
 * Anything that isn't a `{ref: string, ...}` object passes through untouched;
 * the graph loader is what reports it, the formatter never destroys data.
 */
function canonicalTarget(target: unknown): unknown {
  if (typeof target !== "object" || target === null || Array.isArray(target)) return target;
  const t = target as Record<string, unknown>;
  if (typeof t.ref !== "string") return target;
  const keys = Object.keys(t);
  if (keys.length === 1) return t.ref;
  const out: Record<string, unknown> = {};
  for (const q of ANNOTATED_REF_ORDER) if (q in t) out[q] = t[q];
  for (const k of keys.filter(k => !ANNOTATED_REF_ORDER.includes(k)).sort()) out[k] = t[k];
  return out;
}

/** The target's node key (bare string or annotated `ref`) for sorting/dedup. */
function targetKey(target: unknown): string {
  if (target && typeof target === "object" && !Array.isArray(target)) {
    const ref = (target as Record<string, unknown>).ref;
    if (typeof ref === "string") return ref;
  }
  return String(target);
}

/**
 * Canonicalize one rel's target list: normalize each entry, dedup, sort by
 * target key. Dedup drops exact duplicates and a bare key subsumed by an
 * annotated form of the same ref; two annotated entries with the SAME ref but
 * different qualifiers are both kept (that conflict is the author's to
 * resolve — the loader warns, the formatter never picks a winner).
 */
function orderRelTargets(targets: unknown[]): unknown[] {
  const normalized = targets.map(canonicalTarget);
  const annotatedKeys = new Set(
    normalized.filter(t => t !== null && typeof t === "object" && typeof (t as Record<string, unknown>).ref === "string").map(targetKey),
  );
  const seen = new Set<string>();
  const out: unknown[] = [];
  for (const t of normalized) {
    if (typeof t === "string" && annotatedKeys.has(t)) continue;
    const id = typeof t === "string" ? t : JSON.stringify(t);
    if (seen.has(id)) continue;
    seen.add(id);
    out.push(t);
  }
  return out.sort((a, b) => {
    const ka = targetKey(a);
    const kb = targetKey(b);
    if (ka !== kb) return ka < kb ? -1 : 1;
    const ia = typeof a === "string" ? a : JSON.stringify(a);
    const ib = typeof b === "string" ? b : JSON.stringify(b);
    return ia < ib ? -1 : ia > ib ? 1 : 0;
  });
}

/** Sort the keys of the `rels` map and each rel's target list (stable diffs). */
function orderRels(rels: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const relKey of Object.keys(rels).sort()) {
    const targets = rels[relKey];
    out[relKey] = Array.isArray(targets) ? orderRelTargets(targets) : targets;
  }
  return out;
}

/** Sort the sub-keys of the namespaced provenance maps. */
function orderNamespaced(value: unknown): unknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;
  const src = value as Record<string, unknown>;
  const out: Record<string, unknown> = {};
  for (const k of Object.keys(src).sort()) out[k] = src[k];
  return out;
}

/** Drop `undefined` / `null` values and empty arrays/objects — they add noise. */
function prune(data: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    if (!Array.isArray(v) && typeof v === "object" && Object.keys(v as object).length === 0) continue;
    out[k] = v;
  }
  return out;
}

/** Apply the full canonical shape (order + inner sorting + pruning) to a doc. */
export function canonicalize<T extends Record<string, unknown>>(doc: T): T {
  const pruned = prune(doc);
  for (const field of NAMESPACED_FIELDS) {
    if (field in pruned) pruned[field] = orderNamespaced(pruned[field]);
  }
  const rels = pruned.rels;
  if (rels && typeof rels === "object" && !Array.isArray(rels)) {
    pruned.rels = orderRels(rels as Record<string, unknown>);
  }
  return orderData(pruned) as T;
}

/** Serialize a node document to canonical YAML text. Idempotent by construction. */
export function formatNodeYaml(doc: Record<string, unknown>): string {
  return stringifyYaml(canonicalize(doc), YAML_OPTS);
}

/** Parse node YAML text into a plain document (never `null`). */
export function parseNodeYaml(text: string): Record<string, unknown> {
  return (parseYaml(text) ?? {}) as Record<string, unknown>;
}

/** Re-format YAML text. `formatText(formatText(x)) === formatText(x)`. */
export function formatText(text: string): string {
  return formatNodeYaml(parseNodeYaml(text));
}
