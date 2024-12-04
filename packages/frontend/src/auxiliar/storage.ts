import type { TAB } from "@plangs/server/components/layout";

export type KeyType =
  /** Light/Dark mode. */
  | "theme"
  /** Show/Hide the hamburguer menu. */
  | "hamburger-menu"
  /** Show/Hide Facets Browser. */
  | "facets-browser"
  /** Last facets value, saved between page switching. */
  | "facet-value"
  /** Name of the last open group on the facets browser. */
  | "facets-group"
  /** Last Vertex displayed on a {@link vertexInfo} component. */
  | "vertex-info";

export type Postfix = string;
export type StorageKey = `site-${TAB}-${KeyType}` | `site-${TAB}-${KeyType}-${Postfix}`;

/** Type checks keys for use with localStorage. */
export function storageKey(tab: TAB, key: KeyType, postfix?: Postfix): StorageKey {
  if (postfix) return `site-${tab}-${key}-${postfix}`;
  return `site-${tab}-${key}`;
}

// biome-ignore lint/suspicious/noExplicitAny: JSON can serialize any data.
export function updateLocalStorage(key: StorageKey, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// biome-ignore lint/suspicious/noExplicitAny: JSON can deserialize any data.
export function loadLocalStorage(key: StorageKey): any {
  const jsonString = localStorage.getItem(key);
  if (!jsonString) return undefined;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Failed to load data from localStorage", { key, jsonString, e });
    localStorage.removeItem(key);
  }
}
