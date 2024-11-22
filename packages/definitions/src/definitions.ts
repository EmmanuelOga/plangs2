// @ts-ignore it works on bun...
import { basename, join } from "node:path";

import { Glob } from "bun";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

async function getPaths(glob: Glob, basePath: string): Promise<string[]> {
  const paths = [] as string[];
  for await (const path of glob.scan(basePath)) paths.push(path);
  return paths.sort();
}

/** Imports all definitions and calls the `define` methods */
export async function loadAllDefinitions(g: PlangsGraph, options: { scanImages: boolean }) {
  for (const path of await getPaths(new Glob("**/*.ts"), join(import.meta.dir, "definitions"))) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }

  // Add any images to the nodes.

  if (options.scanImages) {
    for (const path of await getPaths(new Glob("**/*.{png,jpg,svg}"), join(import.meta.dir, "definitions/pl"))) {
      const [pk, k] = basename(path).split(".");
      const kind = k === "screenshot" || k === "logo" ? k : "other";
      const plKey: NPlang["key"] = `pl+${pk.replaceAll("_", ".")}`;
      const pl = g.nodes.pl.get(plKey);
      if (pl) {
        pl.addImages([{ kind, title: pl.name, url: `/images/${path}` }]);
      } else {
        console.warn("Can't find plang", plKey, "for image", path);
      }
    }
  }

  runInference(g);
}

/**
 * We can derive / infer some data from the existing data.
 * We may implement some sort of inference engine in the future,
 * but for now we can just materialize some simple rules.
 */
export function runInference(pg: PlangsGraph) {
  for (const pl of pg.nodes.pl.values) {
    // All languages implement themselves, so when we filter by "implements" we can include the language itself.
    pl.relImplements.add([pl.key]);
  }
}
