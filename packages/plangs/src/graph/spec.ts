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
    { src: ["plang", "relParadigms", "Paradigms"], dst: ["paradigm", "relPlangs", "Plangs"] },
    { src: ["plang", "relPlatforms", "Platforms"], dst: ["platform", "relPlangs", "Plangs"] },
    { src: ["plang", "relTools", "Tools"], dst: ["tool", "relPlangs", "Plangs"] },
    { src: ["plang", "relTypeSystems", "Type Systems"], dst: ["typeSystem", "relPlangs", "Plangs"] },

    // Plang to Plang
    { src: ["plang", "relCompilesTo", "Transpiling Targets"], dst: ["plang", "relTargetOf", "Source Plangs"] },
    { src: ["plang", "relDialectOf", "Dialect of"], dst: ["plang", "relDialects", "Dialects"] },
    { src: ["plang", "relImplements", "Implements"], dst: ["plang", "relImplementedBy", "Implemented By"] },
    { src: ["plang", "relInfluencedBy", "Influenced By"], dst: ["plang", "relInfluenced", "Influenced"] },
    { src: ["plang", "relWrittenWith", "Written With"], dst: ["plang", "relUsedToWrite", "Used to Write"] },

    // Plang to other
    { src: ["app", "relWrittenWith", "Plangs"], dst: ["plang", "relApps", "Apps"] },
    { src: ["bundle", "relPlangs", "Plangs"], dst: ["plang", "relBundles", "Bundles"] },
    { src: ["library", "relPlangs", "Plangs"], dst: ["plang", "relLibraries", "Libraries"] },
    { src: ["library", "relWrittenWith", "Written With"], dst: ["plang", "relUsedInLibrary", "Used for Libraries"] },
    { src: ["license", "relPlangs", "Plangs"], dst: ["plang", "relLicenses", "Licenses"] },
    { src: ["tool", "relWrittenWith", "Implemented With"], dst: ["plang", "relToolsUsing", "Tool Plang"] },

    // Tags
    { src: ["tag", "relApps", "Apps tagged"], dst: ["app", "relTags", "Tags"] },
    { src: ["tag", "relCommunities", "Communities"], dst: ["community", "relTags", "Tags"] },
    { src: ["tag", "relLearning", "Learning Resources"], dst: ["learning", "relTags", "Tags"] },
    { src: ["tag", "relLibraries", "Libraries"], dst: ["library", "relTags", "Tags"] },
    { src: ["tag", "relPlangs", "Plangs"], dst: ["plang", "relTags", "Tags"] },
    { src: ["tag", "relTools", "Tools"], dst: ["tool", "relTags", "Tags"] },

    // News: Link to a blog post that references a vertex.
    { src: ["post", "relApps", "Apps"], dst: ["app", "relPosts", "Posts"] },
    { src: ["post", "relCommunities", "Communities"], dst: ["community", "relPosts", "Posts"] },
    { src: ["post", "relLearning", "Learning Resources"], dst: ["learning", "relPosts", "Posts"] },
    { src: ["post", "relLibraries", "Libraries"], dst: ["library", "relPosts", "Posts"] },
    { src: ["post", "relPlangs", "Plangs"], dst: ["plang", "relPosts", "Posts"] },
    { src: ["post", "relTools", "Tools"], dst: ["tool", "relPosts", "Posts"] },

    // Community
    { src: ["community", "relPlangs", "Plangs"], dst: ["plang", "relCommunities", "Communities"] },
    { src: ["community", "relLibraries", "Libraries"], dst: ["library", "relCommunities", "Communities"] },
    { src: ["community", "relApps", "Apps"], dst: ["app", "relCommunities", "Communities"] },
    { src: ["community", "relTools", "Tools"], dst: ["tool", "relCommunities", "Communities"] },

    // Learning
    { src: ["learning", "relCommunities", "Communities"], dst: ["community", "relLearning", "Learning Resources"] },
    { src: ["learning", "relPlangs", "Plangs"], dst: ["plang", "relLearning", "Learning Resources"] },
    { src: ["learning", "relLibraries", "Libraries"], dst: ["library", "relLearning", "Learning Resources"] },
    { src: ["learning", "relApps", "Apps"], dst: ["app", "relLearning", "Learning Resources"] },
    { src: ["learning", "relTools", "Tools"], dst: ["tool", "relLearning", "Learning Resources"] },

    // Licenses
    { src: ["license", "relApps", "Apps"], dst: ["app", "relLicenses", "Licenses"] },
    { src: ["license", "relLibraries", "Libraries"], dst: ["library", "relLicenses", "Licenses"] },
    { src: ["license", "relTools", "Tools"], dst: ["tool", "relLicenses", "Licenses"] },

    // Rest
    { src: ["app", "relPlatforms", "Platforms"], dst: ["platform", "relApps", "Apps"] },
    { src: ["bundle", "relTools", "Tools"], dst: ["tool", "relBundles", "Bundles"] },
    { src: ["library", "relPlatforms", "Platforms"], dst: ["platform", "relLibraries", "Libraries"] },
    { src: ["tool", "relPlatforms", "Platforms"], dst: ["platform", "relTools", "Tools"] },
  ],
};
