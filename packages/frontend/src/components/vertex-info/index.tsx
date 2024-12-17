import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import type { PlangsPage } from "@plangs/server/components/layout";

import { VertexInfo } from "./vertex-info";

export function renderVertexInfo({ vertex }: { vertex: TPlangsVertex }) {
  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    render(<VertexInfo detail={vertex.detail} page={elem.dataset.page as PlangsPage} open={elem.dataset.open === "true"} />, elem);
  }
}
