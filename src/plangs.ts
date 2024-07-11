import { Glob } from "bun";
import { createIndex } from "./frontend/shared/state/search";
import { PlangsGraph } from "./schema/graph";

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
  console.info(new Date().toISOString(), `Plangs: loaded ${g.numVertices} vertices, ${g.numEdges} edges.`);
}

/** Generates `server/static/plangs.json` */
export async function genPlangs() {
  const g = new PlangsGraph();
  await loadDefinitions(g);
  Bun.write(Bun.fileURLToPath(`file:///${__dirname}/../server/static/plangs.json`), JSON.stringify(g.toJSON()));
}

/** Generates indexes for searching stuff. */
export async function genIndexes() {
  const g = new PlangsGraph();
  await loadDefinitions(g);

  // We need to save the ids since Wade only returns an array index.
  const ids: string[] = [];
  const names: string[] = [];
  for (const [vid, v] of g.v_plang) {
    ids.push(vid);
    names.push(v.name as string);
  }

  Bun.write(
    Bun.fileURLToPath(`file:///${__dirname}/../server/static/plangsIdx.json`),
    JSON.stringify(createIndex(ids, names)),
  );
}

if (process.env.GEN_PLANGS) {
  await genPlangs();
}

if (process.env.GEN_INDEXES) {
  await genIndexes();
}

if (process.env.TEST) {
  const g = new PlangsGraph();
  await loadDefinitions(g);

  const d = new PlangsGraph();
  d.loadJSON(g.toJSON());

  console.log("Original: ", g.numVertices, "vertices", g.numEdges, "edges");
  console.log("Deserial: ", d.numVertices, "vertices", d.numEdges, "edges");
}
