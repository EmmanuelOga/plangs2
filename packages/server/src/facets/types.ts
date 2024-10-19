/** Utils to construct facet data. */

import type { InputFacetConfig } from "@plangs/frontend/components/input-facet/state";

/** Configuration for a facet: a titled group of inputs to use to filter nodes. */
export type Facet<T extends string> = {
  /* Title of the Facet */
  title: string;
  /* A unique key among facets. */
  key: string;
  /* Input keys */
  keys: T[];
};

export type InputKind = "checkbox" | "facet" | "multiple" | "search";

/** Definition for a facet: groups inputs under a title,  and derives a unique key from the title. */
export function facetGroup<T extends string>(title: string, keys: T[]): Facet<T> {
  return { title, key: title.replaceAll(/[\/\s]/g, "-").toLowerCase(), keys } as const;
}

/** Data for a checkbox input. */
export function checkbox(label: string) {
  const kind: InputKind = "checkbox";
  return { kind, label } as const;
}

/** Data for a facet input (input-facet tag). */
export function facet(label: string, jsonconf: InputFacetConfig) {
  const kind: InputKind = "facet";
  return { kind, label, jsonconf } as const;
}

/** Data for a multiple selection (input-sel tag). */
export function multiple(label: string) {
  const kind: InputKind = "multiple";
  return { kind, label } as const;
}

/** Data for a search input. */
export function search(label: string) {
  const kind: InputKind = "search";
  return { kind, label } as const;
}
