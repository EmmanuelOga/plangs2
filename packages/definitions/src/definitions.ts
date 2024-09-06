import { Glob } from "bun";

import type { PlangsGraph } from "@plangs/plangs";

/** Imports all definitions and calls the `define` methods */
export async function loadAll(g: PlangsGraph) {
  const glob = new Glob("**/*.ts");
  for await (const path of glob.scan(`${__dirname}/definitions`)) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") {
      module.define(g);
    }
  }
  console.info(new Date().toISOString(), `Plangs: loaded ${g.numNodes} nodes, ${g.numEdges} edges.`);
}