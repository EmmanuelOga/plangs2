import { h } from "preact";

import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";
import { tw } from "@plangs/frontend/utils";
import type { E, PlangsGraph } from "@plangs/plangs/index";
import { useRef } from "preact/hooks";
import type { InputSelElement } from "../input-sel";

export const TAG_NAME = "input-facet";

export type InputFacetProps = {
  pg?: PlangsGraph;
  edge?: E;
  dir?: "direct" | "inverse";
};

type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc";
type Entry = [string, number];
type Cmp = (a: Entry, b: Entry) => number;

class InputFacetState extends Dispatchable<Required<InputFacetProps> & { entries: Entry[]; order: Order }> {
  get entries() {
    return this.data.entries;
  }

  generateEntries(): this {
    this.data.entries = [];

    const { pg, edge, dir } = this.data;
    const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
    if (!emap) return this;

    this.data.entries = [...emap.entries2()].map(([_, anyEdge, edges]) => {
      const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? "";
      return [name, edges.size];
    });
    this.sort();
    return this;
  }

  sort() {
    const { entries, order } = this.data;
    const cmp: Cmp =
      order === "facet-asc"
        ? (a, b) => a[0].localeCompare(b[0])
        : order === "facet-desc"
          ? (a, b) => b[0].localeCompare(a[0])
          : order === "count-asc"
            ? (a, b) => a[1] - b[1]
            : (a, b) => b[1] - a[1];
    entries.sort(cmp);
  }

  toggleOrder(which: "facet" | "count") {
    const { order } = this.data;
    this.data.order = which === "facet" ? (order === "facet-asc" ? "facet-desc" : "facet-asc") : order === "count-desc" ? "count-asc" : "count-desc";
    this.sort();
    this.dispatch();
  }
}

export function InputFacet({ pg, edge, dir }: InputFacetProps) {
  if (!pg || !edge || !dir) return <div>...</div>;

  const state = useDispatchable(new InputFacetState({ pg, edge, dir, entries: [], order: "facet-asc" }).generateEntries());
  const selRef = useRef<InputSelElement | undefined>();

  const toggleFacet = () => state.toggleOrder("facet");
  const toggleCount = () => state.toggleOrder("count");

  const addEntry = (value: string) => {
    selRef.current?.addItem({ value, label: value });
  };

  return (
    <div>
      <div class={tw("mb-4", "max-h-[20rem]", "overflow-x-hidden overflow-y-scroll")}>
        <table class={tw("readable")}>
          <thead class="sticky top-0">
            <tr>
              <th>
                <button class="w-full text-left italic" type="button" onClick={toggleFacet} onKeyDown={toggleFacet}>
                  Facet
                </button>
              </th>
              <th>
                <button class="w-full text-center italic" type="button" onClick={toggleCount} onKeyDown={toggleCount}>
                  Count
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.entries.map(([add, count]) => (
              <tr key={add}>
                <td>
                  <button type="button" onClick={() => addEntry(add)}>
                    {add}
                  </button>
                </td>
                <td class="text-center">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* @ts-ignore TODO: need to add the definition so preact won't complain. */}
      {h("input-sel", { ref: selRef, name: `${edge}-${dir}-selection` })}
    </div>
  );
}

export const EVENTS = {} as const;
