import register from "preact-custom-element";

import { PROP_KEYS, PlInfo, type PlInfoProps, TAG_NAME } from "./pl-info";

/** Additional methods for the custom element. */
const ELEMENT_API = {} as const;

export type PlInfoElement = HTMLElement & PlInfoProps & typeof ELEMENT_API;

export function registerPlangInfo() {
  register(PlInfo, TAG_NAME, PROP_KEYS);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
