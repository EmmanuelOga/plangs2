/**
 * <input-facet> element.
 */

import register from "preact-custom-element";

import { send } from "@plangs/frontend/utils";
import type { EncodedFilter } from "@plangs/graph/auxiliar";

import { EVENTS, TAG_NAME } from "./input-facet";
import { InputFacet, type InputFacetProps } from "./input-facet";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Send an event request the item to be added. */
  setFacet(this: HTMLElement, facet: EncodedFilter): boolean | undefined {
    return send(this, EVENTS.inSetFacet.create(facet));
  },
} as const;

export type InputFacetElement = HTMLElement & InputFacetProps & typeof ELEMENT_API;

export function registerInputFacet() {
  const keys: (keyof InputFacetProps)[] = ["pg", "edge", "node", "dir"];
  register(InputFacet, TAG_NAME, keys);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
