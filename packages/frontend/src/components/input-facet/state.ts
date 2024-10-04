import { Dispatchable } from "@plangs/frontend/dispatchable";

import type { Item } from "../input-sel";
import type { InputFacetProps } from "./input-facet";

export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc";
export type Cmp = (a: Entry, b: Entry) => number;
export type Entry = Item & {
  count: number;
};

export class InputFacetState extends Dispatchable<Required<InputFacetProps> & { entries: Entry[]; order: Order; selected: Set<unknown> }> {
  /** Initialization */

  generateEntries(): this {
    this.data.entries = [];

    const { pg, edge, dir } = this.data;
    const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
    if (!emap) return this;

    this.data.entries = [...emap.entries2()].map(([key, anyEdge, edges]) => {
      const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? "";
      return { value: key, label: name, count: edges.size };
    });
    this.sort();
    return this;
  }

  /** Actions */

  addSelected(entry: Entry) {
    this.data.selected.add(entry.value);
    this.dispatch();
  }

  removeSelected(removed: Item): void {
    this.data.selected.delete(removed.value);
    this.dispatch();
  }

  toggleOrder(which: "facet" | "count") {
    const { order } = this.data;
    this.data.order = which === "facet" ? (order === "facet-asc" ? "facet-desc" : "facet-asc") : order === "count-desc" ? "count-asc" : "count-desc";
    this.sort();
    this.dispatch();
  }

  /** Queries */

  *entries(): Generator<Entry> {
    for (const entry of this.data.entries) {
      if (!this.data.selected.has(entry.value)) yield entry;
    }
  }

  /** Helpers */

  sort() {
    const { entries, order } = this.data;
    const cmp: Cmp =
      order === "facet-asc"
        ? (a, b) => a.label.localeCompare(b.label)
        : order === "facet-desc"
          ? (a, b) => b.label.localeCompare(a.label)
          : order === "count-asc"
            ? (a, b) => a.count - b.count
            : (a, b) => b.count - a.count;
    entries.sort(cmp);
  }
}
