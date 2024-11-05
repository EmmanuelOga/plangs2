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

  "facetsMain", // A Div wrapper for FacetsMain component.
  "iconButton", // A Div wrapper for IconButton component.
  "navLink",
  "pill",
  "plThumb",
] as const;

export type IDKey = (typeof ID_KEYS)[number];
export type CLKey = (typeof CL_KEYS)[number];

export function cssID(key: IDKey): `id-${IDKey}` {
  return `id-${key}`;
}

export function cssClass(key: CLKey): `cl-${CLKey}` {
  return `cl-${key}`;
}
