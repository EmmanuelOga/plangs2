import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+crystal", {
      name: "Crystal",
      description:
        "Crystal is a statically-typed, object-oriented programming language with syntax inspired by Ruby, aimed at providing high performance through compilation to native code. It features type inference and compiles to fast executable binaries, primarily for system and web backend applications.",
      keywords: ["crystal", "ruby-syntax"],
      extensions: [".cr"],
      releases: [{ version: "1.14.0", name: "Crystal 1.14.0", date: "2024-10-09" }],
      stackovTags: ["crystal-lang"],
      githubName: "Crystal",
      languishRanking: 144,
      githubLangId: "72",
      githubColor: "#000100",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Crystal_(programming_language)",
      extRedditPath: "crystal_programming",
      extHomeURL: "https://crystal-lang.org/",
      created: "2014",
      isTranspiler: false,
      shortDesc: "Crystal is a compiled, statically-typed language with Ruby-like syntax and type inference.",
      githubStars: 19500,
      extGithubPath: "crystal-lang/crystal",
      ghRepoCreated: "2012-08-13",
    })
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+compiled", "para+concurrent", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+arm", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+crystal");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
