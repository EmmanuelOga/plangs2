import { kindOfPrefix, prefixOfKind } from "./kinds.ts";
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

export function kindOfKey(key: string): NodeKind | undefined {
  return parseKey(key)?.kind;
}

/** `pl/nim` → `pl+nim` (legacy). Only the kind separator changes. */
export function newToLegacy(key: string): string {
  const i = key.indexOf("/");
  return i < 0 ? key : `${key.slice(0, i)}+${key.slice(i + 1)}`;
}

/** `pl+nim` → `pl/nim` (v3). Only the first `+` (the kind separator) changes. */
export function legacyToNew(key: string): string {
  const i = key.indexOf("+");
  return i < 0 ? key : `${key.slice(0, i)}/${key.slice(i + 1)}`;
}

export function makeKey(kind: NodeKind, slug: string): NodeKey {
  return `${prefixOfKind(kind)}/${slug}` as NodeKey;
}
