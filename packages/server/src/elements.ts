/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

import { INPUT_PROPS } from "./pages/filters";

export const FILTER_KEY = Object.keys(INPUT_PROPS) as (keyof typeof INPUT_PROPS)[];
export const ID_KEYS = ["todo", "plTab", "plInfo", "plGrid", "filterToggle", "filters", ...FILTER_KEY] as const;
export const CL_KEYS = ["todo", "plThumb", "navLink", "inputFilter"] as const;

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
