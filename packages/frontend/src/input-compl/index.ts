import register from "preact-custom-element";

import { on } from "../utils";
import { InputCompl, type InputComplProps, OUT_EVENT_SELECT } from "./input-compl";
import type { ItemSelected } from "./reducer";
export { Item, ItemSelected } from "./reducer";

export const TAG_NAME = "input-compl";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Register a handler for selection. */
  onSelect(this: HTMLElement & InputComplProps, cb: (data: ItemSelected) => void) {
    on(this, OUT_EVENT_SELECT, (ev: Event) => {
      const data = (ev as CustomEvent).detail as ItemSelected;
      cb(data);
    });
  },

  /** Redefine focus. */
  focus(this: HTMLElement & InputComplProps) {
    this.querySelector("input")?.focus();
  },
};

/** For casting the `<input-compl/>` elem after DOM selection. */
export type InputComplElement = HTMLElement & InputComplProps & typeof ELEMENT_API;

/** Register the `<input-compl/>` Web Component and add the additional methods custom element. */
export function registerInputCompl(): void {
  register(InputCompl, TAG_NAME, ["name", "completions"]);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
