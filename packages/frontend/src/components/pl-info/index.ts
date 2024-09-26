/**
 * <plang-info> element: displays information about a programming language.
 */

import register from "preact-custom-element";

import type { PlangsGraph } from "@plangs/plangs";

import { send } from "../../utils";
import { EVENTS, PlInfo, type PlInfoProps, TAG_NAME } from "./pl-info";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  setDataSource(this: HTMLElement & PlInfoProps, pg: PlangsGraph): void {
    send(this, EVENTS.inSetData.create(pg));
  },
};

export type PlInfoElement = HTMLElement & PlInfoProps & typeof ELEMENT_API;

export function registerPlangInfo() {
  const keys: (keyof PlInfoProps)[] = ["class", "pg", "pl"];
  register(PlInfo, TAG_NAME, keys);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
