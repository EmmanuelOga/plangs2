/** Helpers related to storing the facets state into the URL fragment and/or localStorage. */

import { RISON } from "rison2";

import { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { isEmpty } from "@plangs/frontend/auxiliar/utils";
import type { TAB } from "@plangs/server/components/layout";
import type { SerializedFacets } from "./state";

/**
 * Attempts to deserialize the URL Fragment (expects RISON encoding).
 * Clears the fragment if a bad encoding is found.
 */
export function facetsFromFragment(fragment = window.location.hash): SerializedFacets<string> | undefined {
  try {
    const data = fragment.slice(fragment.indexOf("#") + 1).trim();
    if (data.length > 2 && data.startsWith("(") && data.endsWith(")")) {
      const filters = RISON.parse(data);
      return filters;
    }
  } catch (e) {
    console.warn("Failed to parse URL fragment.");
    window.location.hash = "";
  }
}

/**
 * Attempts to deserialize from localStorage (expects JSON encoding).
 * Clears the stored key if a bad encoding is found.
 */
export function facetsFromLocalStorage(tab: TAB): SerializedFacets<string> | undefined {
  const sk = storageKey(tab);
  const stored = localStorage.getItem(sk);
  if (stored) {
    try {
      const filters = JSON.parse(stored);
      return filters as SerializedFacets<string>;
    } catch (e) {
      console.warn("Failed to parse localStorage filters.", stored);
      localStorage.removeItem(sk);
    }
  }
}

const storageKey = (key: TAB) => `facets-${key}`;

/**
 * Storing the facets in localStorage allows for keeping the state even if the url fragment goes away.
 */
export function updateLocalStorage(tab: TAB, data: SerializedFacets<string>): void {
  localStorage.setItem(storageKey(tab), JSON.stringify(data));
}

/**
 * Replace the URL framgment with the RISON serialization of the provided data.
 * Removes the fragment if the data is falsy.
 * Storing the facets in the fragments allow for sharing a filtered selection by copying the URL.
 */
export function updateFragment(data: any): void {
  if (isEmpty(data)) {
    if (window.location.hash) window.location.hash = "";
  } else {
    window.location.hash = RISON.stringify(data);
  }
}

/** Attempt to reconstruct the value structure from  fragment or local storage. */
export function loadFacets<GK, FK>(tab: TAB, groupsByFacetKey: Map<FK, GK>): Map2<GK, FK, AnyValue> {
  const result = new Map2<GK, FK, AnyValue>();

  const values = facetsFromFragment() ?? facetsFromLocalStorage(tab);
  if (!values) return result;

  for (const [facetKey, rawValue] of Object.entries(values)) {
    const groupKey = groupsByFacetKey.get(facetKey as FK);
    if (!groupKey) {
      console.error("missing group for facet", facetKey);
      continue;
    }
    const value = deserializeValue(rawValue);
    if (value?.isPresent) {
      result.set(groupKey, facetKey as FK, value);
    } else {
      console.error("failed to deserialize value", facetKey, rawValue);
    }
  }

  return result;
}
