/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

export const ID_KEYS = [
  "todo",

  "mainNav", // Main navigation bar, toggled by the hamburger icon.

  "plGrid",
  "plInfo",
] as const;

export const CL_KEYS = [
  "todo",

  "facetsMain",
  "iconButton",
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
