import { useSelector } from "@xstate/store-react";
import { useEffect, useId, useState } from "react";
import { type Dim, matches } from "../lib/facets-contract";
import { parseLegacyFragment } from "../lib/legacy-fragment";
import { type FacetsContext, facetsStore, searchToSelection, selectionToSearch } from "../stores/facets";

interface FacetOption {
  value: string; // slug, e.g. "functional"
  label: string; // display name
  count: number;
}
export interface FacetDimension {
  /** A known dimension — the attribute it reads is derived, never spelled out. */
  dim: Dim;
  label: string;
  options: FacetOption[];
}

/**
 * Apply the current selection to the pre-rendered grid by toggling visibility.
 *
 * The match itself lives in the shared contract, so this side cannot drift from
 * what NodeGrid.astro emitted.
 */
function applyToGrid(ctx: FacetsContext): void {
  const items = document.querySelectorAll<HTMLElement>("[data-grid-item]");
  let visible = 0;
  for (const item of items) {
    const show = matches(item, ctx.selected, ctx.mode);
    item.hidden = !show;
    if (show) visible++;
  }
  const counter = document.querySelector<HTMLElement>("[data-result-count]");
  if (counter) counter.textContent = String(visible);
}

interface Props {
  dimensions: FacetDimension[];
  noun: string;
  total: number;
}

export default function FacetsPanel({ dimensions, noun, total }: Props) {
  const ctx = useSelector(facetsStore, s => s.context);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Restore from URL once on mount; keep in sync with back/forward.
  // Legacy #rison deep links are upgraded to query params exactly once.
  useEffect(() => {
    const legacy = parseLegacyFragment(window.location.hash);
    if (legacy) {
      facetsStore.trigger.restore(legacy);
      history.replaceState(null, "", window.location.pathname + selectionToSearch(legacy));
    } else {
      facetsStore.trigger.restore(searchToSelection(window.location.search));
    }
    const onPop = () => facetsStore.trigger.restore(searchToSelection(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    applyToGrid(ctx);
    window.history.replaceState(null, "", `${window.location.pathname}${selectionToSearch(ctx)}`);
    // Deterministic "interactive" signal. `astro-island` drops its `ssr`
    // attribute before React has attached handlers, so tests that click on
    // that signal race the hydration and silently no-op.
    document.documentElement.dataset.facetsReady = "1";
  }, [ctx]);

  // Close the mobile sheet on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeCount = Object.values(ctx.selected).reduce((n, v) => n + v.length, 0);

  return (
    <>
      {/* Narrow containers: a trigger that opens the facets as a bottom sheet. */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex min-h-11 items-center gap-2 self-start rounded border border-primary px-3 text-primary @3xl:hidden">
        Filters
        {activeCount > 0 && <span className="rounded bg-primary px-1.5 text-background">{activeCount}</span>}
      </button>

      {open && (
        <button type="button" aria-label="Close filters" className="fixed inset-0 z-40 bg-foreground/40 @3xl:hidden" onClick={() => setOpen(false)} />
      )}

      <aside
        id={panelId}
        aria-label={`Filter ${noun}`}
        className={[
          "flex-col gap-4 text-sm",
          // Bottom sheet on narrow containers, static sidebar when wide.
          "fixed inset-x-0 bottom-0 z-50 max-h-[70dvh] overflow-y-auto rounded-t-2xl border border-primary/30 bg-background p-4",
          "@3xl:static @3xl:z-auto @3xl:max-h-none @3xl:rounded-none @3xl:border-0 @3xl:bg-transparent @3xl:p-0",
          open ? "flex" : "hidden @3xl:flex",
        ].join(" ")}>
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold">
            Filters
            {activeCount > 0 && <span className="ml-1 rounded bg-primary px-1.5 text-background">{activeCount}</span>}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => facetsStore.trigger.setMode({ mode: ctx.mode === "all" ? "any" : "all" })}
              aria-pressed={ctx.mode === "all"}
              className="min-h-11 rounded border border-primary/40 px-2 @3xl:min-h-0">
              match {ctx.mode}
            </button>
            <button
              type="button"
              className="min-h-11 underline @3xl:min-h-0"
              onClick={() => facetsStore.trigger.clearAll()}
              disabled={activeCount === 0}>
              clear
            </button>
          </div>
        </div>

        {dimensions.map(d => (
          <fieldset key={d.dim} className="flex flex-col gap-1">
            <legend className="font-medium text-primary">{d.label}</legend>
            <div className="flex max-h-64 flex-col gap-0.5 overflow-y-auto pr-1">
              {d.options.map(o => {
                const checked = (ctx.selected[d.dim] ?? []).includes(o.value);
                return (
                  // shrink-0 is load-bearing: inside a `max-h-* flex-col`
                  // scroller, flex children shrink below their content height,
                  // which collapsed every row into overlapping text.
                  <label key={o.value} className="flex min-h-11 shrink-0 cursor-pointer items-center gap-2 @3xl:min-h-7">
                    <input
                      type="checkbox"
                      className="size-4 shrink-0 accent-[var(--color-primary)]"
                      checked={checked}
                      onChange={() => facetsStore.trigger.toggle({ dim: d.dim, value: o.value })}
                    />
                    <span className="flex-1 truncate">{o.label}</span>
                    <span className="shrink-0 opacity-60">{o.count}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}

        <button type="button" className="min-h-11 rounded bg-primary text-background @3xl:hidden" onClick={() => setOpen(false)}>
          Show <span data-result-count-mirror>{total}</span> results
        </button>
      </aside>
    </>
  );
}
