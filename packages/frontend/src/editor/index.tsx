import { render } from "preact";

import { elem } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs/graph";

import { PlangsEditor } from "./editor";

export function activatePlangsEditor(pg: PlangsGraph) {
  const el = elem("plangsEditor");
  if (el) render(<PlangsEditor pg={pg} />, el);
}
