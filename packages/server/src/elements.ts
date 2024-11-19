/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

// Elements for which we have 0 or 1 instance.
export const ID_KEYS = [
  "todo",

  "mainNav", // Main navigation bar, toggled by the hamburger icon.
  "nodeGrid", // Main grid for nodes.
] as const;

// Elements for which we may have multiple instances.
export const CL_KEYS = [
  "todo",

  "facetsMain", // A Div wrapper for FacetsMain component.
  "iconButton", // A Div wrapper for IconButton component.
  "nodeThumbn", // Thumbnail for a node.
  "nodeInfo", // Information about a node.
] as const;

export type IDKey = (typeof ID_KEYS)[number];
export type CLKey = (typeof CL_KEYS)[number];

export function cssID(key: IDKey): `id-${IDKey}` {
  return `id-${key}`;
}

export function cssClass(key: CLKey): `cl-${CLKey}` {
  return `cl-${key}`;
}
