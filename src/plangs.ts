import { Glob } from "bun";
import { PlangsGraph } from "./entities/plangs_graph";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
export async function loadDefinitions(): Promise<PlangsGraph> {
  console.log(new Date().toISOString(), "Loading definitions...");

  const g = new PlangsGraph();

  const glob = new Glob("**/*.ts");

  let i = 0;
  for await (const path of glob.scan(`${__dirname}/definitions`)) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") {
      module.define(g);
      i++;
    }
  }

  console.info(new Date().toISOString(), `Loaded ${i} definitions, ${g.numVertices} vertices, ${g.numEdges} edges.`);

  return g;
}

if (process.env.LOAD_GRAPH) await loadDefinitions();
