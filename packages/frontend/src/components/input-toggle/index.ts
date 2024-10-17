import register from "preact-custom-element";

import { InputToggle, type InputToggleProps, PROP_KEYS, TAG_NAME } from "./input-toggle";
import type { InputToggleState } from "./state";

export type InputToggleElement = HTMLElement & InputToggleProps & { state?: InputToggleState };

export function isInputToggleElement(el?: HTMLElement): el is InputToggleElement {
  return !!el && el.tagName === TAG_NAME;
}

export function registerInputToggle() {
  register(InputToggle, TAG_NAME, PROP_KEYS);
}
