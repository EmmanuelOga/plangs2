import { reformatCode } from "@plangs/languist/reformat";

import type { GenEdgeSpec, GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const mapJoin = <T>(elems: Iterable<T>, mapper: (item: T) => string, joiner: string) => [...elems].map(mapper).join(joiner);
const edgesKey = <T extends string>({ src }: GenEdgeSpec<T>) => `${src[0]}${capitalize(src[1])}`;

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string) {
  const { graphBase, vertexPrefix = "V", vertexSuffix = "Base", vertexBase } = spec.classes.generated;

  const graphClassName = `${spec.name}${graphBase}`;
  const vertexClassName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}`;
  const vertexDataName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}Data`;

  const edgeComment = (kind: "src" | "dst", s: GenEdgeSpec<T>) => {
    const [srcVertex, srcRelName, srcDesc] = s.src;
    const [dstVertex, dstRelName, dstDesc] = s.dst;
    const [srcClass, dstClass] = [vertexClassName(srcVertex), vertexClassName(dstVertex)];

    if (kind === "src") {
      const arrow = `\`(this:${srcClass})-[${edgesKey(s)}]->${dstClass}\``;
      return `/** ${srcDesc} ${arrow}. Inverse: {@link VC.${dstClass}.${dstRelName}}. */`;
    }

    const arrow = `\`${srcClass}-[${edgesKey(s)}]->(this:${dstClass})\``;
    return `/** ${dstDesc} ${arrow}. Inverse: {@link VC.${srcClass}.${srcRelName}}. */`;
  };

  type TRelName = string;
  type TCode = string;
  type TRelations = Record<TRelName, { edgeName: string; direction: "inverse" | "direct"; gen: boolean }>;

  // Walk through the spec.edges config to generate relationships code.
  function processRels(vertexName: T): { code: [TRelName, TCode][]; relations: TRelations } {
    const code: [TRelName, TCode][] = []; // We'll sort the getters by name before returning the code.
    const relations: TRelations = {};

    for (const s of spec.edges) {
      const vname = vertexClassName(vertexName);

      const [srcVertex, srcRelName] = s.src;

      if (srcVertex === vertexName) {
        const instance = `new RelFrom(this as unknown as VC.${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([srcRelName, `${edgeComment("src", s)}\nget ${srcRelName}() { return ${instance}; };\n`]);
        const gen = s.pref === "none" ? false : s.pref === "src"; // Used when generating definitions.
        relations[srcRelName] = { edgeName: edgesKey(s), direction: "direct", gen };
      }

      const [dstVertex, dstRelName] = s.dst;
      if (dstVertex === vertexName) {
        const instance = `new RelTo(this as unknown as VC.${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([dstRelName, `${edgeComment("dst", s)}\nget ${dstRelName}() { return ${instance}; }\n`]);
        const gen = s.pref === "none" ? false : s.pref === "dst"; // Used when generating definitions.
        relations[dstRelName] = { edgeName: edgesKey(s), direction: "inverse", gen };
      }
    }

    code.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    return { code, relations: Object.fromEntries(Object.entries(relations).sort()) };
  }

  const imports = [
    'import { Edges, RelFrom, RelTo, type SerializedGraph, Vertices } from "@plangs/graphgen/library";\n',
    "/** Import user defined classes and types. */",
    `import * as VC from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type * as VD from "./vertex_data_schemas";\n`,
  ];

  const code: string[] = [];

  // Some type definitions.
  const typeVClassByName = `T${spec.name}Classes`;
  code.push("/** Used for better autocomplete. */");
  code.push(`export type ${typeVClassByName}  = {
    ${mapJoin(Object.keys(spec.vertices), name => `${name}: VC.${vertexClassName(name as T)}`, ";\n")}
  };\n`);

  const typeVertexName = `T${spec.name}VertexName`;
  code.push("/** Every Vertex Name. */");
  code.push(`export type ${typeVertexName} = keyof ${typeVClassByName};\n`);

  const typeVClass = `T${spec.name}Vertex`;
  code.push("/** Every Generated Vertex Class. */");
  code.push(`export type ${typeVClass} = ${typeVClassByName}[${typeVertexName}];\n`);

  const typeRelations = `T${spec.name}Relations`;
  code.push("/** Supported relations of each class. */");
  code.push(`export type ${typeRelations} = {
    ${mapJoin(Object.keys(spec.vertices), name => `${name}: ${vertexClassName(name as T)}RelName`, ",\n")}
  };\n`);

  const typeEdgeName = `T${spec.name}EdgeName`;
  code.push("/** Supported edges of the graph. */");
  code.push(`export type ${typeEdgeName} = keyof ${graphClassName}["edges"];\n`);

  // Generate the graph class.
  code.push(`
  /** Base class for the ${spec.name} graph, generated from its specification. */
  export class ${graphClassName}  {
    /** Return a type checked object identifying a relationship of a specific kind of Vertex. */
    static relConfig<T extends ${typeVertexName}>(vertexName: T, vertexRel: ${typeRelations}[T]) {
      // biome-ignore lint/style/noNonNullAssertion: correct by construction.
      const klass = ${graphClassName}.vertexClass(vertexName)!;
      // @ts-ignore correct by construction.
      const { edgeName, direction }: { edgeName: ${typeEdgeName}; direction: "direct" | "inverse" } = klass.relConfig[vertexRel];
      return { kind: "rel", edgeName, direction } as const;
    }

    /** Return a type checked object identifying a property of the class that is "readable" (a prop returning a String, Boolean or Nunber). */
    static propConfig<T extends ${typeVertexName}>(vertexName: T, vertexProp: keyof ${typeVClassByName}[T]) {
      return { kind: "prop", vertexName, vertexProp } as const;
    }

    /** Get a Vertex class by its Vertex name. */
    static vertexClass<T extends ${typeVertexName}>(vertexName: T) {
      // We cannot use a Map here because each of the classes will not be initialized yet.
      ${mapJoin(Object.keys(spec.vertices), name => `if (vertexName === "${name}") return VC.${vertexClassName(name as T)};`, "\n")}
    }

    /** Vertex kinds per Vertex Name. The kind is the prefix of a Vertex Key. */
    static readonly vertexKind = new Map<${typeVertexName}, string>([
      ${mapJoin(Object.entries(spec.vertices) as [string, GenVertexSpec][], ([name, s]) => `["${name}", "${s.key}"]`, ",\n")}
    ]);

    /** Reverse map of vertexKind. */
    static readonly vertexNameByKind = new Map<string, ${typeVertexName}>(Array.from(${graphClassName}.vertexKind.entries()).map(([k, v]) => [v, k]));

    // Create a Vertices instances for each vertex.

    ${(Object.entries(spec.vertices) as [T, GenVertexSpec][])
      .map(([vertexName, { key }]) => {
        const cname = vertexClassName(vertexName);
        return `readonly ${vertexName} = new Vertices<VC.${cname}>("${vertexName}", "${key}", (key) => new VC.${cname}(this, key));`;
      })
      .join("\n")}

    /** All vertex collections. */
    readonly vertices = {
      ${mapJoin(Object.keys(spec.vertices), name => `${name}: this.${name}`, ", ")}
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

    loadJSON(data: SerializedGraph) : this {
      for (const [vertexName, vertices] of Object.entries(data.vertices)) {
        const map = this.vertices[vertexName as ${typeVertexName}];
        for (const [vertexKey, vertexData] of Object.entries(vertices)) {
          map.set(vertexKey as any, vertexData as any);
        }
      }
      for (const [edgeName, edges] of Object.entries(data.edges)) {
        const map = this.edges[edgeName as keyof typeof this.edges];
        for (const [fromKey, toKeys] of Object.entries(edges)) {
          map.add(fromKey as any, ...(toKeys as any[]));
        }
      }
      return this;
    }
  }\n`);

  // Sort vertices by name, to avoid changing the generated code when the entries are in a different order.
  const vertexEntries = Object.entries(spec.vertices).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));
  for (const [vertexName, { key, desc }] of vertexEntries as [T, GenVertexSpec][]) {
    const { code: relCode, relations } = processRels(vertexName);
    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", VD.${vertexDataName(vertexName)}>`;
    const plainName = vertexClassName(vertexName);
    const className = `${plainName}${vertexSuffix}`;

    code.push(`/** Type of the key of an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Key = \`${key}+\${string}\`;\n`);

    const typeRelName = `${plainName}RelName`;
    code.push(`export type ${typeRelName} = keyof typeof ${className}['relConfig'];\n`);

    code.push(`/** ${desc} */\nexport abstract class ${className} extends ${vertexBaseComplete} {
      static readonly vertexKind = "${key}" as const;
      static readonly vertexName = "${vertexName}" as const;
      static readonly vertexDesc = "${desc}";
      static readonly relConfig = ${JSON.stringify(relations)} as const;

      override readonly vertexKind = ${className}.vertexKind;
      override readonly vertexDesc = ${className}.vertexDesc;
      override readonly vertexName = ${className}.vertexName;
      readonly relConfig = ${className}.relConfig;

      /** All the relations, keyed by rel name. */
      get relations() {
        return new Map((Object.keys(${className}.relConfig) as ${typeRelName}[]).map(rel => [rel, this[rel]]));
      }

      ${relCode.map(([_, code]) => `${code}`).join("\n")}
    }\n`);
  }

  const notice = `/**  Do not modify manually! Generated by graphgen on ${new Date().toISOString()}. */\n`;

  await Bun.write(filePath, await reformatCode(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, filePath));
}
