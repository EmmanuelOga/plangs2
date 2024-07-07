import { createContext } from "preact";
import * as Wade from "wade";
import { PlangsGraph } from "../../../schemas/graph";

export type PlangsContext = {
  pg: PlangsGraph;
};

export const Plangs = createContext<PlangsContext | undefined | "error">(undefined);

export async function loadPlangs(): Promise<PlangsContext | "error"> {
  try {
    const req = await fetch("/plangs.json");
    const plangData = await req.json();

    const pg = new PlangsGraph();

    pg.loadJSON(plangData);
    console.log("Loaded PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");

    return { pg };
  } catch (e) {
    console.error("Failed to load plangs:", e);
    return "error";
  }
}
