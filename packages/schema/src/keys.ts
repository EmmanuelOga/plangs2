import { kindOfPrefix } from "./kinds.ts";
import type { NodeKind } from "./types.ts";

/** A v3 node key, e.g. `pl/nim`, `para/functional`, `lic/mit`. */
export type NodeKey = `${string}/${string}`;

/** Valid v3 key: `prefix/slug`. Slug preserves legacy chars (`+`, `-`, `#`, …). */
const VALID_KEY = /^[a-z]+\/[a-zA-Z0-9_+\-#.]+$/;

export interface ParsedKey {
  kind: NodeKind;
  prefix: string;
  slug: string;
  key: NodeKey;
}

export function parseKey(key: string): ParsedKey | undefined {
  if (!VALID_KEY.test(key)) return undefined;
  const slash = key.indexOf("/");
  const prefix = key.slice(0, slash);
  const slug = key.slice(slash + 1);
  const kind = kindOfPrefix(prefix);
  if (!kind) return undefined;
  return { kind, prefix, slug, key: key as NodeKey };
}

/**
 * `pl+nim` → `pl/nim` (v3). Only the first `+` (the kind separator) changes.
 *
 * One-way on purpose. The inverse (`newToLegacy`) existed only to make
 * `toSerializedGraph()` emit v2 keys; E2 dropped that, so nothing in v3 has a
 * reason to WRITE a legacy key. This direction still has readers: legacy refs
 * in blog frontmatter, and the frozen v2 fixture the drift reports read.
 */
export function legacyToNew(key: string): string {
  const i = key.indexOf("+");
  return i < 0 ? key : `${key.slice(0, i)}/${key.slice(i + 1)}`;
}
