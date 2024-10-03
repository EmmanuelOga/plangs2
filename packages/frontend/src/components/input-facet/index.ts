/**
 * <input-facet> element.
 */

import register from "preact-custom-element";

import { TAG_NAME } from "./input-facet";
import { InputFacet, type InputFacetProps } from "./input-facet";

/** Additional methods for the custom element. */
const ELEMENT_API = {};

export type InputFacetElement = HTMLElement & InputFacetProps & typeof ELEMENT_API;

export function registerInputFacet() {
  const keys: (keyof InputFacetProps)[] = ["pg"];
  register(InputFacet, TAG_NAME, keys);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
