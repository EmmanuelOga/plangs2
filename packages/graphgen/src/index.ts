import { Biome, Distribution } from "@biomejs/js-api";

import type { GenEdgeSpec, GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string) {
  const biome = await Biome.create({ distribution: Distribution.NODE });
  biome.applyConfiguration(JSON.parse(await Bun.file("biome.json").text()));

  const { graphBase, vertexPrefix = "V", vertexSuffix = "Base", vertexBase } = spec.classes.generated;

  const vertexClassName = (vertexName: string) => `${vertexPrefix}${capitalize(vertexName)}`;
  const vertexDataName = (vertexName: string) => `${vertexPrefix}${capitalize(vertexName)}Data`;
  const edgesKey = ({ src }: GenEdgeSpec<T>) => `${src[0]}${capitalize(src[1])}`;

  const imports = [
    'import { Edges, RelFrom, RelTo, type SerializedGraph, Vertices } from "@plangs/graphgen/library";\n\n',
    "/** Import user defined classes and types. */",
    `import { ${Object.keys(spec.vertices).map(vertexClassName).join(", ")} } from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type { ${Object.keys(spec.vertices).map(vertexDataName).join(", ")} } from "./vertex_data_schemas";\n`,
  ];

  const vertexNameToKind: Record<string, string> = {};
  const vertexFields: string[] = [];
  for (const [vertexName, { key }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    vertexNameToKind[vertexName] = key;
    const vname = vertexClassName(vertexName);
    vertexFields.push(`readonly ${vertexName} = new Vertices<${vname}>((key) => new ${vname}(this, key));`);
  }

  const code: string[] = [];

  // Some constants.
  const nameToKindConst = `${spec.name.toUpperCase()}_VERTEX_NAME_TO_KIND`;
  code.push("/** Mapping from vertex name to kind. The vertex kind is the prefix for Vertex keys: `${kind}+${id}`. */");
  code.push(`export const ${nameToKindConst} = ${JSON.stringify(vertexNameToKind)} as const;\n`);

  // Some type definitions.
  code.push(`export type ${spec.name}VertexName = keyof typeof ${nameToKindConst};`);
  code.push(`export type ${spec.name}EdgeName = keyof PlangsGraphBase["edges"];\n`);

  // Generate the graph class.
  code.push(`
    /** Base class for the ${spec.name} graph, generated from its specification. */
    export class ${spec.name}${graphBase}  {
    ${vertexFields.join("\n")}

    /** All vertex collections. */
    readonly vertices = {
      ${Object.keys(spec.vertices)
        .map(name => `${name}: this.${name}`)
        .join(", ")}
    } as const;

    /** All edge collections. */
    readonly edges = {
      ${spec.edges.map(s => `${edgesKey(s)}: new Edges(this.${s.src[0]}, this.${s.dst[0]}),`).join("\n")}
    } as const;

    toJSON(): SerializedGraph {
      return {
        vertices: Object.fromEntries(Object.entries(this.vertices).map(([k, v]) => [k, v.toJSON()])),
        edges: Object.fromEntries(Object.entries(this.edges).map(([k, e]) => [k, e.toJSON()])),
      };
    }

    loadJSON(data: SerializedGraph) {
      for (const [vertexName, vertices] of Object.entries(data.vertices)) {
        this.vertices[vertexName as PlangsVertexName].setMany(vertices as [any, any]);
      }
      for (const [edgeName, edges] of Object.entries(data.edges)) {
        this.edges[edgeName as PlangsEdgeName].addMany(edges as [any, any]);
      }
    }
  }\n`);

  // Generate the vertex classes.

  const edgeComment = (kind: "src" | "dst", s: GenEdgeSpec<T>) => {
    const [srcVertex, srcRelName, srcDesc] = s.src;
    const [dstVertex, dstRelName, dstDesc] = s.dst;
    const [srcClass, dstClass] = [vertexClassName(srcVertex), vertexClassName(dstVertex)];

    if (kind === "src") {
      const arrow = `\`(this:${srcClass})-[${srcRelName}]->${dstClass}\``;
      return `/** ${srcDesc} ${arrow}. Inverse: {@link ${dstClass}.${dstRelName}}. */`;
    }

    const arrow = `\`${srcClass}-[${srcRelName}]->(this:${dstClass})\``;
    return `/** ${dstDesc} ${arrow}. Inverse: {@link ${srcClass}.${srcRelName}}. */`;
  };

  // Generate the vertex relationship wrappers.
  const relations = (vertexName: string) => {
    const rels: string[] = [];

    for (const s of spec.edges) {
      const vname = vertexClassName(vertexName);

      const [srcVertex, srcRelName] = s.src;
      if (srcVertex === vertexName) {
        const instance = `new RelFrom(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        rels.push(`${edgeComment("src", s)}\nget ${srcRelName}() { return ${instance}; };\n`);
      }

      const [dstVertex, dstRelName] = s.dst;
      if (dstVertex === vertexName) {
        const instance = `new RelTo(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        rels.push(`${edgeComment("dst", s)}\nget ${dstRelName}() { return ${instance}; }\n`);
      }
    }

    return rels;
  };

  for (const [vertexName, { key, desc }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    code.push(`export type ${vertexClassName(vertexName)}Key = \`${key}+\${string}\`;\n`);

    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", ${vertexDataName(vertexName)}>`;
    const className = `${vertexClassName(vertexName)}${vertexSuffix}`;

    code.push(`/** ${desc} */\nexport abstract class ${className} extends ${vertexBaseComplete} {
      static readonly kind = "${key}";
      override readonly kind = ${className}.kind; 

      static readonly desc = "${desc}";
      override readonly desc = ${className}.desc;

      ${relations(vertexName).join("\n")}
    }\n`);
  }

  const notice = `/**  Do not modify manually! Generated by graphgen on ${new Date().toISOString()}. */\n`;

  Bun.write(filePath, biome.formatContent(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, { filePath }).content);
}
