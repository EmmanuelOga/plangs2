import { Dispatchable } from "@plangs/frontend/dispatchable";
import type { EncodedFilter } from "@plangs/graph/auxiliar";

import { caller } from "@plangs/plangs/util";
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
    console.log(caller());
    const { selected } = this.data;
    console.log("bef", JSON.stringify([...selected]));
    selected.has(value) ? selected.delete(value) : selected.add(value);
    console.log("aft", JSON.stringify([...selected]));
    this.dispatch();
  }

  removeEntry(value: Entry["value"]) {
    this.data.selected.delete(value);
    this.dispatch();
  }

  toggleOrder(col: Col) {
    const { order } = this.data;
    this.data.order = opposite(col, order);
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

  header(col: Col): string {
    const { order } = this.data;
    if (col === "facet") return order === "facet-asc" ? "Facet ▲" : order === "facet-desc" ? "Facet ▼" : "Facet";
    if (col === "count") return order === "count-asc" ? "Count ▲" : order === "count-desc" ? "Count ▼" : "Count";
    return order === "sel-asc" ? "Sel ▲" : order === "sel-desc" ? "Sel ▼" : "Sel";
  }

  isSelected(value: Entry["value"]): boolean {
    return this.data.selected.has(value);
  }

  get entriesByValue(): Map<string, Entry> {
    const entries = new Map<string, Entry>();
    for (const entry of this.data.entries) entries.set(entry.value as string, entry);
    return entries;
  }

  get entries() {
    return this.data.entries;
  }

  get selected() {
    return this.data.selected;
  }

  get hasSelection(): boolean {
    return this.data.selected.size > 0;
  }

  /** Helpers */

  sort() {
    const { entries, order } = this.data;
    entries.sort((a, b) => CMP[order](this, a, b));
  }
}

export type Col = "facet" | "count" | "sel";
export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc" | "sel-asc" | "sel-desc";

function opposite(col: Col, order: string): Order {
  if (col === "facet") return order === "facet-asc" ? "facet-desc" : "facet-asc";
  if (col === "count") return order === "count-desc" ? "count-asc" : "count-desc";
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
