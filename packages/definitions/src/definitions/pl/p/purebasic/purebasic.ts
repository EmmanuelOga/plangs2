import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+purebasic", {
      name: "PureBasic",
      description:
        "PureBasic is a modern BASIC programming language designed for both beginners and experts. It compiles to native code for Windows, Linux, macOS, and Raspberry Pi OS, producing optimized 32-bit and 64-bit executables without external dependencies. Developed by Fantaisie Software, PureBasic offers a simple syntax with advanced features like pointers, structures, and inline assembly.",
      keywords: ["purebasic"],
      extensions: [".pb", ".pbf", ".pbi", ".pbp"],
      year: 1998,
      isMainstream: false,
      releases: [
        { version: "6.11 LTS", name: "", date: "2024-06-05" },
        { version: "6.11", date: "2024-01-01" },
      ],
      githubName: "PureBasic",
      languishRanking: 262,
      githubLangId: "301",
      githubColor: "#5a6986",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "PureBasic",
      extRedditPath: "purebasic",
      extHomeURL: "http://www.purebasic.com/",
    })
    .addDialectOf(["pl+basic"])
    .addImplements(["pl+basic"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+games", "tag+interpreter", "tag+ui"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
