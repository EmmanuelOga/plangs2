import { Biome, Distribution } from "@biomejs/js-api";

import { StringLike } from "bun";
import type { GenEdgeSpec, GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// export type TPlangsConfigRelKey<T extends TPlangsVertexName> = keyof typeof PLANGS_GRAPH_CONFIG[T]["relations"];
// function getRelConfig<T extends TPlangsVertexName, K extends TPlangsConfigRelKey<T>>(rootKey: T, subKey: K): { from: T; to: T; edgeName: TPlangsEdgeName; direction: "direct" | "inverse"; desc: string; } {
//   // @ts-ignore for some reason TypeScript doesn't understand that the key is valid
//   return PLANGS_GRAPH_CONFIG[rootKey].relations[subKey]
// }
// type VertexClassMap = { "plang": VPlang; "platform": VPlatform; "app": VApp; "bundle": VBundle; "community": VCommunity; "learning": VLearning; "library": VLibrary; "license": VLicense; "paradigm": VParadigm; "post": VPost; "tag": VTag; "tool": VTool; "typeSystem": VTypeSystem; }
// function getPropType<V extends TPlangsVertexName, P extends keyof VertexClassMap[V]>(vertexName: V, propName: P): { vertexName: V; propName: P; } {
//   return { vertexName, propName }
// }
// getRelConfig("plang", "relTags")
// getPropType("plang", "name")

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string) {
  const biome = await Biome.create({ distribution: Distribution.NODE });
  biome.applyConfiguration(JSON.parse(await Bun.file("biome.json").text()));

  const { graphBase, vertexPrefix = "V", vertexSuffix = "Base", vertexBase } = spec.classes.generated;

  const vertexClassName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}`;
  const vertexDataName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}Data`;
  const edgesKey = ({ src }: GenEdgeSpec<T>) => `${src[0]}${capitalize(src[1])}`;

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

  type TRelname = string;
  type TCode = string;
  type TRelations = Record<string, { edgeName: string; direction: "direct" | "inverse" }>;

  // Walk through the spec.edges config to generate relationships code.
  function processRels(vertexName: T): { code: [TRelname, TCode][]; relations: TRelations } {
    const code: [TRelname, TCode][] = []; // We'll sort the getters by name before returning the code.
    const relations: TRelations = {};

    for (const s of spec.edges) {
      const vname = vertexClassName(vertexName);

      const [srcVertex, srcRelName] = s.src;

      if (srcVertex === vertexName) {
        const instance = `new RelFrom(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([srcRelName, `${edgeComment("src", s)}\nget ${srcRelName}() { return ${instance}; };\n`]);
        relations[srcRelName] = { edgeName: edgesKey(s), direction: "direct" };
      }

      const [dstVertex, dstRelName] = s.dst;
      if (dstVertex === vertexName) {
        const instance = `new RelTo(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([dstRelName, `${edgeComment("dst", s)}\nget ${dstRelName}() { return ${instance}; }\n`]);
        relations[dstRelName] = { edgeName: edgesKey(s), direction: "inverse" };
      }
    }

    code.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    return { code, relations };
  }

  const imports = [
    'import { Edges, type ReadableProps, RelFrom, RelTo, type SerializedGraph, Vertices } from "@plangs/graphgen/library";\n',
    "/** Import user defined classes and types. */",
    `import { ${(Object.keys(spec.vertices) as T[]).map(vertexClassName).join(", ")} } from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type { ${(Object.keys(spec.vertices) as T[]).map(vertexDataName).join(", ")} } from "./vertex_data_schemas";\n`,
  ];

  const vertexFields: string[] = [];
  for (const vertexName of Object.keys(spec.vertices) as T[]) {
    const vname = vertexClassName(vertexName);
    vertexFields.push(`readonly ${vertexName} = new Vertices<${vname}>((key) => new ${vname}(this, key));`);
  }

  const code: string[] = [];

  // Some type definitions.
  const typeEdgeName = `T${spec.name}EdgeName`;
  const typeVertexKind = `T${spec.name}VertexKind`;
  const typeVertexName = `T${spec.name}VertexName`;

  const vertexNames = Object.keys(spec.vertices)
    .map(k => `"${k}"`)
    .join(" | ");
  const vertexKinds = (Object.values(spec.vertices) as GenVertexSpec[]).map(s => `"${s.key}"`).join(" | ");
  const edgeNames = spec.edges
    .map(s => `"${edgesKey(s)}"`)
    .sort()
    .join("|");

  code.push(`export type ${typeVertexName} = ${vertexNames};\n`);
  code.push(`export type ${typeVertexKind} = ${vertexKinds};\n`);
  code.push(`export type ${typeEdgeName} = ${edgeNames};\n`);

  // Generate the graph class.
  code.push(`
  /** Base class for the ${spec.name} graph, generated from its specification. */
  export class ${spec.name}${graphBase}  {
    /** All Vertex classes. */
    readonly vertexClasses = {
      ${Object.keys(spec.vertices)
        .map(name => `${name}: ${vertexClassName(name as T)}`)
        .join(", ")}
    } as const;

    // Create a Vertices instances for each vertex.

    ${vertexFields.join("\n")}

    /** All vertex collections. */
    readonly vertices = {
      ${Object.keys(spec.vertices)
        .map(name => `${name}: this.${name}`)
        .join(", ")}
    } as const;

    /** All edge collections. */
    readonly edges = {
      ${spec.edges
        .map(s => `${edgesKey(s)}: new Edges(this.${s.src[0]}, this.${s.dst[0]}, ${JSON.stringify(s.src[2])}, ${JSON.stringify(s.dst[2])}),`)
        .sort()
        .join("\n")}
    } as const;

    toJSON(): SerializedGraph {
      return {
        vertices: Object.fromEntries(Object.entries(this.vertices).map(([k, v]) => [k, v.toJSON()])),
        edges: Object.fromEntries(Object.entries(this.edges).map(([k, e]) => [k, e.toJSON()])),
      };
    }

    loadJSON(data: SerializedGraph) {
      for (const [vertexName, vertices] of Object.entries(data.vertices)) {
        const map = this.vertices[vertexName as TPlangsVertexName];
        for (const [vertexKey, vertexData] of Object.entries(vertices)) {
          map.set(vertexKey as any, vertexData as any);
        }
      }
      for (const [edgeName, edges] of Object.entries(data.edges)) {
        const map = this.edges[edgeName as TPlangsEdgeName];
        for (const [fromKey, toKeys] of Object.entries(edges)) {
          map.add(fromKey as any, ...(toKeys as any[]));
        }
      }
    }
  }\n`);

  // Sort vertices by name, to avoid changing the generated code when the entries are in a different order.
  const vertexEntries = Object.entries(spec.vertices).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));
  for (const [vertexName, { key, desc }] of vertexEntries as [T, GenVertexSpec][]) {
    const { code: relCode, relations } = processRels(vertexName);
    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", ${vertexDataName(vertexName)}>`;
    const plainName = vertexClassName(vertexName);
    const className = `${plainName}${vertexSuffix}`;

    code.push(`/** Type of the key of an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Key = \`${key}+\${string}\`;\n`);

    code.push(`/** Relationship available on an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Rel = ${relCode.map(([name]) => `"${name}"`).join("|")};\n`);

    code.push(`/** Type of the readable props of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Prop = ReadableProps<${plainName}>;\n`);

    code.push(`/** ${desc} */\nexport abstract class ${className} extends ${vertexBaseComplete} {
      static readonly keyPrefix = "${key}";
      static readonly vertexName = "${vertexName}";
      static readonly vertexDesc = "${desc}";

      /** Describes the edges and direction used for every relationship in this Vertex. */
      static readonly relations = ${JSON.stringify(relations)} as const;

      readonly vertexDesc = ${className}.vertexDesc;

      ${relCode.map(([_, code]) => `${code}`).join("\n")}
    }\n`);
  }

  const notice = `/**  Do not modify manually! Generated by graphgen on ${new Date().toISOString()}. */\n`;

  Bun.write(filePath, biome.formatContent(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, { filePath }).content);
}
