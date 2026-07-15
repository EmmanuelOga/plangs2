import { createStore } from "@xstate/store";

export type FacetMode = "any" | "all";

export interface FacetsContext {
  /** dimension → selected facet slugs (e.g. `paradigms → ["functional","oop"]`). */
  selected: Record<string, string[]>;
  mode: FacetMode;
}

/**
 * One shared facets store per grid page (framework-agnostic, so all islands on
 * the page read the same state). URL sync happens in the island via
 * history.replaceState; the store never runs during SSR (PLAN §6.2).
 */
/**
 * NOTE: @xstate/store v4 handlers REPLACE the context with whatever they
 * return — they do not merge a partial. Returning `{ mode }` alone silently
 * dropped `selected`, so "match all" followed by any facet click threw
 * `Cannot read properties of undefined`. Always spread `ctx`.
 */
export const facetsStore = createStore({
  context: { selected: {}, mode: "any" } as FacetsContext,
  on: {
    toggle: (ctx: FacetsContext, e: { dim: string; value: string }): FacetsContext => {
      const cur = ctx.selected[e.dim] ?? [];
      const next = cur.includes(e.value) ? cur.filter(v => v !== e.value) : [...cur, e.value];
      const selected = { ...ctx.selected };
      if (next.length) selected[e.dim] = next;
      else delete selected[e.dim];
      return { ...ctx, selected };
    },
    setMode: (ctx: FacetsContext, e: { mode: FacetMode }): FacetsContext => ({ ...ctx, mode: e.mode }),
    clearAll: (ctx: FacetsContext): FacetsContext => ({ ...ctx, selected: {} }),
    restore: (ctx: FacetsContext, e: { selected: Record<string, string[]>; mode: FacetMode }): FacetsContext => ({
      ...ctx,
      selected: e.selected,
      mode: e.mode,
    }),
  },
});

/** Encode selection to readable query params: `?paradigms=functional,oop&mode=all`. */
export function selectionToSearch(ctx: FacetsContext): string {
  const params = new URLSearchParams();
  for (const [dim, values] of Object.entries(ctx.selected)) {
    if (values.length) params.set(dim, values.join(","));
  }
  if (ctx.mode !== "any") params.set("mode", ctx.mode);
  const s = params.toString();
  return s ? `?${s}` : "";
}

/** Parse query params back into a selection. */
export function searchToSelection(search: string): { selected: Record<string, string[]>; mode: FacetMode } {
  const params = new URLSearchParams(search);
  const selected: Record<string, string[]> = {};
  let mode: FacetMode = "any";
  for (const [key, value] of params) {
    if (key === "mode") mode = value === "all" ? "all" : "any";
    else if (value) selected[key] = value.split(",").filter(Boolean);
  }
  return { selected, mode };
}
