import type { JSX } from "preact/jsx-runtime";

import { Filter } from "@plangs/auxiliar/filters";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { SORT_DOWN, SORT_UP } from "@plangs/frontend/auxiliar/icons";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

import type { FacetTableProps } from "./facet-table";

/** These we want to keep in the state for easy access. */
type PartialProps = Pick<FacetTableProps<string, string>, "groupKey" | "facetKey" | "config">;

export class FacetTableState extends Dispatchable<
  { main: AnyFacetsMainState; entries: Entry[]; order: Order; value: Filter<string | number | boolean> } & PartialProps
> {
  /** Factory function for creating the initial state. */
  static initial(main: AnyFacetsMainState, props: PartialProps): FacetTableState {
    return new FacetTableState({
      ...props,
      main,
      entries: [],
      order: props.config.kind === "year" ? "facet-desc" : "facet-asc",
      value: new Filter("any"),
    }).generateEntries();
  }

  /** Called on construction to generate the entries. */
  generateEntries(): this {
    const { config, main } = this.data;
    const pg = main.pg;

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
      for (const { year } of pg.nodes.pl.values) {
        if (!year) continue;
        years.set(year, (years.get(year) ?? 0) + 1);
      }

      this.data.entries = [...years.entries()].map(([year, count]) => {
        const strYear = `${year}`;
        return { value: year, label: strYear, count };
      });

      return this.sort();
    }

    console.error("Unknown config kind", config);

    return this;
  }

  /** Actions */

  doSetMode(mode: "all" | "any") {
    this.value.mode = mode === "all" ? "all" : "any";
    this.dispatch();
  }

  doToggle(entryVal: Entry["value"]) {
    const { value } = this.data;
    value.has(entryVal) ? value.delete(entryVal) : value.add(entryVal);
    this.dispatch();
  }

  doToggleOrder(col: Col) {
    const { order } = this.data;
    this.data.order = opposite(col, order);
    this.sort();
  }

  doResetSelection() {
    this.value.clear();
    this.dispatch();
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

    if (col === "facet") icon = (order === "facet-asc" && SORT_UP) || (order === "facet-desc" && SORT_DOWN);
    else if (col === "count") icon = (order === "count-asc" && SORT_UP) || (order === "count-desc" && SORT_DOWN);
    else icon = (order === "sel-asc" && SORT_UP) || (order === "sel-desc" && SORT_DOWN);

    return (
      <span class={tw("inline-flex", "items-center justify-between", "gap-1")}>
        <span class={tw()}>{label}</span>
        <span class={tw("scale-75", "mt-1")}>{icon}</span>
      </span>
    );
  }

  isSelected(entryVal: Entry["value"]): boolean {
    return this.value.has(entryVal);
  }

  get config() {
    return this.data.config;
  }

  /** All entries. */
  get entries() {
    return this.data.entries;
  }

  /** Selected entries. */
  get value() {
    return this.data.value;
  }

  /** Helpers */

  private sort(): this {
    const { entries, order } = this.data;
    entries.sort((a, b) => CMP[order](this, a, b));
    this.maybeDispatch(); // This way we can use a state instance even without a preact component.
    return this;
  }

  /** Dispatching on the the parent will trigger a render here too, so no need to dispatch twice. */
  override runDispatcher(): this {
    const { main, groupKey, facetKey, value } = this.data;
    main.doSetValue(groupKey, facetKey, value.clone());
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

export type Cmp = (state: FacetTableState, a: Entry, b: Entry) => number;

const CMP: Record<Order, Cmp> = {
  "facet-asc": (_, a, b) => a.label.localeCompare(b.label),
  "facet-desc": (_, a, b) => b.label.localeCompare(a.label),
  "count-asc": (_, a, b) => a.count - b.count,
  "count-desc": (_, a, b) => b.count - a.count,
  "sel-asc": (s, a, b) => Number(s.isSelected(a.value)) - Number(s.isSelected(b.value)),
  "sel-desc": (s, a, b) => Number(s.isSelected(b.value)) - Number(s.isSelected(a.value)),
} as const;

export type Entry = { value: string | number | boolean; label: string; count: number };
