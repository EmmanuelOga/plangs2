import { join } from "node:path";

import { Glob } from "bun";

import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";

async function getPaths(glob: Glob, basePath: string): Promise<string[]> {
  const paths = [] as string[];
  for await (const path of glob.scan(basePath)) paths.push(path);
  return paths.sort();
}

/** Imports all definitions and calls the `define` methods */
export async function loadDefinitions(g: PlangsGraph, options: { scanImages: boolean }) {
  for (const path of await getPaths(new Glob("**/*.ts"), join(import.meta.dir, "definitions"))) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }

  // Add any images to the vertices.

  if (options.scanImages) {
    for (const path of await getPaths(new Glob("**/*.{webp}"), join(import.meta.dir, "../assets"))) {
      const [kind, name] = path.split("/", 2);
      const pk = name.replace(/\.webp$/, "");
      const vertex = g.vertices[kind as TPlangsVertexName].get(pk as any);

      if (vertex) {
        vertex.addImages([{ kind: "logo", title: vertex.name, url: `/images/vertex/${path}`, width: 128, height: 128 }]);
      } else {
        console.warn("Can't find plang", pk, "for image", path);
      }
    }
  }
}
