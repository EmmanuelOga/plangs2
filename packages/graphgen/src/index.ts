import { join } from "node:path";

import { reformatCode } from "@plangs/languist/reformat";

import type { GenEdgeSpec, GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const mapJoin = <T>(elems: Iterable<T>, mapper: (item: T) => string, joiner: string) => [...elems].map(mapper).join(joiner);

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string, diagramPath: string) {
  const { graphBase, vertexPrefix = "V", vertexSuffix = "Base", vertexBase } = spec.classes.generated;

  const graphClassName = `${spec.name}${graphBase}`;
  const vertexClassName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}`;
  const vertexDataName = (vertexName: T) => `${vertexPrefix}${capitalize(vertexName)}Data`;
  const edgesKey = ({ src }: GenEdgeSpec<T>) => `${src[0]}${capitalize(src[1])}`;

  const edgeComment = (kind: "src" | "dst", s: GenEdgeSpec<T>) => {
    const [srcVertex, srcRelName, srcDesc] = s.src;
    const [dstVertex, dstRelName, dstDesc] = s.dst;
    const [srcClass, dstClass] = [vertexClassName(srcVertex), vertexClassName(dstVertex)];

    if (kind === "src") {
      const arrow = `\`(this:${srcClass})-[${edgesKey(s)}]->${dstClass}\``;
      return `/** ${srcDesc} ${arrow}. Inverse: {@link ${dstClass}.${dstRelName}}. */`;
    }

    const arrow = `\`${srcClass}-[${edgesKey(s)}]->(this:${dstClass})\``;
    return `/** ${dstDesc} ${arrow}. Inverse: {@link ${srcClass}.${srcRelName}}. */`;
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

    /** Get a vertex by key, if the kind of vertex is known. */
    getVertex(vertexKey: string): ${typeVClass} | undefined {
      const kind = vertexKey.split("+", 2)[0] as ${typeVertexName};
      const vertexName = ${graphClassName}.vertexNameByKind.get(kind);
      if (!vertexName) return;
      return this.vertices[vertexName]?.get(vertexKey as any);
    }

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

  Bun.write(filePath, await reformatCode(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, filePath));

  // graphAnalysis<T>(spec, diagramPath);
}

/**
 * NOTE: this is very much a debugging aid, which may change or be removed in the future.
 * We are trying to make sense of the graph and figure out which relationships can be inferred.
 */
function graphAnalysis<T extends string>(spec: GenGraphSpec<T>, diagramPath: string) {
  const colors = Object.keys(spec.vertices);

  const color = (name: string, offset = 0) => {
    const [h, s, v] = [(offset + Math.round((colors.indexOf(name) * 1000) / colors.length) / 1000) % 1, 0.5, 0.9];
    return `${h} ${s} ${b}`;
  };

  const all = new Set<string>(Object.keys(spec.vertices));

  // Generate combinations of k elements from an array.
  const combinations = (arr: string[], k: number): Set<string>[] => {
    if (k === 0) return [new Set()];
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    const combsWithFirst = combinations(rest, k - 1).map(comb => [first, ...comb]);
    const combsWithoutFirst = combinations(rest, k);
    return [...combsWithFirst, ...combsWithoutFirst].map(comb => new Set(comb));
  };

  // Mini graph structure: a vertexName is connected to another if there's an edge between them.
  // Note this is about the kinds of vertices, not the instances themselves.
  const edgeMap = new Map<string, Set<string>>();
  for (const s of spec.edges) {
    const [src] = s.src;
    const [dst] = s.dst;
    const set = edgeMap.get(src) || new Set();
    if (!edgeMap.has(src)) edgeMap.set(src, set);
    set.add(dst);
  }

  // Mini graph analysis: find all 3-combinations of vertices that are connected by at least 2 edges.
  const hasConn = (a: string, b: string) => (edgeMap.get(a)?.has(b) || edgeMap.get(b)?.has(a) ? 1 : 0);
  const all3comb = combinations([...all], 3).filter(set => {
    const [a, b, c] = [...set];
    return hasConn(a, b) + hasConn(b, c) + hasConn(a, c) > 2;
  });

  // Place all 3-combinations graphs in a single graph.
  // We want subgraphs in a single graph, but graphviz requires each node to have a separate id, so we use a counter.
  let i = 0;
  const dot = (whitelist: Set<string>) => {
    i++; // Each subgraph uses the same id postfix, hence the graphs end up in the same diagram but in separate clusters.

    const vertices = Object.keys(spec.vertices).filter(name => whitelist.size === 0 || whitelist.has(name));
    const edges = spec.edges.filter(s => whitelist.size === 0 || (whitelist.has(s.src[0]) && whitelist.has(s.dst[0])));

    return `subgraph cluster${i++} {
      ${mapJoin(vertices, name => `${name}${i} [label="${name}", style=filled, fillcolor="${color(name)}", fontcolor="black"];`, "\n  ")}
      ${mapJoin(edges, s => `${s.src[0]}${i} -> ${s.dst[0]}${i} [label="${s.src[2].toLowerCase()}" color="${color(s.src[0])}"];`, "\n  ")}
    }`;
  };

  // To make it more maneageable, we generate a different diagram where the requirement is that the vertex is included.
  for (const vert of all) {
    const code = [`digraph ${vert} {\n`];
    const including = all3comb.filter(set => set.has(vert));
    if (including.length > 0) {
      code.push(including.map(dot).join("\n\n"));
      code.push("}");
      Bun.write(join(diagramPath, `${vert}-${including.length}.dot`), code.join("\n"));
    }
  }
}
