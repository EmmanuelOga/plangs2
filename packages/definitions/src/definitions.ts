import { Glob } from "bun";
import { PlangsGraph } from "plangs";

/** Imports all definitions and calls the `define` methods */
export async function loadAll(g: PlangsGraph) {
  const glob = new Glob("**/*.ts");
  for await (const path of glob.scan(`${__dirname}/definitions`)) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") {
      module.define(g);
    }
  }
  console.info(new Date().toISOString(), `Plangs: loaded ${g.numVertices} vertices, ${g.numEdges} edges.`);
}

/** Generates `plangs.json` */
export async function genPlangs() {
  const g = new PlangsGraph();
  await loadAll(g);
  Bun.write(Bun.fileURLToPath(`file:///${__dirname}/../server/static/plangs.json`), JSON.stringify(g.toJSON()));
}
