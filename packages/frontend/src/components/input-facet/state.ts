import { Dispatchable } from "@plangs/frontend/dispatchable";
import type { EncodedFilter } from "@plangs/graph/auxiliar";

import type { InputFacetProps } from "./input-facet";

export type Entry = { value: string; label: string; count: number };

export class InputFacetState extends Dispatchable<InputFacetProps & { entries: Entry[]; order: Order; selected: Set<unknown> }> {
  /** Factory function for creating the initial state. */
  static initial(props: InputFacetProps): InputFacetState {
    return new InputFacetState({ ...props, entries: [], order: "facet-asc", selected: new Set() }).generateEntries();
  }

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

  toggleSelected(value: Entry["value"]) {
    const set = this.data.selected;
    set.has(value) ? set.delete(value) : set.add(value);
    this.dispatch();
  }

  removeEntry(value: Entry["value"]) {
    this.data.selected.delete(value);
    this.dispatch();
  }

  toggleOrder(which: "facet" | "count" | "sel") {
    const { order } = this.data;
    this.data.order = opposite(which, order);
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

  isSelected(value: Entry["value"]): boolean {
    return this.data.selected.has(value);
  }

  get entriesByValue(): Map<string, Entry> {
    const entries = new Map<string, Entry>();
    for (const entry of this.data.entries) entries.set(entry.value as string, entry);
    return entries;
  }

  /** Total number of entries, selected or not. */
  get size(): number {
    return this.data.entries.length;
  }

  get emptySelection(): boolean {
    return this.data.selected.size === 0;
  }

  get entries() {
    return this.data.entries;
  }

  /** Helpers */

  sort() {
    const { entries, order } = this.data;
    entries.sort((a, b) => CMP[order](this, a, b));
  }
}

export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc" | "sel-asc" | "sel-desc";

function opposite(which: "facet" | "count" | "sel", order: string): Order {
  if (which === "facet") return order === "facet-asc" ? "facet-desc" : "facet-asc";
  if (which === "count") return order === "count-desc" ? "count-asc" : "count-desc";
  return order === "sel-desc" ? "sel-asc" : "sel-desc";
}

export type Cmp = (state: InputFacetState, a: Entry, b: Entry) => number;

const CMP: Record<Order, Cmp> = {
  "facet-asc": (_, a, b) => a.label.localeCompare(b.label),
  "facet-desc": (_, a, b) => b.label.localeCompare(a.label),
  "count-asc": (_, a, b) => a.count - b.count,
  "count-desc": (_, a, b) => b.count - a.count,
  "sel-asc": (s, a, b) => Number(s.isSelected(a.value)) - Number(s.isSelected(b.value)),
  "sel-desc": (s, a, b) => Number(s.isSelected(b.value)) - Number(s.isSelected(a.value)),
} as const;
