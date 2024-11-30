import { Biome, Distribution } from "@biomejs/js-api";

import { StringLike } from "bun";
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
  type TRelations = Record<
    string,
    {
      edgeName: string;
      direction: "direct" | "inverse";
      from: string;
      to: string;
      desc: string;
    }
  >;

  // Walk through the spec.edges config to generate relationships code.
  function processRels(vertexName: string): {
    code: [TRelname, TCode][];
    relations: TRelations;
  } {
    const code: [TRelname, TCode][] = []; // We'll sort the getters by name before returning the code.
    const relations: TRelations = {};

    for (const s of spec.edges) {
      const vname = vertexClassName(vertexName);

      const [srcVertex, srcRelName] = s.src;
      const fromTo = { from: s.src[0], to: s.dst[0] };

      if (srcVertex === vertexName) {
        const instance = `new RelFrom(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([srcRelName, `${edgeComment("src", s)}\nget ${srcRelName}() { return ${instance}; };\n`]);
        relations[srcRelName] = { ...fromTo, edgeName: edgesKey(s), direction: "direct", desc: s.src[2] };
      }

      const [dstVertex, dstRelName] = s.dst;
      if (dstVertex === vertexName) {
        const instance = `new RelTo(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([dstRelName, `${edgeComment("dst", s)}\nget ${dstRelName}() { return ${instance}; }\n`]);
        relations[dstRelName] = { ...fromTo, edgeName: edgesKey(s), direction: "inverse", desc: s.dst[2] };
      }
    }

    code.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    return { code, relations };
  }

  const imports = [
    'import { Edges, RelFrom, RelTo, type SerializedGraph, Vertices } from "@plangs/graphgen/library";\n\n',
    "/** Import user defined classes and types. */",
    `import { ${Object.keys(spec.vertices).map(vertexClassName).join(", ")} } from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type { ${Object.keys(spec.vertices).map(vertexDataName).join(", ")} } from "./vertex_data_schemas";\n`,
  ];

  const graphConfig: Record<string, { key: string; relations: TRelations }> = {};
  const vertexFields: string[] = [];
  for (const [vertexName, { key }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    graphConfig[vertexName] = { key, relations: processRels(vertexName).relations };
    const vname = vertexClassName(vertexName);
    vertexFields.push(`readonly ${vertexName} = new Vertices<${vname}>((key) => new ${vname}(this, key));`);
  }

  const code: string[] = [];

  // Some static information.
  const configConst = `${spec.name.toUpperCase()}_GRAPH_CONFIG`;
  code.push(`export const ${configConst} = ${JSON.stringify(graphConfig)} as const;\n`);

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

  code.push(`export type ${typeVertexName} = ${vertexNames};`);
  code.push(`export type ${typeVertexKind} = ${vertexKinds}`);
  code.push(`export type ${typeEdgeName} = ${edgeNames};`);

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
      ${spec.edges
        .map(s => `${edgesKey(s)}: new Edges(this.${s.src[0]}, this.${s.dst[0]}),`)
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
        this.vertices[vertexName as ${typeVertexName}].setMany(vertices as [any, any]);
      }
      for (const [edgeName, edges] of Object.entries(data.edges)) {
        this.edges[edgeName as ${typeEdgeName}].addMany(edges as [any, any]);
      }
    }
  }\n`);

  // Sort vertices by name, to avoid changing the generated code when the entries are in a different order.
  const vertexEntries = Object.entries(spec.vertices).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));
  for (const [vertexName, { key, desc }] of vertexEntries as [T, GenVertexSpec][]) {
    const relations = processRels(vertexName).code;
    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", ${vertexDataName(vertexName)}>`;
    const plainName = vertexClassName(vertexName);
    const className = `${plainName}${vertexSuffix}`;

    code.push(`/** Type of the key of an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Key = \`${key}+\${string}\`;\n`);

    code.push(`/** Relationship available on an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Rel = ${relations.map(([name]) => `"${name}"`).join("|")};\n`);

    code.push(`/** ${desc} */\nexport abstract class ${className} extends ${vertexBaseComplete} {
      static readonly kind = "${key}";
      static readonly vertexName = "${vertexName}";
      static readonly desc = "${desc}";

      override readonly kind = ${className}.kind; 
      override readonly desc = ${className}.desc;

      /** Return a configuration object for a property of this vertex. */
      static propConf(propName: keyof ${plainName}) : { vertexName: ${typeVertexName}, propName: keyof ${plainName} } {
        return { vertexName: ${plainName}.vertexName, propName };
      }

      /** Return a configuration object for a relation of this vertex. */
      static relConf(relName: ${plainName}Rel)  {
        return ${configConst}.${vertexName}.relations[relName];
      }

      ${relations.map(([_, code]) => `${code}`).join("\n")}
    }\n`);
  }

  const notice = `/**  Do not modify manually! Generated by graphgen on ${new Date().toISOString()}. */\n`;

  Bun.write(filePath, biome.formatContent(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, { filePath }).content);
}
