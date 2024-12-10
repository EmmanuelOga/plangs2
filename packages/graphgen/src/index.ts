import { Biome, Distribution } from "@biomejs/js-api";

import type { GenEdgeSpec, GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const quoteJoin = (elems: Iterable<string>, joiner: string) => [...elems].map(e => `"${e}"`).join(joiner);
const mapJoin = <T>(elems: Iterable<T>, mapper: (item: T) => string, joiner: string) => [...elems].map(mapper).join(joiner);

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string) {
  const biome = await Biome.create({ distribution: Distribution.NODE });
  biome.applyConfiguration(JSON.parse(await Bun.file("biome.json").text()));

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
      const arrow = `\`(this:${srcClass})-[${srcRelName}]->${dstClass}\``;
      return `/** ${srcDesc} ${arrow}. Inverse: {@link ${dstClass}.${dstRelName}}. */`;
    }

    const arrow = `\`${srcClass}-[${srcRelName}]->(this:${dstClass})\``;
    return `/** ${dstDesc} ${arrow}. Inverse: {@link ${srcClass}.${srcRelName}}. */`;
  };

  type TRelname = string;
  type TCode = string;
  type TRelations = Record<string, { relName: string; direction: "inverse" | "direct" }>;

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
        relations[srcRelName] = { relName: edgesKey(s), direction: "direct" };
      }

      const [dstVertex, dstRelName] = s.dst;
      if (dstVertex === vertexName) {
        const instance = `new RelTo(this as unknown as ${vname}, this.graph.edges.${edgesKey(s)})`;
        code.push([dstRelName, `${edgeComment("dst", s)}\nget ${dstRelName}() { return ${instance}; }\n`]);
        relations[dstRelName] = { relName: edgesKey(s), direction: "inverse" };
      }
    }

    code.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    return { code, relations: Object.fromEntries(Object.entries(relations).sort()) };
  }

  const imports = [
    'import { Edges, RelFrom, RelTo, type Relation, type SerializedGraph, Vertices } from "@plangs/graphgen/library";\n',
    "/** Import user defined classes and types. */",
    `import { ${mapJoin(Object.keys(spec.vertices) as T[], vertexClassName, ", ")} } from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type { ${mapJoin(Object.keys(spec.vertices) as T[], vertexDataName, ", ")} } from "./vertex_data_schemas";\n`,
  ];

  const vertexFields: string[] = [];
  for (const [vertexName, { key }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    const vname = vertexClassName(vertexName);
    vertexFields.push(`readonly ${vertexName} = new Vertices<${vname}>("${vertexName}", "${key}", (key) => new ${vname}(this, key));`);
  }

  const code: string[] = [];

  // Some type definitions.
  const typeVertexName = `T${spec.name}VertexName`;
  code.push(`export type ${typeVertexName} = ${quoteJoin(Object.keys(spec.vertices), " | ")};\n`);

  const typeRelations = `T${spec.name}Relations`;
  code.push("/** Supported relations of each class. */");
  code.push(`export type ${typeRelations} = {
    ${mapJoin(Object.keys(spec.vertices), name => `${name}: ${vertexClassName(name as T)}RelName`, ",\n")}
  };\n`);

  const typeVClass = `T${spec.name}VertexClass`;
  code.push("/** Every Generated Vertex Class. */");
  code.push(`export type ${typeVClass}  = ${mapJoin(Object.keys(spec.vertices) as T[], vertexClassName, " | ")};\n`);

  const typeVClassByName = `T${spec.name}VClassByName`;
  code.push("/** Used for better autocomplete. */");
  code.push(`export type ${typeVClassByName}  = {
    ${mapJoin(Object.keys(spec.vertices), name => `${name}: ${vertexClassName(name as T)}`, ";\n")}
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
      const klass = ${graphClassName}.vertexClass(vertexName);
      // @ts-ignore correct by construction.
      const rel = klass.relations.get(vertexRel) as Relation<${typeEdgeName}>;
      return { kind: 'rel', edgeName: rel.edgeName, direction: rel.direction } as const;
    }

    /** Return a type checked object identifying a property of the class that is "readable" (a prop returning a String, Boolean or Nunber). */
    static propConfig<T extends ${typeVertexName}>(vertexName: T, vertexProp: keyof ${typeVClassByName}[T]) {
      return { kind: 'prop', vertexName: vertexName as ${typeVertexName}, vertexProp: vertexProp as string } as const;
    }

    /** Get a Vertex class by its Vertex name. */
    static vertexClass<T extends ${typeVertexName}>(vertexName: T) {
      // We cannot use a Map here because each of the classes will not be initialized yet.
      ${mapJoin(Object.keys(spec.vertices), name => `if (vertexName === "${name}") return ${vertexClassName(name as T)};`, "\n")}
    }

    /** Vertex kinds per Vertex Name. The kind is the prefix of a Vertex Key. */
    static readonly vertexKind = new Map<${typeVertexName}, string>([
      ${mapJoin(Object.entries(spec.vertices) as [string, GenVertexSpec][], ([name, s]) => `["${name}", "${s.key}"]`, ",\n")}
    ]);

    /** Reverse map of vertexKind. */
    static readonly vertexNameByKind = new Map<string, ${typeVertexName}>(Array.from(${graphClassName}.vertexKind.entries()).map(([k, v]) => [v, k]));

    /** Get a vertex by key, if the kind of vertex is known. */
    getVertex(vertexKey: string): TPlangsVertexClass | undefined {
      const kind = vertexKey.split("+", 2)[0] as TPlangsVertexName;
      const vertexName = ${graphClassName}.vertexNameByKind.get(kind);
      if (!vertexName) return;
      return this.vertices[vertexName]?.get(vertexKey as any);
    }

    // Create a Vertices instances for each vertex.

    ${vertexFields.join("\n")}

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
    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", ${vertexDataName(vertexName)}>`;
    const plainName = vertexClassName(vertexName);
    const className = `${plainName}${vertexSuffix}`;

    code.push(`/** Type of the key of an instance of {@link ${plainName}}. */`);
    code.push(`export type ${plainName}Key = \`${key}+\${string}\`;\n`);

    code.push("/** The Vertex responds to the following relationship getters. */");
    code.push(`export const ${plainName}Rels = ${JSON.stringify(Object.keys(relations))} as const;\n`);
    code.push(`export type ${plainName}RelName = (typeof ${plainName}Rels)[number];\n`);

    code.push(`/** ${desc} */\nexport abstract class ${className} extends ${vertexBaseComplete} {
      static readonly vertexKind = "${key}" as const;
      static readonly vertexName = "${vertexName}" as const;
      static readonly vertexDesc = "${desc}";

      override readonly vertexKind = ${className}.vertexKind;
      override readonly vertexDesc = ${className}.vertexDesc;
      override readonly vertexName = ${className}.vertexName;

      /** Get one relationship by name. */
      relation(name: ${plainName}RelName) {
        return this[name];
      }

      /* Get all relationships as an Array. */
      relations() {
        return  ${plainName}Rels.map(name => this[name]);
      }

      ${relCode.map(([_, code]) => `${code}`).join("\n")}
    }\n`);
  }

  const notice = `/**  Do not modify manually! Generated by graphgen on ${new Date().toISOString()}. */\n`;

  Bun.write(filePath, biome.formatContent(`${notice}\n${imports.join("\n")}\n${code.join("\n")}`, { filePath }).content);
}
