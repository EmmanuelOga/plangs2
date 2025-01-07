import { join } from "node:path";

import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { reformatCode } from "../reformat";

function error() {
  console.error("Please include a vertex key. Vertex keys should be alphanumeric with dashes and underscores and look like: pl+python.\n");
  console.info("Each different vertex kind requires an specific prefix. Here's a list of available vertex prefixes:\n");

  let len = 0;
  for (const name of PlangsGraph.vertexKind.keys()) {
    if (name === "post") continue;
    len = Math.max(len, name.length);
  }

  for (const [name, key] of PlangsGraph.vertexKind) {
    if (name === "post") continue;
    console.info(name.padEnd(len), " : ", key);
  }
}

/** If the key is valid, return the vertex name. */
function getVertexName(key: string): TPlangsVertexName | undefined {
  const [prefix, suffix] = key.split("+", 2);
  if (!/^[a-z0-9_-]+$/.test(suffix)) return undefined;

  for (const [name, key] of PlangsGraph.vertexKind) {
    if (name === "post") return undefined;
    if (key === prefix) return name;
  }

  return undefined;
}

const DEF_ROOT = join(import.meta.dir, "../../../definitions");

const vertexKey = process.argv[2];
const vertexName = getVertexName(vertexKey);

if (vertexName) {
  const pg = new PlangsGraph();
  const vertex = pg.vertices[vertexName].set(vertexKey as any);
  const path = join(DEF_ROOT, "/src/definitions", vertex.tsName);
  const assetPath = join(DEF_ROOT, "assets", vertexName, `${vertexKey}.webp`);
  Bun.write(path, await reformatCode(vertex.toCode()));

  console.log("Generated vertex for", vertexKey, "at", path, "\n");
  console.log("Next steps: you can add data with your text editor to the generated file.");
  console.log("Also, if you have an openai key, you can run:\n");
  console.info("$ bun run enrich ", vertexKey, "\n");
  console.log("...to enrich the data with AI. The definition should include a few URLs for better results.\n");
  console.log("You can also add a 128x128 webp thumbnail logo/image at:", assetPath);
} else {
  error();
}
