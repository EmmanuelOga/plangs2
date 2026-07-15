/**
 * Field ownership + patch application.
 *
 * PLAN §4.5: importers only write fields they own, so field ownership is
 * deterministic and no per-field provenance annotation is needed in YAML.
 * PLAN §5: this is also the fix for the legacy `ai/src/index.ts` clobbering
 * bug — enrichment physically cannot write a pipeline-owned field, because
 * `stagePatch` throws on any field outside the source's `owns` list.
 */

import { NAMESPACED_FIELDS } from "./fields.ts";
import type { FieldChange, NodeDoc } from "./types.ts";

/** A parsed entry from a source's `owns` list. */
interface OwnedField {
  /** Top-level field name (`githubColor`, `rankings`). */
  field: string;
  /** Sub-key for a namespaced map (`languish` in `rankings.languish`). */
  subKey?: string;
}

export function parseOwns(owns: readonly string[]): OwnedField[] {
  return owns.map(entry => {
    const dot = entry.indexOf(".");
    if (dot < 0) {
      if (NAMESPACED_FIELDS.includes(entry)) {
        throw new Error(`'${entry}' is a namespaced map: own a sub-key like '${entry}.<source-id>', not the whole map`);
      }
      return { field: entry };
    }
    const field = entry.slice(0, dot);
    const subKey = entry.slice(dot + 1);
    if (!NAMESPACED_FIELDS.includes(field)) {
      throw new Error(`'${entry}' uses a dotted path but '${field}' is not a namespaced map (${NAMESPACED_FIELDS.join(", ")})`);
    }
    if (!subKey || subKey.includes(".")) throw new Error(`Malformed owns entry '${entry}'`);
    return { field, subKey };
  });
}

/** Structural equality for the JSON-ish values that live in node YAML. */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  const ao = a as Record<string, unknown>;
  const bo = b as Record<string, unknown>;
  const ak = Object.keys(ao).sort();
  const bk = Object.keys(bo).sort();
  if (ak.length !== bk.length || ak.some((k, i) => k !== bk[i])) return false;
  return ak.every(k => deepEqual(ao[k], bo[k]));
}

/** Throw unless every field in `patch` is covered by `owns`. */
export function assertOwned(sourceId: string, owns: readonly string[], patch: Record<string, unknown>): void {
  const parsed = parseOwns(owns);
  const plain = new Set(parsed.filter(o => !o.subKey).map(o => o.field));
  const namespaced = new Map<string, Set<string>>();
  for (const o of parsed) {
    if (!o.subKey) continue;
    const set = namespaced.get(o.field) ?? new Set<string>();
    set.add(o.subKey);
    namespaced.set(o.field, set);
  }

  for (const [field, value] of Object.entries(patch)) {
    if (NAMESPACED_FIELDS.includes(field)) {
      const allowed = namespaced.get(field);
      if (!allowed) {
        throw new Error(`Source '${sourceId}' may not write '${field}' (not in owns: ${owns.join(", ")})`);
      }
      if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`Source '${sourceId}' must patch '${field}' with an object of sub-keys, got ${JSON.stringify(value)}`);
      }
      for (const subKey of Object.keys(value as Record<string, unknown>)) {
        if (!allowed.has(subKey)) {
          throw new Error(`Source '${sourceId}' may not write '${field}.${subKey}' (owns: ${owns.join(", ")})`);
        }
      }
      continue;
    }
    if (!plain.has(field)) {
      throw new Error(`Source '${sourceId}' may not write '${field}' (owns: ${owns.join(", ")})`);
    }
  }
}

/**
 * Apply `patch` to `doc.data` in place, restricted to `owns`, returning only
 * the fields that actually changed. Namespaced maps are merged sub-key-wise so
 * two sources can both contribute to `rankings` without touching each other.
 *
 * A patch value of `undefined` deletes the field (a source retracting a fact it
 * previously wrote).
 */
export function applyPatch(sourceId: string, owns: readonly string[], doc: NodeDoc, patch: Record<string, unknown>): FieldChange[] {
  assertOwned(sourceId, owns, patch);
  const changes: FieldChange[] = [];

  for (const [field, value] of Object.entries(patch)) {
    if (NAMESPACED_FIELDS.includes(field)) {
      const existing = (doc.data[field] ?? {}) as Record<string, unknown>;
      const next: Record<string, unknown> = { ...existing };
      for (const [subKey, subValue] of Object.entries(value as Record<string, unknown>)) {
        const before = existing[subKey];
        if (subValue === undefined) delete next[subKey];
        else next[subKey] = subValue;
        if (deepEqual(before, subValue)) continue;
        changes.push({ key: doc.key, field: `${field}.${subKey}`, from: before, to: subValue });
      }
      if (Object.keys(next).length) doc.data[field] = next;
      else delete doc.data[field];
      continue;
    }

    const before = doc.data[field];
    if (deepEqual(before, value)) continue;
    if (value === undefined) delete doc.data[field];
    else doc.data[field] = value;
    changes.push({ key: doc.key, field, from: before, to: value });
  }

  return changes;
}
