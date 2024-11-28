import { join } from "node:path";
import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

async function generateJSON(dstRoot: string) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  Bun.write(join(dstRoot, "plangs.json"), JSON.stringify(pg));
}

const dstRoot = process.argv[2];
if (!dstRoot) throw new Error("Missing destination root");
console.log("Generating to", dstRoot);
await generateJSON(dstRoot);
