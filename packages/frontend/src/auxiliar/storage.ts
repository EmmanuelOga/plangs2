import type { PlangsPage } from "@plangs/server/components/layout";

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
  | "facets-last-group"
  /** Last Vertex displayed on a {@link vertexInfo} component. */
  | "vertex-info";

export type Postfix = string;
export type StoreKey = `site-${PlangsPage}-${KeyType}` | `site-${PlangsPage}-${KeyType}-${Postfix}`;

/** Type checks keys for use with localStorage. */
export function storeKey(page: PlangsPage, key: KeyType, postfix?: Postfix): StoreKey {
  if (postfix) return `site-${page}-${key}-${postfix}`;
  return `site-${page}-${key}`;
}

// biome-ignore lint/suspicious/noExplicitAny: JSON can serialize any data.
export function storeUpdate(key: StoreKey, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// biome-ignore lint/suspicious/noExplicitAny: JSON can deserialize any data.
export function storeLoad(key: StoreKey): any {
  const jsonString = localStorage.getItem(key);
  if (!jsonString) return undefined;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Failed to load data from localStorage", { key, jsonString, e });
    localStorage.removeItem(key);
  }
}
