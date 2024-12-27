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
  | "author"
  | "bundle"
  | "community"
  | "learning"
  | "library"
  | "license"
  | "paradigm"
  | "plang"
  | "platform"
  | "post"
  | "subsystem"
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
    author: { key: "author", desc: "Author" },
    bundle: { key: "bun", desc: "Bundle of Tools" },
    community: { key: "comm", desc: "Community" },
    learning: { key: "learn", desc: "Learning Resource" },
    library: { key: "lib", desc: "Software Library" },
    license: { key: "lic", desc: "Software License" },
    paradigm: { key: "para", desc: "Programming Language Paradigm" },
    plang: { key: "pl", desc: "Programming Language" },
    platform: { key: "plat", desc: "Platform where Software runs" },
    post: { key: "post", desc: "Blog Post" },
    subsystem: { key: "sys", desc: "Subsystem" },
    tag: { key: "tag", desc: "Tag" },
    tool: { key: "tool", desc: "Programming Tool" },
    typeSystem: { key: "tsys", desc: "Type System" },
  },

  edges: [
    // Plang to others
    { src: ["plang", "relParadigms", "Paradigms"], dst: ["paradigm", "relPlangs", "Plangs"], pref: "src" },
    { src: ["plang", "relPlatforms", "Platforms"], dst: ["platform", "relPlangs", "Plangs"], pref: "src" },
    { src: ["plang", "relTools", "Tools"], dst: ["tool", "relPlangs", "Plangs"], pref: "dst" },
    { src: ["plang", "relTypeSystems", "Type Systems"], dst: ["typeSystem", "relPlangs", "Plangs"], pref: "src" },

    // Plang to Plang
    { src: ["plang", "relCompilesTo", "Compiles To"], dst: ["plang", "relTargetOf", "Target Of"], pref: "src" },
    { src: ["plang", "relDialectOf", "Dialect of"], dst: ["plang", "relDialects", "Dialects"], pref: "src" },
    { src: ["plang", "relImplements", "Implements"], dst: ["plang", "relImplementedBy", "Implemented By"], pref: "src" },
    { src: ["plang", "relInfluencedBy", "Influenced By"], dst: ["plang", "relInfluenced", "Influenced"], pref: "src" },
    { src: ["plang", "relWrittenWith", "Written With"], dst: ["plang", "relUsedToWrite", "Used to Write"], pref: "src" },

    // Other to Plang
    { src: ["app", "relWrittenWith", "Plangs"], dst: ["plang", "relApps", "Apps"], pref: "src" },
    { src: ["bundle", "relPlangs", "Plangs"], dst: ["plang", "relBundles", "Bundles"], pref: "none" },
    { src: ["library", "relPlangs", "Plangs"], dst: ["plang", "relLibraries", "Libraries"], pref: "src" },
    { src: ["library", "relWrittenWith", "Written With"], dst: ["plang", "relUsedInLibrary", "Used for Libraries"], pref: "src" },
    { src: ["license", "relPlangs", "Plangs"], dst: ["plang", "relLicenses", "Licenses"], pref: "dst" },
    { src: ["subsystem", "relWrittenWith", "Plangs"], dst: ["plang", "relSubsystems", "Subsystems"], pref: "src" },
    { src: ["tool", "relWrittenWith", "Implemented With"], dst: ["plang", "relToolsUsing", "Tool Plang"], pref: "src" },

    // Tags
    { src: ["tag", "relApps", "Apps tagged"], dst: ["app", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relCommunities", "Communities"], dst: ["community", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relLearning", "Learning Resources"], dst: ["learning", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relLibraries", "Libraries"], dst: ["library", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relPlangs", "Plangs"], dst: ["plang", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relSubsystems", "Subsystems"], dst: ["subsystem", "relTags", "Tags"], pref: "dst" },
    { src: ["tag", "relTools", "Tools"], dst: ["tool", "relTags", "Tags"], pref: "dst" },

    // News: Link to a blog post that references a vertex.
    { src: ["post", "relApps", "Apps"], dst: ["app", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relCommunities", "Communities"], dst: ["community", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relLearning", "Learning Resources"], dst: ["learning", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relLibraries", "Libraries"], dst: ["library", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relPlangs", "Plangs"], dst: ["plang", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relSubsystems", "Subsystems"], dst: ["subsystem", "relPosts", "Posts"], pref: "none" },
    { src: ["post", "relTools", "Tools"], dst: ["tool", "relPosts", "Posts"], pref: "none" },

    // Community
    { src: ["community", "relApps", "Apps"], dst: ["app", "relCommunities", "Communities"], pref: "src" },
    { src: ["community", "relLibraries", "Libraries"], dst: ["library", "relCommunities", "Communities"], pref: "src" },
    { src: ["community", "relPlangs", "Plangs"], dst: ["plang", "relCommunities", "Communities"], pref: "src" },
    { src: ["community", "relSubsystems", "Subsystems"], dst: ["subsystem", "relCommunities", "Communities"], pref: "src" },
    { src: ["community", "relTools", "Tools"], dst: ["tool", "relCommunities", "Communities"], pref: "src" },

    // Learning
    { src: ["learning", "relApps", "Apps"], dst: ["app", "relLearning", "Learning Resources"], pref: "src" },
    { src: ["learning", "relCommunities", "Communities"], dst: ["community", "relLearning", "Learning Resources"], pref: "src" },
    { src: ["learning", "relLibraries", "Libraries"], dst: ["library", "relLearning", "Learning Resources"], pref: "src" },
    { src: ["learning", "relPlangs", "Plangs"], dst: ["plang", "relLearning", "Learning Resources"], pref: "src" },
    { src: ["learning", "relSubsystems", "Subsystems"], dst: ["subsystem", "relLearning", "Learning Resources"], pref: "src" },
    { src: ["learning", "relTools", "Tools"], dst: ["tool", "relLearning", "Learning Resources"], pref: "src" },

    // Licenses
    { src: ["license", "relApps", "Apps"], dst: ["app", "relLicenses", "Licenses"], pref: "dst" },
    { src: ["license", "relLibraries", "Libraries"], dst: ["library", "relLicenses", "Licenses"], pref: "dst" },
    { src: ["license", "relSubsystems", "Subsystems"], dst: ["subsystem", "relLicenses", "Licenses"], pref: "dst" },
    { src: ["license", "relTools", "Tools"], dst: ["tool", "relLicenses", "Licenses"], pref: "dst" },

    // Rest
    { src: ["app", "relPlatforms", "Platforms"], dst: ["platform", "relApps", "Apps"], pref: "src" },
    { src: ["bundle", "relTools", "Tools"], dst: ["tool", "relBundles", "Bundles"], pref: "src" },
    { src: ["library", "relPlatforms", "Platforms"], dst: ["platform", "relLibraries", "Libraries"], pref: "src" },
    { src: ["subsystem", "relPlatforms", "Platforms"], dst: ["platform", "relSubsystems", "Subsystems"], pref: "src" },
    { src: ["tool", "relPlatforms", "Platforms"], dst: ["platform", "relTools", "Tools"], pref: "src" },
    { src: ["post", "relAuthors", "Authors"], dst: ["author", "relPosts", "Posts"], pref: "none" },
    { src: ["author", "relCommunites", "Communites"], dst: ["community", "relMembers", "Members"], pref: "src" },
  ],
};
