import { render } from "preact";

import { elem } from "@plangs/frontend/auxiliar/dom";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

import { EditorMain } from "./editor-main";
import { VerticesEditor } from "./vertices-editor";

/** Locate and render all {@link VerticesEditor} component instances. */
export function activatePlangsEditor(pg: PlangsGraph) {
  const el = elem("plangsEditor");
  if (el) render(<EditorMain pg={pg} />, el);
}

/** Remove stale locally stored data from all these pages. */
const INFO_PAGES: PlangsPage[] = ["plangs", "tools", "apps", "libraries", "subsystems", "learning", "communities"];

export function toggleLocalEdits(enabled: boolean) {
  getStore("_any_page_").update("enable-local-edits", enabled);
  removeStale();
}

export function updateLocalEdits(data: any) {
  getStore("_any_page_").update("local-edits", data);
  removeStale();
}

/** Remove locally stored data that depends on the graph. */
export function removeStale() {
  for (const page of INFO_PAGES) getStore(page).remove("vertex-detail");
}
