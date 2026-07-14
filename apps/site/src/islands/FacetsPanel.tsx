import { useSelector } from "@xstate/store-react";
import { useEffect } from "react";
import { type FacetsContext, facetsStore, searchToSelection, selectionToSearch } from "../stores/facets";

export interface FacetOption {
  value: string; // slug, e.g. "functional"
  label: string; // display name
  count: number;
}
export interface FacetDimension {
  dim: string; // e.g. "paradigms" (matches data-<dim> on grid items)
  label: string;
  options: FacetOption[];
}

/** Apply the current selection to the pre-rendered grid by toggling visibility. */
function applyToGrid(ctx: FacetsContext): void {
  const items = document.querySelectorAll<HTMLElement>("[data-grid-item]");
  let visible = 0;
  for (const item of items) {
    let show = true;
    for (const [dim, values] of Object.entries(ctx.selected)) {
      if (!values.length) continue;
      const have = (item.dataset[dim] ?? "").split(" ").filter(Boolean);
      const has = ctx.mode === "all" ? values.every(v => have.includes(v)) : values.some(v => have.includes(v));
      if (!has) {
        show = false;
        break;
      }
    }
    item.hidden = !show;
    if (show) visible++;
  }
  const counter = document.querySelector<HTMLElement>("[data-result-count]");
  if (counter) counter.textContent = String(visible);
}

export default function FacetsPanel({ dimensions }: { dimensions: FacetDimension[] }) {
  const ctx = useSelector(facetsStore, s => s.context);

  // Restore from URL once on mount, then re-apply to the grid on every change.
  useEffect(() => {
    const { selected, mode } = searchToSelection(window.location.search);
    facetsStore.trigger.restore({ selected, mode });
    const onPop = () => {
      const s = searchToSelection(window.location.search);
      facetsStore.trigger.restore(s);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    applyToGrid(ctx);
    const url = `${window.location.pathname}${selectionToSearch(ctx)}`;
    window.history.replaceState(null, "", url);
  }, [ctx]);

  const activeCount = Object.values(ctx.selected).reduce((n, v) => n + v.length, 0);

  return (
    <aside className="cl-facetsMain flex flex-col gap-4 text-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold">
          Filters{activeCount > 0 ? <span className="ml-1 rounded bg-primary px-1.5 text-background">{activeCount}</span> : null}
        </span>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={ctx.mode === "all"}
              onChange={e => facetsStore.trigger.setMode({ mode: e.target.checked ? "all" : "any" })}
            />
            match all
          </label>
          <button type="button" className="underline" onClick={() => facetsStore.trigger.clearAll()} disabled={activeCount === 0}>
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
                <label key={o.value} className="flex items-center gap-2">
                  <input type="checkbox" checked={checked} onChange={() => facetsStore.trigger.toggle({ dim: d.dim, value: o.value })} />
                  <span className="flex-1 truncate">{o.label}</span>
                  <span className="opacity-60">{o.count}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
    </aside>
  );
}
