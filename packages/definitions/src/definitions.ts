// @ts-ignore it works on bun...
import { basename, join } from "node:path";

import { Glob } from "bun";

import type { PlangsGraph } from "@plangs/plangs";

async function getPaths(glob: Glob, basePath: string): Promise<string[]> {
  const paths = [] as string[];
  for await (const path of glob.scan(basePath)) paths.push(path);
  return paths.sort();
}

/** Imports all definitions and calls the `define` methods */
export async function loadAllDefinitions(g: PlangsGraph) {
  for (const path of await getPaths(new Glob("**/*.ts"), join(import.meta.dir, "definitions"))) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }

  // Add any images to the nodes.

  for (const path of await getPaths(new Glob("**/*.{png,jpg}"), join(import.meta.dir, "definitions/plangs"))) {
    let [plainKey, kind] = basename(path).split(".");
    if (plainKey.startsWith("_")) plainKey = `.${plainKey.slice(1)}`;
    const pl = g.nodes.pl.get(`pl+${plainKey}`);

    if (!pl) {
      console.warn("Can't find plang", `pl+${plainKey}`, "for image", path);
      continue;
    }

    pl.addImages([{ kind, title: pl.name, url: `/images/${path}` }]);
  }
}
