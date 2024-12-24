/**
 * @file utilities to type check DOM "id" and "class" attributes.
 */

// Elements for which we have 0 or 1 instance.
export const ID_KEYS = [
  "todo",

  "mainContent", // Main content area in the layout.
  "mainNav", // Main navigation bar, toggled by the hamburger icon.
  "vertexGrid", // Main grid for vertices.
] as const;

// Elements for which we may have multiple instances.
export const CL_KEYS = [
  "todo",

  "facetsMain", // The element inside which the facets are rendered.
  "facetsWrapper", // The div wrapper for the facets, which we use to measure its size.
  "facetsBar", // The aside menu for facets.
  "facetsSelect", // The select box for facets.

  "iconButton", // A Div wrapper for IconButton component.
  "vertexThumbn", // Thumbnail for a vertex.
  "vertexThumbnImg", // We'll use the placeholder images until after DOM ready.
  "vertexInfo", // Information about a vertex.
  "externalLink", // External link to another site.
] as const;

export const DATA_KEYS = [
  "vertex-key", // The key of a vertex, ex: "pl+1",
  "vertex-name", // The name of a vertex. ex: "plang", matches the graph accessor, ex: `pg.plang`.
  "vertex-ranking", // The ranking of a vertex, ex: "1" (or nothing if not ranked).
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
