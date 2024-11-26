import type { GenGraphSpec } from "@plangs/graphgen/spec";

/**
 * Specification for the Plangs Graph, used to generate the graph.
 */

/**
 * The name of every vertex. Listed first to ensure each
 * from/to name in the configuration uses a valid vertex name.
 */
type PlangVertexNames =
  | "app"
  | "bundle"
  | "community"
  | "learning"
  | "library"
  | "license"
  | "paradigm"
  | "plang"
  | "platform"
  | "post"
  | "tag"
  | "tool"
  | "typeSystem";

export const PLANGS_GRAPH_SPEC: GenGraphSpec<PlangVertexNames> = {
  name: "Plangs",
  classes: {
    generated: {
      graphBase: "GraphBase",
      vertexBase: "Vertex",
      vertexPrefix: "V",
      vertexSuffix: "Base",
    },
    userProvided: {
      vertexBase: "PlangsVertex",
    },
  },
  vertices: {
    app: { key: "app", desc: "Software application." },
    bundle: { key: "bun", desc: "Bundle of Tools." },
    community: { key: "comm", desc: "Community." },
    learning: { key: "learn", desc: "Learning resources." },
    library: { key: "lib", desc: "Software Libraries." },
    license: { key: "lic", desc: "Software Licenses." },
    paradigm: { key: "para", desc: "Programming Language Paradigms." },
    plang: { key: "pl", desc: "Programming languages." },
    platform: { key: "plat", desc: "Platforms where software runs." },
    post: { key: "post", desc: "Blog Posts." },
    tag: { key: "tag", desc: "Tags." },
    tool: { key: "tool", desc: "Programmer's Tools." },
    typeSystem: { key: "tsys", desc: "Type systems." },
  },
  edges: [
    { from: "app", to: "plang", desc: "Plangs used to write the App." },
    { from: "app", to: "platform", desc: "Platforms supported by the App." },
    { from: "app", to: "tag", desc: "Tags for this App." },
    { from: "bundle", to: "tool", desc: "Tools in a Bundle." },
    { from: "community", to: "plang", desc: "Plangs the Community is interested in." },
    { from: "community", to: "tag", desc: "Tags for this Community." },
    { from: "learning", to: "community", desc: "Communities helpful when using the Learning resource." },
    { from: "learning", to: "plang", desc: "Plangs covered by the Learning resource." },
    { from: "learning", to: "tag", desc: "Tags for this Learning resource." },
    { from: "library", to: "plang", name: "usedOn", desc: "Plangs that can use this Library." },
    { from: "library", to: "plang", name: "libWrittenIn", desc: "Plangs used in the Library implementation." },
    { from: "library", to: "platform", desc: "Platforms supported by this Library." },
    { from: "library", to: "tag", desc: "Tags for this Library." },
    { from: "license", to: "app", desc: "Licenses for an App." },
    { from: "license", to: "library", desc: "Licenses for a Library." },
    { from: "license", to: "plang", desc: "Licenses for a Plang." },
    { from: "license", to: "tool", desc: "Licenses for a Tool." },
    { from: "plang", to: "paradigm", desc: "Paradigms implemented by the Plang." },
    { from: "plang", to: "plang", name: "compilesTo", desc: "Plangs target when transpiling." },
    { from: "plang", to: "plang", name: "dialect", desc: "Plangs is a Dialect of another." },
    { from: "plang", to: "plang", name: "implement", desc: "Plangs is an implementation of another." },
    { from: "plang", to: "plang", name: "influence", desc: "Plangs that influenced this Plang." },
    { from: "plang", to: "plang", name: "WrittenInPlang", desc: "Plangs used to create this Plang." },
    { from: "plang", to: "platform", desc: "Platforms supported by the Plang." },
    { from: "plang", to: "tag", desc: "Tags associated with the Plang." },
    { from: "plang", to: "tool", desc: "Plangs that benefits from this tool." },
    { from: "plang", to: "typeSystem", desc: "Type systems used by the Plang." },
    { from: "post", to: "plang", desc: "Plangs covered by the Post." },
    { from: "tool", to: "plang", name: "toolWrittenIn", desc: "Plangs used to write the tool." },
    { from: "tool", to: "platform", desc: "Platforms supported by the tool." },
    { from: "tool", to: "tag", desc: "Tags associated with the tool." },
  ],
};
