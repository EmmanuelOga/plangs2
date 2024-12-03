/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

// Elements for which we have 0 or 1 instance.
export const ID_KEYS = [
  "todo",

  "mainNav", // Main navigation bar, toggled by the hamburger icon.
  "vertexGrid", // Main grid for vertices.
] as const;

// Elements for which we may have multiple instances.
export const CL_KEYS = [
  "todo",

  "facetsMain", // A Div wrapper for FacetsMain component.
  "iconButton", // A Div wrapper for IconButton component.
  "vertexThumbn", // Thumbnail for a vertex.
  "vertexInfo", // Information about a vertex.
] as const;

export const DATA_KEYS = [
  "vertex-key", // The key of a vertex.
  "vertex-ranking", // The ranking of a vertex.
] as const;

export type IDKey = (typeof ID_KEYS)[number];
export type CLKey = (typeof CL_KEYS)[number];
export type DataKey = (typeof DATA_KEYS)[number];

export function cssID(key: IDKey): `id-${IDKey}` {
  return `id-${key}`;
}

export function cssClass(key: CLKey): `cl-${CLKey}` {
  return `cl-${key}`;
}

export function dataKey(key: DataKey): `data-${DataKey}` {
  return `data-${key}`;
}
