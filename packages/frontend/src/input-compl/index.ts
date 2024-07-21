import register from "preact-custom-element";

import { InputCompl, type InputComplProps, OUT_EVENT_SELECT } from "./input-compl";
import type { ItemSelected } from "./reducer";

export { Item, ItemSelected } from "./reducer";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Register a handler for selection. */
  onSelect(this: HTMLElement & InputComplProps, cb: (data: ItemSelected) => void) {
    this.addEventListener(OUT_EVENT_SELECT, (ev: Event) => {
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
  register(InputCompl, "input-compl", ["name", "completions"]);
  const htmlClass = window.customElements.get("input-compl");
  if (!htmlClass) throw new Error("Failed to register <input-compl>.");
  Object.assign(htmlClass.prototype, ELEMENT_API);
}
