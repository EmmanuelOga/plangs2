import { type NodeKind, parseKey } from "@plangs/schema";

/**
 * URL policy: the mapping from graph keys to the paths this site serves.
 *
 * Deliberately a site concern, not a graph one. The rules here still follow
 * the v2 scheme; since the 2026-07-17 pivot that is inertia rather than a
 * contract (`pnpm url-parity` only *reports* legacy-URL drift now). Changing
 * the scheme is legitimate as a deliberate effort with redirects — see
 * ROADMAP "modernization".
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
