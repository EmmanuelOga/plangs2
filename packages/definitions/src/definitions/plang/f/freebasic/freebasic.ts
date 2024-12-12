import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+freebasic", {
      name: "FreeBASIC",
      description:
        "FreeBASIC is a free and open-source BASIC compiler that runs on multiple platforms including Windows, Linux, and DOS. It is designed to be syntax-compatible with QuickBASIC while expanding the capabilities with modern features such as object-oriented and metaprogramming capabilities.",
      keywords: ["basic", "freebasic"],
      extensions: [".bas", ".bi"],
      releases: [{ version: "1.10.1", name: "", date: "2023-12-25" }],
      stackovTags: ["freebasic"],
      githubName: "FreeBasic",
      githubLangId: "472896659",
      githubColor: "#141AC9",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "FreeBASIC",
      extHomeURL: "https://www.freebasic.net/",
      created: "2004",
      isTranspiler: false,
      shortDesc: "FreeBASIC is an open-source BASIC compiler inspired by QuickBASIC, supporting object-oriented programming.",
      extGithubPath: "freebasic/fbc",
      githubStars: 914,
    })
    .relDialectOf.add("pl+basic")
    .relImplements.add("pl+basic")
    .relInfluencedBy.add("pl+basic", "pl+c")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add("para+compiled", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+bsd", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+interpreters", "tag+viz")
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
