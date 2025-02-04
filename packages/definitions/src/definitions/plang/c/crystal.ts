import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+crystal", {
      name: "Crystal",
      description:
        "Statically-typed, object-oriented programming language with syntax inspired by Ruby, aimed at providing high performance through compilation to native code. It features type inference and compiles to fast executable binaries, primarily for system and web backend applications.",
      shortDesc:
        "Compiled, statically-typed language with Ruby-like syntax and type inference.",
      created: "2014",
      extensions: [".cr"],
      extGithubPath: "crystal-lang/crystal",
      extHomeURL: "https://crystal-lang.org/",
      extRedditPath: "crystal_programming",
      extWikipediaPath: "Crystal_(programming_language)",
      githubColor: "#000100",
      githubLangId: "72",
      githubName: "Crystal",
      githubPopular: false,
      githubStars: 19500,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["crystal", "ruby-syntax"],
      languishRanking: 155,
      releases: [
        { version: "1.14.0", name: "Crystal 1.14.0", date: "2024-10-09" },
      ],
      stackovTags: ["crystal-lang"],
    })
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+general-purpose",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+arm",
      "plat+bsd",
      "plat+linux",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+better-c",
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
    )
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+inferred",
      "tsys+nominal",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+crystal");
}
