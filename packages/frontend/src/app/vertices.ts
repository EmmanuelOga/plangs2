import { data, elem } from "@plangs/frontend/auxiliar/dom";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { dataKey } from "@plangs/server/elements";

/** The build process defines this to be '/plangs.json' on dev mode, or the hashed file on prod. */
declare const PLANGS_DATA_PATH: string;

/** Load the data from the server. */
export async function loadServerData(pg: PlangsGraph): Promise<void> {
  return fetch(PLANGS_DATA_PATH).then(async response => {
    console.info("Using remote data.");
    pg.loadJSON(await response.json());
    pg.materialize();
  });
}

/** Load the data from localStorage first, if needed, or else the server. */
export async function loadLocalOrRemote(pg: PlangsGraph): Promise<void> {
  const store = getStore("_any_page_");
  if (!store.load("enable-local-edits")) return loadServerData(pg);

  const local = store.load("local-edits");
  if (local) {
    console.info("Using local edits.");
    document.addEventListener("DOMContentLoaded", () => elem("localEditWarning")?.classList.remove("hidden"));
    pg.loadJSON(local);
    pg.materialize();
  } else {
    return loadServerData(pg);
  }
}

/** Attempt to load a vertex using the nearest data-key attribute. */
export function getClosestVertex(pg: PlangsGraph, target: EventTarget | null): TPlangsVertex | undefined {
  const elem = (target as Element).closest(`[${dataKey("vertex-key")}]`);
  const key = data(elem, "vertex-key");
  const vertexName = data(elem, "vertex-name");
  const vertices = key && vertexName && pg[vertexName as TPlangsVertexName];
  if (!vertices) return;
  return vertices.get(key as any);
}
