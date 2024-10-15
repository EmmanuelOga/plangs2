/** Utils to construct facet data. */

import type { E, N } from "@plangs/plangs/schema";

/** Configuration for a facet: a titled group of inputs to use to filter nodes. */
export type Facet<T extends string> = {
  /* Title of the Facet */
  title: string;
  /* A unique key among facets. */
  key: string;
  /* Input keys */
  keys: T[];
};

/** Construct a {@link Facet} and derive a unique key from the combination of keys. */
export function facet<T extends string>(title: string, keys: T[]): Facet<T> {
  return { title, key: title.replaceAll(/[\/\s]/g, "-").toLowerCase(), keys };
}

/** Data for a search input. */
export function search(label: string, sel?: "trackSelection") {
  return { label, input: { kind: "search", inputSel: sel === "trackSelection" } } as const;
}

/** Data for a month input. */
export function month(label: string) {
  return { label, input: { kind: "month" } } as const;
}

/** Data for a checkbox input. */
export function checkbox(label: string, value?: string) {
  return { label, input: { kind: "checkbox", value } } as const;
}

/** Data for a facet input. */
export function facetInput(label: string, edge: E, node: N, dir: "direct" | "inverse" = "direct") {
  return { label, input: { kind: "facet", edge, dir, node } } as const;
}
