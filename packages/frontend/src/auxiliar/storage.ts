import type { PlangsPage } from "@plangs/server/components/layout";

export type StorageKey =
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
  /** Last Vertex displayed on a {@link VertexInfo} component. */
  | "vertex-detail"
  /** Whether the VertexInfo component is open. */
  | "vertex-detail-open";

// Alias to avoid errors if server side rendering is used.
const stapi = (typeof localStorage === "undefined" ? undefined : localStorage) as Storage | undefined;
const doc = (typeof document === "undefined" ? undefined : document) as Document;

export const getStore = (page: PlangsPage) => new Store(page);
export const getCurrentPage = () => ((doc ? doc.body.dataset.page : undefined) ?? "_any_page_") as PlangsPage;
export const getCurrentPageStore = () => getStore(getCurrentPage());

/**
 * Wrapper for localStorage.
 * * Ensures we use different keys per page.
 * * Serializes/deserializes data to/from JSON.
 */
export class Store {
  constructor(readonly page: PlangsPage) {}

  // biome-ignore lint/suspicious/noExplicitAny: JSON can serialize any data.
  update(key: StorageKey, data: any): void {
    const fk = this.fullKey(key);
    stapi?.setItem(fk, JSON.stringify(data));
  }

  // biome-ignore lint/suspicious/noExplicitAny: JSON can deserialize any data.
  load(key: StorageKey): any {
    const fk = this.fullKey(key);
    const jsonString = stapi?.getItem(fk);
    if (!jsonString) return undefined;
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error("Failed to load data from localStorage", { key: fk, jsonString, e });
      stapi?.removeItem(fk);
    }
  }

  private fullKey(key: StorageKey): string {
    return `plangs-${this.page}-${key}`;
  }
}
