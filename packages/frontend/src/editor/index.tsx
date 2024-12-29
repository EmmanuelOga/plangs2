import { render } from "preact";

import { elem } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs/graph";

import { VerticesEditor } from "./vertices-editor";

/** Locate and render all {@link VerticesEditor} component instances. */
export function activatePlangsEditor(pg: PlangsGraph) {
  const el = elem("plangsEditor");
  if (el) render(<VerticesEditor pg={pg} />, el);
}
