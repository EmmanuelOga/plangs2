// @ts-ignore works ok with Bun
import { join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadPosts } from "./content";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await loadPosts(pg);

function test() {
  for (const [_, pl] of pg.nodes.pl) {
    if (pl.images.isEmpty) {
      console.warn(
        "No images for",
        pl.key,
        pl.name,
        pl.websites.existing.map(w => w.href),
      );
    }
  }
}

if (process.argv[2] === "plangs.json") {
  const path = join(import.meta.dir, "plangs.json");
  Bun.write(path, JSON.stringify(pg));
  console.info("Wrote", path);
}
if (process.argv[2] === "test") {
  test();
} else {
  console.log("Usage: cmd plangs.json");
}
