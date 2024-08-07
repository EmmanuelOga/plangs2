/**
 * <input-sel> Custom Element: keeps track of selected items.
 */

import register from "preact-custom-element";

import { on, send } from "../utils";
import { EVENTS, InputSel, type InputSelProps, TAG_NAME } from "./input-sel";
import type { Item, ItemRemoved } from "./reducer";

export { TAG_NAME };
export type { Item, ItemRemoved };

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Send an event request the item to be added. */
  addItem(this: HTMLElement, item: Item): void {
    send(this, EVENTS.inAdd.create(item));
  },

  /** Add a handler to do something when an item is removed. */
  onRemove(this: HTMLElement, cb: (item: ItemRemoved) => void) {
    on(this, EVENTS.outRemove.type, ({ detail }: CustomEvent) => cb(detail as ItemRemoved));
  },

  /** Get the values/keys of the selected items. */
  values(this: HTMLElement): { mode: "all" | "any"; values: Set<string> } {
    const mode = this.querySelector("select")?.value === "any" ? "any" : "all";
    const values = [...this.querySelectorAll(".remove-item")]
      .map((el) => el.getAttribute("data-value"))
      .filter((v) => v) as string[];
    return { mode, values: new Set(values) };
  },
};

export type InputSelElement = HTMLElement & typeof ELEMENT_API & InputSelProps;

/** Register the Custom Element. */
export function registerInputSel() {
  register(InputSel, TAG_NAME, ["name"]);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
