import { createContext } from "preact";
import { PlangsGraph } from "../../../schemas/graph";
import { type SearchIndex, loadIndex } from "./search";

export type PlangsContext = {
  pg: PlangsGraph;
  plIdx: SearchIndex;
};

export const Plangs = createContext<PlangsContext | undefined | "error">(undefined);

export async function loadContext(): Promise<PlangsContext | "error"> {
  try {
    const pgReq = fetch("/plangs.json");
    const idxReq = fetch("/plangsIdx.json");
    return { pg: await loadPlangsGraph(pgReq), plIdx: await loadIndex(idxReq) };
  } catch (e) {
    console.error("Failed to load context:", e);
    return "error";
  }
}

async function loadPlangsGraph(pgReq: Promise<Response>): Promise<PlangsGraph> {
  const pg = new PlangsGraph().loadJSON(await (await pgReq).json());
  console.log("Loaded PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");
  return pg;
}