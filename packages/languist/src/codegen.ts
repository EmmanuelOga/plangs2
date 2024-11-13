import { join } from "node:path";

import type { MapTap } from "@plangs/auxiliar/map_tap";
import type { AnyEdge, NBundle, NPlang } from "@plangs/plangs";
import type { Image, N } from "@plangs/plangs/schema";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions");

/** Generate a path for a TS file for a Node defintion. */
export function tspath(plainKey: string, kind = "plangs"): string {
  const base = plainKey.replace(/[^a-zA-Z0-9\_\+\-]/g, "_");
  return join(DEFINTIONS_PATH, kind, base[0], base, `${base}.ts`);
}

/** Generate code that can reconstruct the state of a NPlang node. */
export function plangCodeGen(plang: NPlang): string {
  // biome-ignore lint/suspicious/noExplicitAny: We don't care about the type of the Edge.
  function addRelKeys(out: string[], methodName: string, rel: MapTap<string, any>, accept: (key: string) => boolean = () => true) {
    if (rel.size === 0) return;
    const keys = rel.keys.filter(accept).sort();
    if (keys.length > 0) out.push(`\n    .${methodName}(${JSON.stringify(keys)})`);
  }

  // The order of calls determines order in generated code.
  const plRels: string[] = [];
  addRelKeys(plRels, "addCompilesTo", plang.relCompilesTo);
  addRelKeys(plRels, "addDialectOf", plang.relDialectOf);
  addRelKeys(plRels, "addImplements", plang.relImplements, (key: string) => key !== plang.key);
  addRelKeys(plRels, "addInfluencedBy", plang.relInfluencedBy);
  addRelKeys(plRels, "addLicenses", plang.relLicenses);
  addRelKeys(plRels, "addParadigms", plang.relParadigms);
  addRelKeys(plRels, "addPlatforms", plang.relPlatforms);
  addRelKeys(plRels, "addPosts", plang.relPosts);
  addRelKeys(plRels, "addTags", plang.relTags);
  addRelKeys(plRels, "addTypeSystems", plang.relTsys);
  addRelKeys(plRels, "addWrittenIn", plang.relWrittenIn);

  addRelKeys(plRels, "addTools", plang.relTools);
  addRelKeys(plRels, "addBundles", plang.relPlBundles);
  addRelKeys(plRels, "addLibs", plang.relLibs);
  addRelKeys(plRels, "addApps", plang.relApps);

  // Generate a setter for the node data.
  // biome-ignore lint/suspicious/noExplicitAny: Any data is fine here.
  const genSet = (nodeName: N, key: string, data: any) => {
    return `g.nodes.${nodeName}.set(${JSON.stringify(key)}, ${JSON.stringify(cleanUpData(data))})`;
  };

  // Retrieve the actual nodes (not just the keys) of a relation. `existing` is a IterTap method that removes undefined values.
  const existing = (rel: MapTap<string, AnyEdge>) => rel.values.map(({ nodeTo }) => nodeTo).existing.sort((a, b) => a.key.localeCompare(b.key));

  const apps = existing(plang.relApps).map(app => genSet("app", app.key, app.data));
  const libs = existing(plang.relLibs).map(lib => genSet("lib", lib.key, lib.data));
  const tools = existing(plang.relTools).map(tool => genSet("tool", tool.key, tool.data));

  const bundles = existing(plang.relPlBundles).map(bundle => {
    const bunRel: string[] = [];
    addRelKeys(bunRel, "addTools", (bundle as NBundle).relTools);
    return `${genSet("bundle", bundle.key, bundle.data)}${bunRel.join("")}`;
  });

  // Little cleanup of the data.
  for (const [k, v] of Object.entries(plang.data) as [keyof typeof plang.data, any][]) {
    if (Array.isArray(v)) {
      if (v.length === 0) delete plang.data[k];
      else v.sort();
    } else if (v === null || v === undefined || v === "") {
      delete plang.data[k];
    }
  }

  return `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    ${genSet("pl", plang.key, plang.data)}${plRels.join("")}

    // TOOLS

    ${tools.join("\n\n")}

    // TOOL BUNDLES

    ${bundles.join("\n\n")}

    // LIBRARIES

    ${libs.join("\n\n")}

    // APPS

    ${apps.join("\n\n")}
  }
  `;
}

// Create a data object with relevant fields, and cleanup blank values.
// biome-ignore lint/suspicious/noExplicitAny: we cleanup any data.
function cleanUpData(rawData: any): any {
  const data = {
    ...rawData,
    // Remove images hosted by Plangs: the data is added back in the definitions package.
    images: ((rawData.images ?? []) as Image[]).filter(({ url }: Image) => !url.startsWith("/")),
  };
  for (const [key, value] of Object.entries(data)) {
    if (value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
      delete data[key as keyof typeof data];
    }
  }
  return data;
}
