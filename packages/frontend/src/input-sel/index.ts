import register from "preact-custom-element";

import type { Item } from "../input-compl";
import { OUT_EVENT_REMOVE, createAddEvent, InputSel } from "./input-sel";
import type { ItemRemoved } from "./reducer";

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
};

/** For casting the `<input-sel/>` elem after DOM selection. */
export type InputSelElement = HTMLElement & typeof ELEMENT_API;

/** Register the `<input-compl/>` Web Component and add the additional methods custom element. */
export function registerInputSel() {
  register(InputSel, "input-sel", ["selected"]);
  const htmlClass = window.customElements.get("input-sel");
  if (!htmlClass) throw new Error("Failed to register <input-compl>.");
  Object.assign(htmlClass.prototype, ELEMENT_API);
}
