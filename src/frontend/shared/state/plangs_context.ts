import { createContext } from "preact";
import { PlangsGraph } from "../../../schemas/graph";

/**
 * The result of loading a plangs graph: undefined while the graph has not been loaded.
 */
export type PlangsContext = PlangsGraph | undefined | "error";

export const Plangs = createContext<PlangsContext>(undefined);

export async function loadPlangs(): Promise<PlangsContext> {
  try {
    const req = await fetch("/plangs.json");
    const plangData = await req.json();

    const pg = new PlangsGraph();

    pg.loadJSON(plangData);
    console.log("Loaded PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");

    return pg;
  } catch (e) {
    console.error("Failed to load plangs:", e);
    return "error";
  }
}
