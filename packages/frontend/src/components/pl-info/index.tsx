import { render } from "preact";

import { elem } from "@plangs/frontend/auxiliar/utils";
import type { TAB } from "@plangs/server/components/layout";
import { type IDKey, id as cssId } from "@plangs/server/elements";

import { lastPlang } from "@plangs/frontend/app/pl";
import type { PlangsGraph } from "@plangs/plangs/index";
import { PlInfo, type PlInfoProps } from "./pl-info";

const id: IDKey = "plInfo";

export function plInfo({ tab, open }: { tab: TAB; open: boolean }) {
  return <div id={cssId(id)} data-tab={tab} data-open={open} />;
}

export function renderPlInfo({ pl, tab, open }: PlInfoProps) {
  const plInfo = elem<HTMLDivElement>("plInfo");
  if (!plInfo) {
    console.log("No plInfo wrapper found.");
    return;
  }
  if (!pl || !tab) {
    console.log("Missing props to render plInfo.");
    return;
  }
  render(<PlInfo pl={pl} tab={tab} open={open} />, plInfo);
}

export function renderLastPlInfo(pg: PlangsGraph) {
  const plInfo = elem<HTMLDivElement>("plInfo");
  const pl = lastPlang(pg);
  if (plInfo && pl) renderPlInfo({ pl, tab: "plangs" });
}
