import register from "preact-custom-element";

import { InputToggle, type InputToggleProps, TAG_NAME } from "./input-toggle";

/** Additional methods for the custom element. */
const ELEMENT_API = {} as const;

export type InputToggleElement = HTMLElement & InputToggleProps & typeof ELEMENT_API;

export function registerInputToggle() {
  const keys: (keyof InputToggleProps)[] = ["action"];
  register(InputToggle, TAG_NAME, keys);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}