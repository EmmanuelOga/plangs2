import { render } from "preact";

import type { PRResult } from "@plangs/frontend/app/github";
import { elem } from "@plangs/frontend/auxiliar/dom";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

import { EditorMain } from "./main";

/** Locate and render the editor. */
export function activatePlangsEditor(pg: PlangsGraph, pullreq?: PRResult) {
  const el = elem("plangsEditor");
  if (el) render(<EditorMain pg={pg} pullreq={pullreq} />, el);
}

/** Remove stale local data from all these pages. */
const INFO_PAGES: PlangsPage[] = ["plangs", "tools", "apps", "libraries", "subsystems", "learning", "communities"];

const STORE = getStore("_any_page_");

export function toggleLocalEdits(enabled: boolean) {
  STORE.update("enable-local-edits", enabled);
  removeStale();
}

/** We keep track of edit changes to use as key of the editor component. */
export let LAST_EDIT_TIME = new Date().toISOString();

export function updateLocalEdits(data: any) {
  LAST_EDIT_TIME = new Date().toISOString();
  STORE.update("local-edits", data);
  removeStale();
}

/** Remove local data that depends on the graph. */
export function removeStale() {
  for (const page of INFO_PAGES) getStore(page).remove("vertex-detail");
}

/** Return the local data, or use the provided instance to reset it. */
export function localEditsData(pg: PlangsGraph) {
  let localJSON = STORE.load("local-edits");
  if (!localJSON) {
    localJSON = pg.toJSON();
    console.info("Recreating local edits");
    STORE.update("local-edits", localJSON);
  }
  return localJSON;
}
