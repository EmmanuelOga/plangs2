import type { JSX } from "preact/jsx-runtime";

import { Dispatchable } from "@plangs/frontend/dispatchable";
import { SORT_DOWN, SORT_UP } from "@plangs/frontend/icons";
import { tw } from "@plangs/frontend/utils";
import type { EncodedFilter } from "@plangs/graph/auxiliar";
import type { PlangsGraph } from "@plangs/plangs/index";

import type { FacetTableProps } from "./facet-table";

export class FacetTableState<T> extends Dispatchable<
  FacetTableProps<T> & { pg?: PlangsGraph; entries: Entry[]; order: Order; selected: Set<string>; onChange: () => void; mode: "all" | "any" }
> {
  /** Factory function for creating the initial state. */
  static initial<T>(props: FacetTableProps<T> & { pg?: PlangsGraph; onChange: () => void; mode: "all" | "any" }): FacetTableState<T> {
    return new FacetTableState({ ...props, entries: [], order: "facet-asc", selected: new Set() }).generateEntries();
  }

  /** Updates is used when updating from a prop change. */
  generateEntries(updates?: FacetTableProps<T>): this {
    if (updates) Object.assign(this.data, updates);

    const { pg, config } = this.data;
    this.data.entries = [];
    if (!pg) return this;

    if (config.kind === "noderel") {
      const { edge, dir } = config;

      const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
      if (!emap) {
        console.error("No edges found for:", edge, dir);
        return this;
      }

      this.data.entries = [...emap.entries()]
        .filter(([, edges]) => edges.size > 0)
        .map(([key, edges]) => {
          // biome-ignore lint/style/noNonNullAssertion: the filter above ensures there is at least one edge.
          const anyEdge = edges.values().next().value!;
          const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? anyEdge.key;
          return { value: key, label: name, count: edges.size };
        });

      return this.sort();
    }

    if (config.kind === "year") {
      const years: Map<number, number> = new Map(); // year -> count
      for (const [key, { year }] of pg.nodes.pl) {
        if (!year) continue;
        years.set(year, (years.get(year) ?? 0) + 1);
      }

      this.data.entries = [...years.entries()].map(([year, count]) => {
        const strYear = `${year}`;
        return { value: strYear, label: strYear, count };
      });

      this.data.order = "facet-desc";
      return this.sort();
    }

    return this;
  }

  /** Actions */

  doSetMode(mode: "all" | "any") {
    this.data.mode = mode === "all" ? "all" : "any";
    this.dispatchChange();
  }

  doToggle(value: Entry["value"]) {
    const { selected } = this.data;
    selected.has(value) ? selected.delete(value) : selected.add(value);
    this.dispatchChange();
  }

  doToggleOrder(col: Col) {
    const { order } = this.data;
    this.data.order = opposite(col, order);
    this.sort();
  }

  doSetFacets({ values }: EncodedFilter) {
    const byVal = this.entriesByValue;

    if (this.config.kind === "missing") {
      console.warn("Couldn't set facets: missing facet configuration.");
      return;
    }

    for (const val of values) {
      // Prefix is stripped for brevity of URL encoding.
      const key = `${this.config.node}+${val}`;
      const entry = byVal.get(key);
      if (entry && !this.data.selected.has(key)) {
        this.data.selected.add(key);
      }
    }
    this.dispatchChange();
  }

  doResetSelection() {
    this.data.selected.clear();
    this.dispatchChange();
  }

  /** Queries */

  header(col: Col) {
    const { order, config } = this.data;

    let label = col as string;

    if (col === "facet" && config.kind === "noderel") {
      label = config.node;
    } else if (col === "facet" && config.kind === "year") {
      label = `${config.node} year`;
    }

    let icon: JSX.Element | false = false;

    if (config.kind !== "missing") {
      if (col === "facet") icon = (order === "facet-asc" && SORT_UP) || (order === "facet-desc" && SORT_DOWN);
      else if (col === "count") icon = (order === "count-asc" && SORT_UP) || (order === "count-desc" && SORT_DOWN);
      else icon = (order === "sel-asc" && SORT_UP) || (order === "sel-desc" && SORT_DOWN);
    }

    return (
      <span class={tw("inline-flex", "items-center justify-between", "gap-1")}>
        <span class={tw()}>{label}</span>
        <span class={tw("scale-75", "mt-1")}>{icon}</span>
      </span>
    );
  }

  isSelected(value: Entry["value"]): boolean {
    return this.data.selected.has(value);
  }

  get config() {
    return this.data.config;
  }

  get entriesByValue(): Map<string, Entry> {
    const entries = new Map<string, Entry>();
    for (const entry of this.data.entries) entries.set(entry.value as string, entry);
    return entries;
  }

  get entries() {
    return this.data.entries;
  }

  get values() {
    return this.data.selected;
  }

  get hasSelection(): boolean {
    return this.data.selected.size > 0;
  }

  get mode() {
    return this.data.mode ?? "TODO";
  }

  /** Helpers */

  dispatchChange() {
    this.dispatch();
    this.data.onChange();
  }

  private sort(): this {
    const { entries, order } = this.data;
    entries.sort((a, b) => CMP[order](this, a, b));
    this.maybeDispatch(); // This way we can use a state instance even without a preact component.
    this.data.onChange();
    return this;
  }
}

export type Col = "facet" | "count" | "sel";
export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc" | "sel-asc" | "sel-desc";

function opposite(col: Col, order: string): Order {
  if (col === "facet") return order === "facet-asc" ? "facet-desc" : "facet-asc";
  if (col === "count") return order === "count-desc" ? "count-asc" : "count-desc";
  return order === "sel-desc" ? "sel-asc" : "sel-desc";
}

// biome-ignore lint/suspicious/noExplicitAny: it is ok here because we don't care about the type of table state.
export type Cmp = (state: FacetTableState<any>, a: Entry, b: Entry) => number;

const CMP: Record<Order, Cmp> = {
  "facet-asc": (_, a, b) => a.label.localeCompare(b.label),
  "facet-desc": (_, a, b) => b.label.localeCompare(a.label),
  "count-asc": (_, a, b) => a.count - b.count,
  "count-desc": (_, a, b) => b.count - a.count,
  "sel-asc": (s, a, b) => Number(s.isSelected(a.value)) - Number(s.isSelected(b.value)),
  "sel-desc": (s, a, b) => Number(s.isSelected(b.value)) - Number(s.isSelected(a.value)),
} as const;

export type Entry = { value: string; label: string; count: number };
