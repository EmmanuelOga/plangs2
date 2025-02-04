import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+freebasic", {
      name: "FreeBASIC",
      description:
        "BASIC compiler that runs on multiple platforms including Windows, Linux, and DOS. It is designed to be syntax-compatible with QuickBASIC while expanding the capabilities with modern features such as object-oriented and metaprogramming capabilities.",
      shortDesc:
        "BASIC compiler inspired by QuickBASIC, supporting object-oriented programming.",
      created: "2004",
      extensions: [".bas", ".bi"],
      extGithubPath: "freebasic/fbc",
      extHomeURL: "https://www.freebasic.net/",
      extWikipediaPath: "FreeBASIC",
      githubColor: "#141AC9",
      githubLangId: "472896659",
      githubName: "FreeBasic",
      githubPopular: false,
      githubStars: 914,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["basic", "freebasic"],
      languishRanking: 400,
      releases: [{ version: "1.10.1", name: "", date: "2023-12-25" }],
      stackovTags: ["freebasic"],
    })
    .relDialectOf.add("pl+basic")
    .relImplements.add("pl+basic")
    .relInfluencedBy.add("pl+basic", "pl+c")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add(
      "para+compiled",
      "para+general-purpose",
      "para+multi",
      "para+oop",
      "para+procedural",
    )
    .relPlatforms.add("plat+bsd", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+interpreters", "tag+viz")
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
