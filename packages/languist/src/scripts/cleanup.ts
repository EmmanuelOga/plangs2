import { loadDefinitions } from "@plangs/definitions/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";
import { regenVertexDefinitions } from "../cleanup";

/** Regenerate vertex definitions after running some checks for cleanup. */
export async function cleanup() {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  pg.materialize();
  regenVertexDefinitions(pg);
}

console.log("Cleaning up definitions and regenerating vertices.");
await cleanup();
