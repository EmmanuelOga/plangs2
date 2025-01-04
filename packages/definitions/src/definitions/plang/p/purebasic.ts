import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+purebasic", {
      name: "PureBasic",
      description:
        "Modern BASIC programming language designed for both beginners and experts. It compiles to native code for Windows, Linux, macOS, and Raspberry Pi OS, producing optimized 32-bit and 64-bit executables without external dependencies. Developed by Fantaisie Software, PureBasic offers a simple syntax with advanced features like pointers, structures, and inline assembly.",
      shortDesc:
        "Modern BASIC programming language that compiles to native code across multiple platforms.",
      created: "1998",
      extensions: [".pb", ".pbf", ".pbi", ".pbp"],
      extGithubPath: "fantaisie-software/purebasic",
      extHomeURL: "http://www.purebasic.com/",
      extRedditPath: "purebasic",
      extWikipediaPath: "PureBasic",
      githubColor: "#5a6986",
      githubLangId: "301",
      githubName: "PureBasic",
      githubPopular: false,
      githubStars: 125,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["purebasic"],
      languishRanking: 262,
    })
    .relDialectOf.add("pl+basic")
    .relImplements.add("pl+basic")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+imperative", "para+procedural", "para+structured")
    .relPlatforms.add(
      "plat+apple",
      "plat+linux",
      "plat+raspberry",
      "plat+windows",
    )
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+editor",
      "tag+games",
      "tag+gui",
      "tag+interpreters",
    );
}
