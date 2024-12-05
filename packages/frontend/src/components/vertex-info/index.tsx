import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { VertexInfo } from "./vertex-info";

export function vertexInfo({ vertex, tab, open }: { vertex?: TPlangsVertexClass; tab: TAB; open: boolean }) {
  return (
    <div class={tw(cssClass("vertexInfo"))} data-tab={tab} data-open={open ? "true" : false}>
      <VertexInfo vertex={vertex} tab={tab} open={open} />
    </div>
  );
}

export function renderVertexInfo({ vertex }: { vertex: TPlangsVertexClass }) {
  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    render(<VertexInfo vertex={vertex} tab={elem.dataset.tab as TAB} open={elem.dataset.open === "true"} />, elem);
  }
}
