import { Glob } from "bun";
import { PlangsGraph } from "./entities/plangs_graph";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
export async function loadDefinitions(g: PlangsGraph) {
  const glob = new Glob("**/*.ts");
  for await (const path of glob.scan(`${__dirname}/definitions`)) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") {
      module.define(g);
    }
  }
}

export async function serializeToPublic() {
  const g = new PlangsGraph();
  await loadDefinitions(g);
  Bun.write(Bun.fileURLToPath(`file:///${__dirname}/../public/plangs.json`), JSON.stringify(g.toJSON()));
  console.info(new Date().toISOString(), `Serialized ${g.numVertices} vertices, ${g.numEdges} edges.`);
}

if (process.env.SERIALIZE_PLANGS) {
  serializeToPublic();
}
