import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { getCurrentPage, getCurrentPageStore } from "@plangs/frontend/auxiliar/storage";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import type { VertexDetail } from "@plangs/plangs/graph/vertex_base";

import { VertexInfo } from "./vertex-info";

/** Rendering with undefined vertex attempts to render the last thing displayed (per Page). */
export function renderVertexInfo(vertex?: TPlangsVertex) {
  const page = getCurrentPage();
  const store = getCurrentPageStore();

  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    let detail: VertexDetail | undefined = vertex?.detail;
    let open = elem.dataset.open === "true";

    if (detail) {
      store.update("vertex-detail", detail);
      store.update("vertex-detail-open", open);
    } else {
      open = store.load("vertex-detail-open") ?? open ?? true;
      detail = store.load("vertex-detail");
    }

    render(<VertexInfo detail={detail} page={page} open={open} />, elem);
  }
}
