import { Glob } from "bun";
import { PlangsGraph } from "./entities/plangs_graph";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
export async function loadDefinitions(g: PlangsGraph): Promise<PlangsGraph> {
  const glob = new Glob("**/*.ts");
  for await (const path of glob.scan(`${__dirname}/definitions`)) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") {
      module.define(g);
    }
  }
  return g;
}

if (process.env.LOAD_GRAPH) {
  const g = new PlangsGraph();
  await loadDefinitions(g);
  console.info(new Date().toISOString(), `Loaded ${g.numVertices} vertices, ${g.numEdges} edges.`);
}
