import { join } from "node:path";

import { type PlangsGraph, VCommunity, VLearning, type VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import type { Image } from "@plangs/plangs/graph/vertex_data_schemas";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions");

/**
 * Generate a path for a TS file for a Vertex defintion.
 * VPlang vertices are stored in a folder structure based on the first letter of the key.
 * The other vertices are stored in a flat structure.
 */
export function tsVertexPath(kind: TPlangsVertexName, plainKey?: string): string {
  if (kind === "plang") {
    if (!plainKey) throw new Error("plainKey is required for pl vertices.");
    const base = plainKey.replace(/[^a-zA-Z0-9\_\+\-]/g, "_");
    return join(DEFINTIONS_PATH, kind, base[0], base, `${base}.ts`);
  }
  if (plainKey) throw new Error("plainKey is required ONLY for pl vertices.");
  return join(DEFINTIONS_PATH, `${kind}.ts`);
}

/** Generate code for vertices of the given kind. */
export function genericCodeGen(pg: PlangsGraph, kind: "license" | "paradigm" | "platform" | "tag" | "typeSystem" | "learning" | "community"): string {
  const definitions: string[] = [...pg.vertices[kind].values]
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(vertex => {
      const relations: string[] = [];

      if (vertex instanceof VCommunity) {
        addRelKeys(relations, "relPlangs", vertex.relPlangs.keys);
        addRelKeys(relations, "relTags", vertex.relTags.keys);
      }

      if (vertex instanceof VLearning) {
        addRelKeys(relations, "relPlangs", vertex.relPlangs.keys);
        addRelKeys(relations, "relTags", vertex.relTags.keys);
        addRelKeys(relations, "relCommunities", vertex.relCommunities.keys);
      }

      return `${generateSettter(kind, vertex.key, vertex.data)}${relations.join("")}`;
    });

  return `import type { PlangsGraph } from "@plangs/plangs/graph";

  export function define(g: PlangsGraph) {
    ${definitions.join("\n\n")}
  }
  `;
}

/** Generate code that can reconstruct the state of a VPlang vertex. */
export function plangCodeGen(plang: VPlang): string {
  // The order of calls determines order in generated code.
  const relations: string[] = [];
  addRelKeys(relations, "relCompilesTo", plang.relCompilesTo.keys);
  addRelKeys(relations, "relDialectOf", plang.relDialectOf.keys);
  addRelKeys(relations, "relImplements", plang.relImplements.keys, (key: string) => key !== plang.key);
  addRelKeys(relations, "relInfluencedBy", plang.relInfluencedBy.keys);
  addRelKeys(relations, "relLicenses", plang.relLicenses.keys);
  addRelKeys(relations, "relParadigms", plang.relParadigms.keys);
  addRelKeys(relations, "relPlatforms", plang.relPlatforms.keys);
  addRelKeys(relations, "relTags", plang.relTags.keys);
  addRelKeys(relations, "relTsys", plang.relTypeSystems.keys);
  addRelKeys(relations, "relWrittenIn", plang.relWrittenWith.keys);
  addRelKeys(relations, "relApps", plang.relApps.keys);
  addRelKeys(relations, "relLibs", plang.relLibraries.keys);
  addRelKeys(relations, "relTools", plang.relTools.keys);

  const apps = plang.relApps.values.map(app => generateSettter("app", app.key, app.data));
  const libs = plang.relLibraries.values.map(lib => generateSettter("library", lib.key, lib.data));
  const tools = plang.relTools.values.map(tool => generateSettter("tool", tool.key, tool.data));

  const bundles: string[] = [];
  plang.relBundles.values.map(bundle => {
    const bunRel: string[] = [];
    addRelKeys(bunRel, "relTools", bundle.relTools.keys);
    return `${generateSettter("bundle", bundle.key, bundle.data)}${bunRel.join("")}`;
  });

  return `import type { PlangsGraph } from "@plangs/plangs/graph";

  export function define(g: PlangsGraph) {
    ${generateSettter("plang", plang.key, plang.data)}${relations.join("")}

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

// Generate a setter for the vertex data.
// biome-ignore lint/suspicious/noExplicitAny: Any data is fine here.
const generateSettter = (kind: TPlangsVertexName, key: string, data: any) => {
  /** Cleanup data in place: sort keys, remove blank values. */
  for (const [k, v] of Object.entries(data)) {
    if (Array.isArray(v)) {
      if (v.length === 0) delete data[k];
      else v.sort();
    } else if (v === null || v === undefined || v === "") {
      delete data[k];
    }
  }

  // Remove links to local images, which are generated by the server on data load.
  if ("images" in data && Array.isArray(data.images)) {
    const images = data.images.filter(({ url }: Image) => !url.startsWith("/"));
    if (images.length > 0) data.images = images;
    else delete data.images;
  }

  return `g.vertices.${kind}.set(${JSON.stringify(key)}, ${JSON.stringify(data)})`;
};

function addRelKeys(out: string[], relName: string, keys: Set<string>, accept: (key: string) => boolean = () => true) {
  const filtered = [...keys].filter(accept);
  if (filtered.length > 0) out.push(`\n    .${relName}.add(${JSON.stringify(filtered.sort())})`);
}
