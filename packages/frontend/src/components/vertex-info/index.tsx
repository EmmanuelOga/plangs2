import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import type { PlangsPage } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { VertexInfo } from "./vertex-info";

export function vertexInfo({ vertex, page, open }: { vertex?: TPlangsVertexClass; page: PlangsPage; open: boolean }) {
  return (
    <div class={tw(cssClass("vertexInfo"))} data-page={page} data-open={open ? "true" : false}>
      <VertexInfo vertex={vertex} page={page} open={open} />
    </div>
  );
}

export function renderVertexInfo({ vertex }: { vertex: TPlangsVertexClass }) {
  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    render(<VertexInfo vertex={vertex} page={elem.dataset.page as PlangsPage} open={elem.dataset.open === "true"} />, elem);
  }
}
