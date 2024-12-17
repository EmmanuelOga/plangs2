import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ada", {
      name: "Ada",
      description:
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, inspired by Pascal. It features built-in support for design by contract, strong typing, concurrency, synchronous message passing, protected objects, and non-determinism. Ada is primarily used in systems where safety and reliability are crucial, such as in avionics and other mission-critical systems. It is standardized internationally by ISO/IEC.",
      shortDesc:
        "Ada is a high-level, structured, and object-oriented language with strong typing, used for reliability in mission-critical systems.",
      created: "1980",
      extensions: [".adb", ".ads"],
      extHomeURL: "https://www.adaic.org/",
      extRedditPath: "ada",
      extWikipediaPath: "Ada_(programming_language)",
      githubColor: "#02f88c",
      githubLangId: "11",
      githubName: "Ada",
      githubPopular: false,
      githubStars: 0,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["ada", "concurrency", "design by contract", "high-level", "object-oriented", "systems programming"],
      languishRanking: 153,
      releases: [{ version: "ISO/IEC 8652:2023", name: "Ada 2022", date: "2023-05-01" }],
      stackovTags: ["ada"],
    })
    .relDialectOf.add("pl+pascal")
    .relInfluencedBy.add("pl+c++", "pl+eiffel", "pl+pascal")
    .relParadigms.add(
      "para+array",
      "para+aspect",
      "para+concurrent",
      "para+distributed",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+structured",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+embedded",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+testing",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
