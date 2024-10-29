/** Helpers related to storing the facets state into the URL fragment and/or localStorage. */

import { RISON } from "rison2";

import { isEmpty } from "@plangs/frontend/auxiliar/utils";
import type { TAB } from "@plangs/server/components/layout";

/**
 * Attempts to deserialize the URL Fragment (expects RISON encoding).
 * Clears the fragment if a bad encoding is found.
 */
export function facetsFromFragment() {
  try {
    const data = window.location.hash.slice(1).trim();
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
 * Replace the URL framgment with the RISON serialization of the provided data.
 * Removes the fragment if the data is falsy.
 */
export function updateFragment(data: any) {
  if (isEmpty(data)) {
    if (window.location.hash) window.location.hash = "";
  } else {
    window.location.hash = RISON.stringify(data);
  }
}

const storageKey = (key: TAB) => `facets-${key}`;

export function fromLocalStorage(key: TAB) {
  const sk = storageKey(key);
  const stored = localStorage.getItem(sk);
  if (stored) {
    try {
      const filters = JSON.parse(stored);
      return filters;
    } catch (e) {
      console.warn("Failed to parse localStorage filters.", stored);
      localStorage.removeItem(sk);
    }
  }
}
