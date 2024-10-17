import register from "preact-custom-element";

import { PROP_KEYS, PlInfo, type PlInfoProps, TAG_NAME } from "./pl-info";

export type PlInfoElement = HTMLElement & PlInfoProps;

export function registerPlangInfo() {
  register(PlInfo, TAG_NAME, PROP_KEYS);
}
