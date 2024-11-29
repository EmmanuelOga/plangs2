import { render } from "preact";

import { lastPlang } from "@plangs/frontend/app/pl";
import { elems } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { VertexInfo, type VertexInfoProps } from "./vertex-info";

export function vertexInfo({ tab, open }: { tab: TAB; open: boolean }) {
  return <div class={cssClass("vertexInfo")} data-tab={tab} data-open={open} />;
}

export function renderVertexInfo({ vertex, tab, open }: VertexInfoProps) {
  if (!vertex || !tab) {
    console.log("Missing props to render vertexInfo.", { vertex, tab });
    return;
  }
  for (const elem of elems<HTMLDivElement>("vertexInfo")) {
    render(<VertexInfo vertex={vertex} tab={tab} open={open} />, elem);
  }
}

export function renderLastVertexInfo(pg: PlangsGraph) {
  const vertex = lastPlang(pg);
  if (vertex) renderVertexInfo({ vertex, tab: "plangs" });
}
