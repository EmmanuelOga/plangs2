/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

import { PL_INPUTS } from "./facets/pl_config";

export const FILTER_KEY = Object.keys(PL_INPUTS) as (keyof typeof PL_INPUTS)[];

export const ID_KEYS = [
  "todo",

  "mainNav", // Main navigation bar, toggled by the hamburger icon.
  "currentFacet", // Header of the current facet on the filters panel.

  "filters",
  "plGrid",
  "plInfo",

  ...FILTER_KEY,
] as const;

export const CL_KEYS = [
  "todo",

  "facet", // Box containing the input filters of a facet.
  "facetInput", // Input filter of a facet.
  "facetLink", // Link to a facet box.
  "facetIndicator", // Indicator next to facet link.

  "navLink",
  "pill",
  "plThumb",
] as const;

export type IDKey = (typeof ID_KEYS)[number];
export type CLKey = (typeof CL_KEYS)[number];

export function id(key: IDKey): `id-${IDKey}` {
  return `id-${key}`;
}

export function elem(key: IDKey): HTMLElement | null {
  return document.getElementById(id(key));
}

export function elems(key: CLKey): HTMLCollectionOf<HTMLElement> {
  return document.getElementsByClassName(cl(key)) as HTMLCollectionOf<HTMLElement>;
}

export function cl(key: CLKey): `cl-${CLKey}` {
  return `cl-${key}`;
}
