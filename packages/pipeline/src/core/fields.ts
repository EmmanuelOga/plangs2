/**
 * THE canonical shape of a node YAML file.
 *
 * This module is the single source of truth for field order + serialization,
 * shared by the pipeline patcher and by `scripts/data-fmt.mjs` (which imports
 * it directly — Node strips the types). Keep it dependency-free apart from
 * `yaml` so the formatter script stays runnable on its own.
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

/** Sort the keys of the `rels` map and each rel's target list (stable diffs). */
function orderRels(rels: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const relKey of Object.keys(rels).sort()) {
    const targets = rels[relKey];
    out[relKey] = Array.isArray(targets) ? [...new Set(targets as string[])].sort() : targets;
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
