/**
 * The contract between the SSR grid (`NodeGrid.astro`) and the facets island
 * (`FacetsPanel.tsx`).
 *
 * The grid renders every card server-side and stamps each one with its facet
 * values; the island filters by toggling visibility. That means the two sides
 * agree on a set of attribute names *at runtime* — and nothing used to check
 * that agreement. The grid hard-coded `data-typesystems` while the island read
 * `item.dataset[dim.toLowerCase()]`, so the pairing held only by coincidence:
 * change the dim to `type-systems`, or emit `data-typeSystems`, and the filter
 * silently matches nothing. No type error, no test failure, no console warning —
 * the facet just stops working.
 *
 * So the attribute name is computed, once, by `facetAttr()`, and both sides call
 * it. There is no string for them to disagree about.
 *
 * Note this reads/writes attributes via `getAttribute`, NOT `dataset`. `dataset`
 * silently transforms names (`data-type-systems` ⇄ `dataset.typeSystems`), which
 * is the exact class of mismatch this module exists to prevent.
 */

/** Facet dimensions, in display order. The single source of truth. */
export const DIMS = ["paradigms", "tags", "platforms", "typeSystems", "licenses"] as const;

export type Dim = (typeof DIMS)[number];

/** A facet selection: dimension → chosen slugs. */
export type Selection = Partial<Record<Dim, string[]>>;

const isDim = (s: string): s is Dim => (DIMS as readonly string[]).includes(s);

/** Narrow an arbitrary string (a URL param, say) to a known dimension. */
export function asDim(s: string): Dim | undefined {
  return isDim(s) ? s : undefined;
}

/**
 * The attribute a card carries for `dim`. Lower-cased because HTML attribute
 * names are case-insensitive: the browser stores `data-typeSystems` as
 * `data-typesystems`, so emitting mixed case and reading it back verbatim
 * would never match.
 */
function facetAttr(dim: Dim): string {
  return `data-facet-${dim.toLowerCase()}`;
}

/** Grid side: the facet attributes for one card, ready to spread onto the element. */
export function facetAttrs(facets: Partial<Record<Dim, string[]>>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const dim of DIMS) out[facetAttr(dim)] = (facets[dim] ?? []).join(" ");
  return out;
}

/**
 * The only thing the read side needs from a card.
 *
 * Narrower than `Element` on purpose: matching is pure attribute lookup, so
 * saying that in the type keeps this module testable under plain Node instead of
 * dragging in a DOM implementation to construct elements nobody renders.
 */
export interface FacetCard {
  getAttribute(name: string): string | null;
}

/** Island side: the facet values a card carries for `dim`. */
function readFacet(el: FacetCard, dim: Dim): string[] {
  return (el.getAttribute(facetAttr(dim)) ?? "").split(" ").filter(Boolean);
}

/** Does a card satisfy the selection under `mode`? */
export function matches(el: FacetCard, selected: Selection, mode: "any" | "all"): boolean {
  for (const dim of DIMS) {
    const want = selected[dim];
    if (!want?.length) continue;
    const have = readFacet(el, dim);
    const ok = mode === "all" ? want.every(v => have.includes(v)) : want.some(v => have.includes(v));
    if (!ok) return false;
  }
  return true;
}
