import { Glob } from "bun";

import { PlangsGraph } from "@plangs/plangs";

/** Imports all definitions and calls the `define` methods */
export async function loadAllDefinitions(g: PlangsGraph) {
  const paths = [] as string[];

  const glob = new Glob("**/*.ts");
  for await (const path of glob.scan(`${__dirname}/definitions`)) paths.push(path);

  for (const path of paths.sort()) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }
}

/** Load all definitions and serialize them to the given path. */
export async function serialize(path: string) {
  const g = new PlangsGraph();
  await loadAllDefinitions(g);
  Bun.write(path, JSON.stringify(g));
}
