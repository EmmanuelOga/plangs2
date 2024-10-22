import register from "preact-custom-element";

import { FacetsMain, type FacetsMainProps, PROP_KEYS, TAG_NAME } from "./facets-main";
import type { FacetsMainState } from "./state";

export type FacetsMainElement = HTMLElement & FacetsMainProps & { state?: FacetsMainState };

export function isFacetsMainElement(el?: HTMLElement): el is FacetsMainElement {
  return !!el && el.tagName.toLowerCase() === TAG_NAME;
}

export function registerFacetsMain() {
  register(FacetsMain, TAG_NAME, PROP_KEYS);
}
