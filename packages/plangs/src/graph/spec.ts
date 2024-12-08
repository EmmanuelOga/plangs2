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
    library: { key: "lib", desc: "Software Library" },
    license: { key: "lic", desc: "Software License" },
    paradigm: { key: "para", desc: "Programming Language Paradigm" },
    plang: { key: "pl", desc: "Programming Language" },
    platform: { key: "plat", desc: "Platform where Software runs" },
    post: { key: "post", desc: "Blog Post" },
    tag: { key: "tag", desc: "Tag" },
    tool: { key: "tool", desc: "Programming Tool" },
    typeSystem: { key: "tsys", desc: "Type System" },
  },

  edges: [
    // Plang to others
    { src: ["plang", "relParadigms", "Paradigms implemented"], dst: ["paradigm", "relPlangs", "Plangs implementing this"] },
    { src: ["plang", "relPlatforms", "Platforms supported"], dst: ["platform", "relPlangs", "Plangs supporting this"] },
    { src: ["plang", "relTools", "Tools for this"], dst: ["tool", "relPlangs", "Plangs supported"] },
    { src: ["plang", "relTypeSystems", "Type Systems implemented"], dst: ["typeSystem", "relPlangs", "Plangs implementing this"] },

    // Plang to Plang
    { src: ["plang", "relCompilesTo", "Transpiling targets"], dst: ["plang", "relTargetOf", "Plangs compiling to this"] },
    { src: ["plang", "relDialectOf", "Plangs this is a Dialect of"], dst: ["plang", "relDialects", "Dialects"] },
    { src: ["plang", "relImplements", "Plangs this Implements"], dst: ["plang", "relImplementedBy", "Plangs implementing this"] },
    { src: ["plang", "relInfluencedBy", "Plangs that influenced this"], dst: ["plang", "relInfluenced", "Plangs this influenced"] },
    { src: ["plang", "relWrittenWith", "Plangs used to implement this"], dst: ["plang", "relUsedToWrite", "Plangs implemented with this"] },

    // Plang to other
    { src: ["app", "relWrittenWith", "Plangs used to implement this"], dst: ["plang", "relApps", "Apps implemented with this"] },
    { src: ["bundle", "relPlangs", "Plangs this Bundle is for"], dst: ["plang", "relBundles", "Bundles of Tools for this"] },
    { src: ["library", "relPlangs", "Plangs supported"], dst: ["plang", "relLibraries", "Software Libraries"] },
    { src: ["library", "relWrittenWith", "Plangs used"], dst: ["plang", "relUsedInLibrary", "Libraries made with this"] },
    { src: ["license", "relPlangs", "Plangs using this"], dst: ["plang", "relLicenses", "Licenses"] },
    { src: ["tool", "relWrittenWith", "Plangs used to implement this"], dst: ["plang", "relToolsUsing", "Tools implemented with this"] },

    // Tags
    { src: ["tag", "relApps", "Apps tagged"], dst: ["app", "relTags", "Tags"] },
    { src: ["tag", "relCommunities", "Communities tagged"], dst: ["community", "relTags", "Tags"] },
    { src: ["tag", "relLearning", "Learning resources tagged"], dst: ["learning", "relTags", "Tags"] },
    { src: ["tag", "relLibraries", "Libraries tagged"], dst: ["library", "relTags", "Tags"] },
    { src: ["tag", "relPlangs", "Plangs tagged"], dst: ["plang", "relTags", "Tags"] },
    { src: ["tag", "relTools", "Tools tagged"], dst: ["tool", "relTags", "Tags"] },

    // News: Link to a blog post that references a vertex.
    { src: ["post", "relApps", "Apps covered in a Post"], dst: ["app", "relPosts", "Posts talking about this"] },
    { src: ["post", "relCommunities", "Communities covered in a Post"], dst: ["community", "relPosts", "Posts talking about this"] },
    { src: ["post", "relLearning", "Learning Resources covered in a Post"], dst: ["learning", "relPosts", "Posts talking about this"] },
    { src: ["post", "relLibraries", "Libraries covered in a Post"], dst: ["library", "relPosts", "Posts talking about this"] },
    { src: ["post", "relPlangs", "Plangs covered in a Post"], dst: ["plang", "relPosts", "Posts talking about this"] },
    { src: ["post", "relTools", "Tools covered in a Post"], dst: ["tool", "relPosts", "Posts talking about this"] },

    // Community
    { src: ["community", "relPlangs", "Plangs supported"], dst: ["plang", "relCommunities", "Communities suporting this"] },
    { src: ["community", "relLibraries", "Libraries supported"], dst: ["library", "relCommunities", "Communities suporting this"] },
    { src: ["community", "relApps", "Apps supported"], dst: ["app", "relCommunities", "Communities suporting this"] },
    { src: ["community", "relTools", "Tools supported"], dst: ["tool", "relCommunities", "Communities suporting this"] },

    // Learning
    { src: ["learning", "relCommunities", "Communities supporting this"], dst: ["community", "relLearning", "Learning resources"] },
    { src: ["learning", "relPlangs", "Plangs covered"], dst: ["plang", "relLearning", "Learning resources"] },
    { src: ["learning", "relLibraries", "Libraries supported"], dst: ["library", "relLearning", "Learning resources"] },
    { src: ["learning", "relApps", "Apps supported"], dst: ["app", "relLearning", "Learning resources"] },
    { src: ["learning", "relTools", "Tools supported"], dst: ["tool", "relLearning", "Learning resources"] },

    // Licenses
    { src: ["license", "relApps", "Apps using this"], dst: ["app", "relLicenses", "Licenses"] },
    { src: ["license", "relLibraries", "Libraries using this"], dst: ["library", "relLicenses", "Licenses"] },
    { src: ["license", "relTools", "Tools using this"], dst: ["tool", "relLicenses", "Licenses"] },

    // Rest
    { src: ["app", "relPlatforms", "Platforms supported"], dst: ["platform", "relApps", "Apps supporting this"] },
    { src: ["bundle", "relTools", "Tools in this"], dst: ["tool", "relBundles", "Bundles including this"] },
    { src: ["library", "relPlatforms", "Platforms supported"], dst: ["platform", "relLibraries", "Libraries supporting this"] },
    { src: ["tool", "relPlatforms", "Platforms supported"], dst: ["platform", "relTools", "Tools supporting this"] },
  ],
};
