import register from "preact-custom-element";

import { IconButton, type IconButtonProps, PROP_KEYS, TAG_NAME } from "./icon-button";
import type { IconButtonState } from "./state";

export type IconButtonElement = HTMLElement & IconButtonProps & { state?: IconButtonState };

export function isIconButtonElement(el?: HTMLElement): el is IconButtonElement {
  return !!el && el.tagName.toLowerCase() === TAG_NAME;
}

export function registerIconButton() {
  register(IconButton, TAG_NAME, PROP_KEYS);
}
