import { render } from "preact";

import { lastPlang } from "@plangs/frontend/app/pl";
import { elems } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs";
import type { TAB } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { NodeInfo, type NodeInfoProps } from "./node-info";

export function nodeInfo({ tab, open }: { tab: TAB; open: boolean }) {
  return <div class={cssClass("nodeInfo")} data-tab={tab} data-open={open} />;
}

export function renderNodeInfo({ node, tab, open }: NodeInfoProps) {
  if (!node || !tab) {
    console.log("Missing props to render nodeInfo.", { node, tab });
    return;
  }
  for (const elem of elems<HTMLDivElement>("nodeInfo")) {
    render(<NodeInfo node={node} tab={tab} open={open} />, elem);
  }
}

export function renderLastNodeInfo(pg: PlangsGraph) {
  const node = lastPlang(pg);
  if (node) renderNodeInfo({ node, tab: "plangs" });
}
