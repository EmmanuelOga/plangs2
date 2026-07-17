import { type NodeKind, parseKey } from "@plangs/schema";

/**
 * URL policy: the mapping from graph keys to the paths this site serves.
 *
 * Deliberately a site concern, not a graph one. The rules here are v2
 * compatibility constraints (`pnpm url-parity` asserts all 514 of them), so they
 * answer "what did the old site serve?" rather than "what is this node?" — the
 * graph should not have to know.
 */

/**
 * URL segment for a kind. Lower-cased to preserve the legacy scheme exactly
 * (`typeSystem` → `/typesystem/...`); every other kind is already lowercase.
 */
export function urlKind(kind: NodeKind): string {
  return kind.toLowerCase();
}

/** Legacy-compatible: `/{slug}` for plangs, `/{kind}/{slug}` for everything else. */
export function hrefForKey(key: string): string {
  const p = parseKey(key);
  if (!p) return "#";
  return p.kind === "plang" ? `/${p.slug}` : `/${urlKind(p.kind)}/${p.slug}`;
}
