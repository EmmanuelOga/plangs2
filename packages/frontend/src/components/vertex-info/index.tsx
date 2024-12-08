import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import type { PlangsPage } from "@plangs/server/components/layout";

import { VertexInfo } from "./vertex-info";

export function renderVertexInfo({ vertex }: { vertex: TPlangsVertexClass }) {
  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    render(<VertexInfo vertex={vertex} page={elem.dataset.page as PlangsPage} open={elem.dataset.open === "true"} />, elem);
  }
}
