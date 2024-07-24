import register from "preact-custom-element";

import type { PlangsGraph } from "@plangs/plangs";

import { EVENTS, PlangInfo, TAG_NAME, type PlangInfoProps } from "./plang-info";
import { send } from "../utils";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  setDataSource(this: HTMLElement & PlangInfoProps, pg: PlangsGraph): void {
    send(this, EVENTS.inSetup.create(pg));
  },
};

export type PlangInfoElement = HTMLElement & PlangInfoProps & typeof ELEMENT_API;

export function registerPlangInfo() {
  register(PlangInfo, TAG_NAME, ["vid"]);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}