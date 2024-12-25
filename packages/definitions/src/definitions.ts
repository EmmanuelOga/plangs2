import { basename, join } from "node:path";

import { Glob } from "bun";

import { NON_AZ } from "@plangs/graphgen/library";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

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
    for (const path of await getPaths(new Glob("**/*.{webp}"), join(import.meta.dir, "../assets/plang"))) {
      const pk = basename(path).replace(/\.webp$/, "") as VPlangKey;
      const pl = g.plang.get(pk);

      if (pl) {
        pl.addImages([{ kind: "logo", title: pl.name, url: `/images/${path}`, width: 128, height: 128 }]);
      } else {
        console.warn("Can't find plang", pk, "for image", path);
      }
    }
  }
}
