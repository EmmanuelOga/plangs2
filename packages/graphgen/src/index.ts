import { Biome, Distribution } from "@biomejs/js-api";

import type { GenGraphSpec, GenVertexSpec } from "./spec";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Generate the graph code. */
export async function generateGraph<T extends string>(spec: GenGraphSpec<T>, filePath: string) {
  const biome = await Biome.create({ distribution: Distribution.NODE });
  biome.applyConfiguration(JSON.parse(await Bun.file("biome.json").text()));

  const { graphBase, vertexPrefix = "V", vertexSuffix = "Base", vertexBase } = spec.classes.generated;

  const vertexClassName = (vertexName: string) => `${vertexPrefix}${capitalize(vertexName)}`;
  const vertexDataName = (vertexName: string) => `${vertexPrefix}${capitalize(vertexName)}Data`;

  const imports = [
    'import { Edges, Vertices, RelFrom, RelTo } from "@plangs/graphgen/library";\n\n',
    "/** Import user defined classes and types. */",
    `import { ${Object.keys(spec.vertices).map(vertexClassName).join(", ")} } from ".";`,
    `import { ${spec.name}${vertexBase} } from "./vertex_base";`,
    `import type { ${Object.keys(spec.vertices).map(vertexDataName).join(", ")} } from "./vertex_data_schemas";\n`,
  ];

  const vertexKeys: Record<string, `${string}+${string}`> = {};
  const vertexFields: string[] = [];
  for (const [vertexName, { key }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    vertexKeys[vertexName] = `${key}+\${string}`;
    const vname = vertexClassName(vertexName);
    vertexFields.push(`readonly ${vertexName} = new Vertices<${vname}>((key) => new ${vname}(this, key));`);
  }

  const code: string[] = [];
  const edgeComment = (from: string, to: string, desc: string) => `/** **${from} -> ${to}**: ${desc} */`;

  // Generate the graph class.
  code.push(`
    /** Base class for the ${spec.name} graph, generated from its specification. */
    export class ${spec.name}${graphBase}  {
    ${vertexFields.join("\n")}

    /** All vertex collections. */
    readonly nodes = {
      ${Object.keys(spec.vertices)
        .map(name => `${name}: this.${name}`)
        .join(", ")}
    } as const;

    /** All edge collections. */
    readonly edges = {
      ${spec.edges
        .map(
          ({ from, to, desc, name }) =>
            `${`${from}${capitalize(name ?? "")}${capitalize(to)}`}: new Edges<\`${vertexKeys[from]}\`, \`${vertexKeys[to]}\`>(),`,
        )
        .join("\n")}
    } as const;
  }\n`);

  // Generate the vertex classes.

  // Generate the vertex relationship wrappers.
  const relations = (vertexName: string) => {
    const rels: string[] = [];

    for (const { from, to, desc, name } of spec.edges) {
      // Name of the container of edges.
      const edgesKey = `${from}${capitalize(name ?? "")}${capitalize(to)}`;

      if (from === vertexName) {
        const edgeName = capitalize(name ?? to);
        const relName = `rel${capitalize(edgeName)}`;
        rels.push(
          `${edgeComment("this", to, desc)}\nget ${relName}() { return new RelFrom(this, this.graph.edges.${edgesKey}, this.graph.${to}) };\n`,
        );
      }
      if (to === vertexName) {
        const edgeName = capitalize(name ?? from);
        const postfix = from === to ? "Rev" : "";
        const relName = `rel${capitalize(edgeName)}${postfix}`;
        rels.push(
          `${edgeComment(from, "this", desc)}\nget ${relName}() { return new RelTo(this, this.graph.edges.${edgesKey}, this.graph.${from}); }\n`,
        );
      }
    }

    return rels;
  };

  for (const [vertexName, { key, desc }] of Object.entries(spec.vertices) as [T, GenVertexSpec][]) {
    const vertexBaseComplete = `${spec.name}${vertexBase}<"${key}", ${vertexDataName(vertexName)}>`;
    code.push(`/** ${desc} */\nexport class ${vertexClassName(vertexName)}${vertexSuffix} extends ${vertexBaseComplete} {
      static readonly kind = "${key}" as const;
      static readonly desc = "${desc}";
      override kind = ${vertexClassName(vertexName)}${vertexSuffix}.kind;

      ${relations(vertexName).join("\n")}
    }\n`);
  }

  Bun.write(filePath, biome.formatContent(`${imports.join("\n")}\n${code.join("\n")}`, { filePath }).content);
}
