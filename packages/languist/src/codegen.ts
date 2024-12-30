import { join } from "node:path";

import { cleanup } from "@plangs/auxiliar/misc";
import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import type { Image } from "@plangs/plangs/graph/vertex_data_schemas";

export const DEFINITIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions");

export function tsVertexPath(vertex: TPlangsVertex): string {
  const name = vertex.plainKey.replace(/[^a-zA-Z0-9\_\+\-]/g, "-");
  return join(DEFINITIONS_PATH, vertex.vertexName, vertex.classifier, `${name}.ts`);
}

/** Generate code that can reconstruct the state of a single vertex. */
export function vertexCodeGen(vertex: TPlangsVertex): string {
  return `import type { PlangsGraph } from "@plangs/plangs/graph";

  export function define(g: PlangsGraph) {
    ${genSetter(vertex)}
  }`;
}

function genSetter(vertex: TPlangsVertex, genRelations = true) {
  const data = cleanup(vertex.data); // Sort, remove undefined, etc.

  // Remove links to local images, which are generated by the server on data load.
  if ("images" in data && Array.isArray(data.images)) {
    const images = data.images.filter(({ url }: Image) => !url.startsWith("/"));
    if (images.length > 0) data.images = images;
    else delete data.images;
  }

  const relations: string[] = [];

  if (genRelations) {
    // Set of relation names that should be generated.
    const toGenerate = new Set(
      Object.entries(vertex.relConfig)
        .filter(([, { gen }]) => gen)
        .map(([name]) => name),
    );

    for (const [relName, relation] of vertex.relations) {
      if (!toGenerate.has(relName)) continue;
      let keys = [...relation.keys].sort();

      // "Implements self" we infer/materialize, so we can skip it here.
      if (vertex instanceof VPlang && relName === "relImplements") keys = keys.filter(k => k !== vertex.key);

      if (keys.length > 0) relations.push(`\n    .${relName}.add(${JSON.stringify(keys).slice(1, -1)})`);
    }
  }

  return `g.${vertex.vertexName}.set(${JSON.stringify(vertex.key)}, ${JSON.stringify(data)})${relations.join("")}`;
}
