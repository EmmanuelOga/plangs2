import register from "preact-custom-element";

import type { PlangsGraph } from "packages/plangs/src/graph";

import { PlangInfo, type PlangInfoProps } from "./plang-info";

export const TAG_NAME = "plang-info";

/** Additional methods for the custom element. */
const ELEMENT_API = {
  setDataSource(this: HTMLElement & PlangInfoProps, pg: PlangsGraph): void {
    // TODO: dispatch an event with the PG object.
  },
};

export type PlangInfoElement = HTMLElement & PlangInfoProps & typeof ELEMENT_API;

export function registerPlangInfo() {
  register(PlangInfo, TAG_NAME, ["vid"]);
  Object.assign(window.customElements.get(TAG_NAME)?.prototype, ELEMENT_API);
}
