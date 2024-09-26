/**
 * <input-compl> Custom Element: provides an input field with autocompletion.
 */

import register from "preact-custom-element";

import { on } from "../../utils";

import { type InputSelElement, matchingInputSelByName } from "../input-sel";

import { EVENTS, InputCompl, type InputComplProps, TAG_NAME } from "./input-compl";
import type { CompletionItem, ItemSelected } from "./reducer";

export { TAG_NAME };
export type { CompletionItem, ItemSelected };

/** Additional methods for the custom element. */
const ELEMENT_API = {
  /** Register a handler for selection. */
  onSelect(this: HTMLElement & InputComplProps, cb: (data: ItemSelected) => void) {
    on(this, EVENTS.outSelect.type, ({ detail }: CustomEvent) => cb(detail as ItemSelected));
  },

  /** Redefine focus. */
  focus(this: HTMLElement & InputComplProps) {
    this.querySelector("input")?.focus();
  },

  matchingInputSel(this: HTMLElement & InputComplProps): InputSelElement | null {
    return matchingInputSelByName(this);
  },
};

export type InputComplElement = HTMLElement & InputComplProps & typeof ELEMENT_API;

/** Register the Custom Element. */
export function registerInputCompl(): void {
  const keys: (keyof InputComplProps)[] = ["name", "completions", "class"];
  register(InputCompl, TAG_NAME, keys);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
