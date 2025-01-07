import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

async function generateJSON(dstPath: string) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  pg.materialize();

  Bun.write(dstPath, JSON.stringify(pg));
}

const dstPath = process.argv[2];
if (dstPath) {
  console.log("Generating to", dstPath);
  await generateJSON(dstPath);
} else {
  console.error("Missing destination path.");
}
