import { SORT_DOWN, SORT_UP } from "@plangs/frontend/auxiliar/icons";
import type { E, N, PlangsGraph } from "@plangs/plangs/index";
import type { JSX } from "preact/jsx-runtime";
import type { FacetTableState } from "./state";

export type Val = string | number | boolean;
export type Entry = { value: Val; label: string; count: number };
export type FacetTableConfig = { kind: "noderel"; node: N; edge: E; dir: "direct" | "inverse" } | { kind: "year"; node: N };

export function generateEntries(pg: PlangsGraph, config: FacetTableConfig): Entry[] {
  if (config.kind === "noderel") {
    const { node, edge, dir } = config;

    // TODO: check the node.

    const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
    if (!emap) {
      console.error("No edges found for:", edge, dir);
      return [];
    }

    const entries = [...emap.entries()]
      .filter(([, edges]) => edges.size > 0)
      .map(([key, edges]) => {
        // biome-ignore lint/style/noNonNullAssertion: the filter above ensures there is at least one edge.
        const anyEdge = edges.values().next().value!;
        const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? anyEdge.key;
        return { value: key, label: name, count: edges.size };
      });
    // sort.

    return entries;
  }

  if (config.kind === "year") {
    const years: Map<number, number> = new Map(); // year -> count
    for (const { year } of pg.nodes.pl.values) {
      if (!year) continue;
      years.set(year, (years.get(year) ?? 0) + 1);
    }

    const entries = [...years.entries()].map(([year, count]) => {
      const strYear = `${year}`;
      return { value: year, label: strYear, count };
    });
    // sort;
    return entries;
  }

  console.error("Unknown config kind", config);

  return [];
}

export type Column = "facet" | "count" | "sel";
export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc" | "sel-asc" | "sel-desc";

export function label(col: Column, config: FacetTableConfig): string {
  if (col === "facet" && config.kind === "noderel") return config.node;
  if (col === "facet" && config.kind === "year") return `${config.node} year`;
  return col;
}

export function icon(col: Column, order: Order): JSX.Element | false {
  if (col === "facet") return (order === "facet-asc" && SORT_UP) || (order === "facet-desc" && SORT_DOWN);
  if (col === "count") return (order === "count-asc" && SORT_UP) || (order === "count-desc" && SORT_DOWN);
  return (order === "sel-asc" && SORT_UP) || (order === "sel-desc" && SORT_DOWN);
}

export function opposite(col: Column, order: string): Order {
  if (col === "facet") return order === "facet-asc" ? "facet-desc" : "facet-asc";
  if (col === "count") return order === "count-desc" ? "count-asc" : "count-desc";
  return order === "sel-desc" ? "sel-asc" : "sel-desc";
}

export type Cmp<GroupKey extends string, FacetKey extends string> = (state: FacetTableState<GroupKey, FacetKey>, a: Entry, b: Entry) => number;

export const CMP: Record<Order, Cmp<string, string>> = {
  "facet-asc": (_, a, b) => a.label.localeCompare(b.label),
  "facet-desc": (_, a, b) => b.label.localeCompare(a.label),
  "count-asc": (_, a, b) => a.count - b.count,
  "count-desc": (_, a, b) => b.count - a.count,
  "sel-asc": (s, a, b) => Number(s.value.has(a.value)) - Number(s.value.has(b.value)),
  "sel-desc": (s, a, b) => Number(s.value.has(b.value)) - Number(s.value.has(a.value)),
} as const;
