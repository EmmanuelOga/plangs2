/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

import { INPUT_PROPS } from "./components/filters";

export const FILTER_KEY = Object.keys(INPUT_PROPS) as (keyof typeof INPUT_PROPS)[];

export const ID_KEYS = [
  "todo",

  "filterToggle",
  "filters",
  "mainNav",
  "plGrid",
  "plInfo",
  "plTab",

  ...FILTER_KEY,
] as const;

export const CL_KEYS = [
  "todo",

  "facet", // A box containing the input filters of a facet.
  "facetInput", // An input filter of a facet.
  "facetLink", // A link to a facet box.

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
