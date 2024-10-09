// @ts-ignore works ok with Bun
import { join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadPosts } from "./content";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await loadPosts(pg);

async function test() {
  for (const [_, pl] of pg.nodes.pl) {
    if (pl.images.isEmpty) {
      for (const w of pl.websites.existing)
        await Bun.spawn(["open", w.href], {
          stdout: "pipe",
          stderr: "pipe",
        });
    }
  }
}

if (process.argv[2] === "plangs.json") {
  const path = join(import.meta.dir, "plangs.json");
  Bun.write(path, JSON.stringify(pg));
  console.info("Wrote", path);
}
if (process.argv[2] === "test") {
  await test();
} else {
  console.log("Usage: cmd plangs.json");
}
