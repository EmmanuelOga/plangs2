import { join } from "node:path";
import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

async function generateJSON(dstRoot: string) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  // Note: we don't run `materialize` here to generate a smaller JSON file,
  // but as a tradeoff we need to materialize when we loading the json file.
  Bun.write(join(dstRoot, "plangs.json"), JSON.stringify(pg));

  // Also generate the materialized version for end users.
  pg.materialize();
  Bun.write(join(dstRoot, "plangs.complete.json"), JSON.stringify(pg));
}

const dstRoot = process.argv[2];
if (!dstRoot) throw new Error("Missing destination root");
console.log("Generating to", dstRoot);
await generateJSON(dstRoot);
