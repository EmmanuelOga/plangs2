import register from "preact-custom-element";

import { InputSel, type InputSelProps, PROP_KEYS, TAG_NAME } from "./input-sel";
import type { InputSelState } from "./state";

export type InputSelElement = HTMLElement & InputSelProps & { state?: InputSelState };

export function isInputSelElement(el?: HTMLElement): el is InputSelElement {
  return !!el && el.tagName.toLowerCase() === TAG_NAME;
}

/** Register the Custom Element. */
export function registerInputSel() {
  register(InputSel, TAG_NAME, PROP_KEYS);
}
