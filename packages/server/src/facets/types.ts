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

/** Definition for a facet: groups inputs under a title,  and derives a unique key from the title. */
export function facetGroup<T extends string>(title: string, keys: T[]): Facet<T> {
  return { title, key: title.replaceAll(/[\/\s]/g, "-").toLowerCase(), keys } as const;
}

/** Data for a checkbox input. */
export function checkbox(label: string) {
  return { kind: "checkbox", label } as const;
}

/** Data for a facet input (input-facet tag). */
export function facet(label: string, props: { edge: E; node: N; dir?: "direct" | "inverse" } | { source: string }) {
  return { kind: "facet", label, props: "source" in props ? props : { dir: "direct", ...props } } as const;
}

/** Data for a multiple selection (input-sel tag). */
export function multiple(label: string) {
  return { kind: "multiple", label } as const;
}

/** Data for a search input. */
export function search(label: string) {
  return { kind: "search", label } as const;
}
