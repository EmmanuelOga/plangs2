import register from "preact-custom-element";

import type { Item } from "../input-compl";
import { InputSel, OUT_EVENT_REMOVE, createAddEvent } from "./input-sel";
import type { ItemRemoved } from "./reducer";

export type { Item } from "../input-compl";
export { ItemRemoved } from "./reducer";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Add a handler to do something when an item is removed. */
  onRemove(this: HTMLElement, cb: (item: ItemRemoved) => void) {
    this.addEventListener(OUT_EVENT_REMOVE, (ev: Event) => {
      const data = (ev as CustomEvent).detail as ItemRemoved;
      cb(data);
    });
  },

  /** Send an event request the item to be added. */
  addItem(this: HTMLElement, item: Item): void {
    this.dispatchEvent(createAddEvent(item));
  },

  /** Get the values/keys of the selected items. */
  values(this: HTMLElement): string[] {
    return [...this.querySelectorAll(".remove-item")]
      .map((el) => el.getAttribute("data-value"))
      .filter((v) => v) as string[];
  },
};

/** For casting the `<input-sel/>` elem after DOM selection. */
export type InputSelElement = HTMLElement & typeof ELEMENT_API;

export const TAG_NAME = "input-sel";

/** Register the `<input-compl/>` Web Component and add the additional methods custom element. */
export function registerInputSel() {
  register(InputSel, TAG_NAME, ["selected"]);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
