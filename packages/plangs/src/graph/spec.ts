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
    app: { key: "app", desc: "Software Application" },
    bundle: { key: "bun", desc: "Bundle of Tools" },
    community: { key: "comm", desc: "Community" },
    learning: { key: "learn", desc: "Learning Resource" },
    library: { key: "lib", desc: "Software Library." },
    license: { key: "lic", desc: "Software License" },
    paradigm: { key: "para", desc: "Programming Language Paradigm" },
    plang: { key: "pl", desc: "Programming Language" },
    platform: { key: "plat", desc: "Platform where software runs" },
    post: { key: "post", desc: "Blog Post" },
    tag: { key: "tag", desc: "Tag" },
    tool: { key: "tool", desc: "Programming Tool" },
    typeSystem: { key: "tsys", desc: "Type System" },
  },

  edges: [
    // Plangs
    { src: ["plang", "relParadigms", "Paradigms implemented."], dst: ["paradigm", "relPlangs", "Plangs that support this."] },
    { src: ["plang", "relCompilesTo", "Transpiling targets."], dst: ["plang", "relTargetOf", "Plangs that compile to this."] },
    { src: ["plang", "relDialectOf", "Plangs this is a Dialect of."], dst: ["plang", "relDialects", "Dialects of this."] },
    { src: ["plang", "relImplements", "Plangs this Implements."], dst: ["plang", "relImplementedBy", "Plangs that implement this."] },
    { src: ["plang", "relInfluencedBy", "Plangs that influenced this."], dst: ["plang", "relInfluenced", "Plangs that this influenced."] },
    { src: ["plang", "relWrittenWith", "Plangs used to write this."], dst: ["plang", "relUsedToWrite", "Plangs written with this."] },
    { src: ["plang", "relPlatforms", "Platforms that this supports."], dst: ["platform", "relPlangs", "Plangs that support this."] },
    { src: ["plang", "relTools", "Tools for this."], dst: ["tool", "relPlangs", "Plangs where this is useful."] },
    { src: ["plang", "relTypeSystems", "Type Systems implemented."], dst: ["typeSystem", "relPlangs", "Plangs that support this."] },

    // Licenses
    { src: ["license", "relApps", "Apps using this."], dst: ["app", "relLicenses", "Licenses."] },
    { src: ["license", "relLibraries", "Libraries using this."], dst: ["library", "relLicenses", "Licenses."] },
    { src: ["license", "relPlangs", "Plangs using this."], dst: ["plang", "relLicenses", "Licenses."] },
    { src: ["license", "relTools", "Tools using this."], dst: ["tool", "relLicenses", "Licenses."] },

    // Tags
    { src: ["tag", "relApps", "Apps tagged."], dst: ["app", "relTags", "Tags."] },
    { src: ["tag", "relCommunities", "Communities tagged."], dst: ["community", "relTags", "Tags."] },
    { src: ["tag", "relLearning", "Learning tagged."], dst: ["learning", "relTags", "Tags."] },
    { src: ["tag", "relLibraries", "Libraries tagged."], dst: ["library", "relTags", "Tags."] },
    { src: ["tag", "relPlangs", "Plangs tagged."], dst: ["plang", "relTags", "Tags."] },
    { src: ["tag", "relTools", "Tools tagged."], dst: ["tool", "relTags", "Tags."] },

    // Rest
    { src: ["app", "relPlatforms", "Platforms supported."], dst: ["platform", "relApps", "Apps that support this."] },
    { src: ["app", "relWrittenWith", "Plangs used to make this."], dst: ["plang", "relApps", "Apps written with this."] },
    { src: ["bundle", "relTools", "Tools in this."], dst: ["tool", "relBundles", "Bundles that include this."] },
    { src: ["community", "relPlangs", "Plangs supported."], dst: ["plang", "relCommunities", "Communities that suports this."] },
    { src: ["learning", "relCommunities", "Communities that support this."], dst: ["community", "relLearning", "Learning materials."] },
    { src: ["learning", "relPlangs", "Plangs covered."], dst: ["plang", "relLearning", "Learning resources."] },
    { src: ["library", "relPlatforms", "Platforms supported."], dst: ["platform", "relLibraries", "Libraries that support this."] },
    { src: ["library", "relPlangs", "Plangs supported."], dst: ["plang", "relLibraries", "Software Libraries."] },
    { src: ["library", "relWrittenWith", "Plangs used."], dst: ["plang", "relUsedInLibrary", "Libraries made with this."] },
    { src: ["post", "relPlangs", "Plangs covered."], dst: ["plang", "relPosts", "Posts talking about this."] },
    { src: ["tool", "relPlatforms", "Platforms supported."], dst: ["platform", "relTools", "Tools that support this."] },
    { src: ["tool", "relWrittenWith", "Plangs used to implement this."], dst: ["plang", "relToolsUsing", "Tools implemented with this."] },
  ],
};
