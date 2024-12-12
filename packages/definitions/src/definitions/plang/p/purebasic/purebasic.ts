import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+purebasic", {
      name: "PureBasic",
      description:
        "PureBasic is a modern BASIC programming language designed for both beginners and experts. It compiles to native code for Windows, Linux, macOS, and Raspberry Pi OS, producing optimized 32-bit and 64-bit executables without external dependencies. Developed by Fantaisie Software, PureBasic offers a simple syntax with advanced features like pointers, structures, and inline assembly.",
      keywords: ["purebasic"],
      extensions: [".pb", ".pbf", ".pbi", ".pbp"],
      githubName: "PureBasic",
      languishRanking: 262,
      githubLangId: "301",
      githubColor: "#5a6986",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "PureBasic",
      extRedditPath: "purebasic",
      extHomeURL: "http://www.purebasic.com/",
      created: "1998",
      isTranspiler: false,
      shortDesc: "PureBasic is a modern BASIC programming language that compiles to native code across multiple platforms.",
      githubStars: 125,
      extGithubPath: "fantaisie-software/purebasic",
    })
    .relDialectOf.add("pl+basic")
    .relImplements.add("pl+basic")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+imperative", "para+procedural", "para+structured")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+raspberry", "plat+windows")
    .relTags.add("tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+games", "tag+gui", "tag+interpreters");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
