import register from "preact-custom-element";

import { InputFacet, type InputFacetProps, PROP_KEYS, TAG_NAME } from "./input-facet";
import type { InputFacetState } from "./state";

export type InputFacetElement = HTMLElement & InputFacetProps & { state?: InputFacetState };

export function isInputFacetElement(el?: HTMLElement): el is InputFacetElement {
  return !!el && el.tagName === TAG_NAME;
}

export function registerInputFacet() {
  register(InputFacet, TAG_NAME, PROP_KEYS);
}
