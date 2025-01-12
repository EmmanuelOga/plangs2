import { join } from "node:path";

import { loadDefinitions } from "@plangs/definitions/definitions";
import { regenVertexDefinitions } from "@plangs/languist/cleanup";
import { reformatCode } from "@plangs/languist/reformat";
import { PlangsGraph } from "@plangs/plangs/graph";
import { loadContent, loadPosts } from "@plangs/server/content";

const DEF_ROOT = join(import.meta.dir, "../../../definitions");

/** Regenerate vertex definitions after running some checks for cleanup. */
export async function cleanup() {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });
  pg.materialize();
  regenVertexDefinitions(pg);

  await loadPosts(pg);

  const notFound = new Set<string>();
  const invalid = new Set<string>();

  for (const post of pg.post.values) {
    if (!post.path) throw new Error(`Post ${post.plainKey} has no path.`);
    const content = await loadContent(join("posts", post.path), pg);
    for (const key of content.keyNotFound) {
      if (PlangsGraph.validKey(key)) {
        notFound.add(key);
      } else {
        invalid.add(key);
      }
    }
  }

  if (invalid.size > 0) {
    // TODO: track where these are coming from.
    console.log(`\nInvalid Keys:\n---------------\n${[...invalid].sort().join("\n")}\n`);
  }

  if (notFound.size > 0) {
    console.log(`\nNot found Keys:\n---------------\n${[...notFound].sort().join("\n")}\n`);
    const answer = prompt("Do you want to create definitions for the valid keys? (y/n)");
    if (answer === "y") {
      for (const key of notFound) {
        const vertex = pg.getVertex(key, true);
        if (!vertex) throw new Error(`Issue creating a vertex ${key}`);
        const path = join(DEF_ROOT, "/src/definitions", vertex.tsName);
        await Bun.write(path, await reformatCode(vertex.toCode()));
      }
    }
  }
}

console.log("Cleaning up definitions, scanning blog posts, and regenerating vertices.");
await cleanup();
