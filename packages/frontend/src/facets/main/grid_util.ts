import { debounce } from "@plangs/auxiliar/debounce";
import { elems } from "@plangs/frontend/auxiliar/dom";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

/** A static thumbnail grid will be render server side, we just need to show or hide each element.  */
export function doUpdateThumbns(vertexKeys: Set<string>) {
  for (const div of elems("vertexThumbn")) {
    const plKey = div.dataset.vertexKey as VPlangKey;
    const visible = vertexKeys.has(plKey);
    div.classList.toggle("hidden", !visible);
  }
}

export const updateThumbns = debounce(doUpdateThumbns, 30);
