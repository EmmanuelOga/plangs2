import { createContext } from "preact";
import { PlangsGraph } from "../../../schema/graph";

export type PlangsContext = {
  pg: PlangsGraph;
};

export const Plangs = createContext<PlangsContext | undefined | "error">(undefined);

export async function loadContext(): Promise<PlangsContext | "error"> {
  try {
    const pgReq = fetch("/plangs.json");
    const pg = await loadPlangsGraph(pgReq);

    return { pg };
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
