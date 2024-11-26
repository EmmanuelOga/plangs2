import { join } from "node:path";
import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

async function generateJSON(dstRoot: string) {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: false });
  Bun.write(join(dstRoot, "plangs.json"), JSON.stringify(pg));
}

const dstRoot = process.argv[2];
if (!dstRoot) throw new Error("Missing destination root");
console.log("Generating to", dstRoot);
await generateJSON(dstRoot);
