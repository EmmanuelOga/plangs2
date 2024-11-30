import type { JSX } from "preact/jsx-runtime";

import { SORT_DOWN, SORT_UP } from "@plangs/frontend/auxiliar/icons";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsEdgeName, PlangsVertexName } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

export type Val = string | number | boolean;
export type Entry = { value: Val; label: string; count: number };
export type FacetTableConfig =
  /** Configure the table to select a related Vertex. */
  | { kind: "relation"; edge: PlangsEdgeName; dir: "forward" | "backward" }
  /** Configure the table to select the value of a property of a Vertex. */
  | { kind: "property"; vertex: PlangsVertexName; property: string };

export function generateEntries(pg: PlangsGraph, config: FacetTableConfig): Entry[] {
  if (config.kind === "relation") {
    const { edge, dir } = config;

    const edges = pg.edges[edge];
    if (!edges) {
      console.error("No edges found for:", edge, dir);
      return [];
    }

    const relations = dir === "forward" ? edges.entriesBackward : edges.entriesForward;
    const source = dir === "forward" ? edges.toSource : edges.fromSource;

    return [...relations].map(([key, toKeys]) => {
      const name = source.get(key as any)?.name ?? key;
      return { value: key, label: name, count: toKeys.size };
    });
  }

  // TODO: kind === 'year' matches only plang but could be generalized.
  if (config.kind === "property") {
    // TODO: actually use the property. The code below assumes the property is 'created'.
    const property = config.property;

    const years: Map<StrDate, number> = new Map(); // year -> count
    for (const { created } of pg.plang.values) {
      if (!created.value) continue;
      years.set(created.value, (years.get(created.value) ?? 0) + 1);
    }
    return [...years.entries()].map(([year, count]) => {
      const strYear = `${year}`;
      return { value: year, label: strYear, count };
    });
  }

  console.error("Unknown config kind", config);
  return [];
}

export type Column = "facet" | "count" | "sel";
export type Order = "facet-asc" | "facet-desc" | "count-asc" | "count-desc" | "sel-asc" | "sel-desc";

export function label(col: Column, config: FacetTableConfig): string {
  if (col === "facet" && config.kind === "vertexrel") return config.edge;
  if (col === "facet" && config.kind === "year") return `${config.vertex} year`;
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

export type IsSel = (entry: Entry) => boolean;
export type Cmp = (a: Entry, b: Entry, isSel?: IsSel) => number;

export const CMP: Record<Order, Cmp> = {
  "facet-asc": (a, b) => a.label.localeCompare(b.label),
  "facet-desc": (a, b) => b.label.localeCompare(a.label),
  "count-asc": (a, b) => a.count - b.count,
  "count-desc": (a, b) => b.count - a.count,
  "sel-asc": (a, b, isSel) => (isSel ? Number(isSel(a)) - Number(isSel(b)) : 0),
  "sel-desc": (a, b, isSel) => (isSel ? Number(isSel(b)) - Number(isSel(a)) : 0),
} as const;

export function sortEntries(entries: Entry[], order: Order, isSel?: IsSel): Entry[] {
  const less = CMP[order];
  return entries.sort((a, b) => less(a, b, isSel));
}
