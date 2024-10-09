import { Dispatchable } from "@plangs/frontend/dispatchable";

import type { EncodedFilter } from "@plangs/graph/auxiliar";
import type { E, PlangsGraph } from "@plangs/plangs/index";
import type { Item } from "../input-sel";
import type { InputFacetProps } from "./input-facet";

export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc";
export type Entry = Item & {
  count: number;
};

export type Cmp = (a: Entry, b: Entry) => number;

export class InputFacetState extends Dispatchable<InputFacetProps & { entries: Entry[]; order: Order; selected: Set<unknown> }> {
  /** Initialization */

  /** Updates is used when updating from a prop change. */
  generateEntries(updates?: InputFacetProps): this {
    this.data.entries = [];
    if (updates) Object.assign(this.data, updates);
    const { pg, edge, dir, node } = this.data;
    if (!pg || !edge || !dir || !node) return this;

    const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
    if (!emap) return this;

    this.data.entries = [...emap.entries2()].map(([key, anyEdge, edges]) => {
      const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? anyEdge.key;
      return { value: key, label: name, count: edges.size };
    });
    this.sort();
    return this;
  }

  /** Actions */

  addEntry(entry: Entry) {
    this.data.selected.add(entry.value);
    this.dispatch();
  }

  removeEntry(removed: Item): void {
    this.data.selected.delete(removed.value);
    this.dispatch();
  }

  toggleOrder(which: "facet" | "count") {
    const { order } = this.data;
    this.data.order = which === "facet" ? (order === "facet-asc" ? "facet-desc" : "facet-asc") : order === "count-desc" ? "count-asc" : "count-desc";
    this.sort();
    this.dispatch();
  }

  /** NOTE: doesn't dispatch! (so the caller can batch actions). */
  setFacets({ values }: EncodedFilter): Entry[] {
    const result: Entry[] = [];
    const byVal = this.entriesByValue;

    for (const val of values) {
      // Prefix is stripped for brevity of URL encoding.
      const key = `${this.data.node}+${val}`;
      const entry = byVal.get(key);
      if (entry && !this.data.selected.has(key)) {
        result.push(entry);
        this.data.selected.add(key);
      }
    }

    return result;
  }

  /** Queries */

  get entriesByValue(): Map<string, Entry> {
    const entries = new Map<string, Entry>();
    for (const entry of this.data.entries) entries.set(entry.value as string, entry);
    return entries;
  }

  get size() {
    return this.data.entries.length;
  }

  *entries(): Generator<Entry> {
    for (const entry of this.data.entries) {
      if (!this.data.selected.has(entry.value)) yield entry;
    }
  }

  /** Helpers */

  sort() {
    const { entries, order } = this.data;
    entries.sort(CMP[order]);
  }
}

const CMP: Record<Order, Cmp> = {
  "facet-asc": (a, b) => a.label.localeCompare(b.label),
  "facet-desc": (a, b) => b.label.localeCompare(a.label),
  "count-asc": (a, b) => a.count - b.count,
  "count-desc": (a, b) => b.count - a.count,
} as const;
