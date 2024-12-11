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
    for (const path of await getPaths(new Glob("**/*.{png,jpg,svg}"), join(import.meta.dir, "definitions/plang"))) {
      const [pk, k] = basename(path).split(".");
      const kind = k === "screenshot" || k === "logo" ? k : "other";

      // This makes a lot of assumptions about the names of the plang, which work for the current plangs.
      // We may need to revisit if it breaks (for instance, having stronger conventions for the plang and image names).
      let plainKey = (pk.startsWith(NON_AZ) ? `.${pk.slice(1)}` : pk).replaceAll("_", ".");
      if (plainKey === "asp-net") plainKey = "asp.net";

      const plKey: VPlangKey = `pl+${plainKey}`;
      const pl = g.plang.get(plKey);

      if (pl) {
        pl.addImages([{ kind, title: pl.name, url: `/images/${path}` }]);
      } else {
        console.warn("Can't find plang", plKey, "for image", path);
      }
    }
  }
}
