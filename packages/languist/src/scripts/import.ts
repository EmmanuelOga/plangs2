import { PlangsGraph } from "@plangs/plangs/graph";
import { regenVertexDefinitions } from "../cleanup";

/** Regenerate vertex definitions from data loaded from a path. */
export async function importData(jsonPath: string) {
  const pg = new PlangsGraph();
  pg.loadJSON(JSON.parse(await Bun.file(jsonPath).text()));
  pg.materialize();

  regenVertexDefinitions(pg);
}

const srcPath = process.argv[2];
if (srcPath) {
  console.log("Generating from", srcPath);
  await importData(srcPath);
} else {
  console.error("Please include a source path to an exported JSON file.");
}
