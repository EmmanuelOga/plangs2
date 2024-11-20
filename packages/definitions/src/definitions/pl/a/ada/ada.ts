import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ada", {
      name: "Ada",
      description:
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, inspired by Pascal. It features built-in support for design by contract, strong typing, concurrency, synchronous message passing, protected objects, and non-determinism. Ada is primarily used in systems where safety and reliability are crucial, such as in avionics and other mission-critical systems. It is standardized internationally by ISO/IEC.",
      year: 1980,
      extensions: [".adb", ".ads"],
      keywords: ["ada", "concurrency", "design by contract", "high-level", "object-oriented", "systems programming"],
      releases: [{ version: "ISO/IEC 8652:2023", name: "Ada 2022", date: "2023-05-01" }],
      stackovTags: ["ada"],
      githubName: "Ada",
      languishRanking: 153,
      githubLangId: "11",
      githubColor: "#02f88c",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Ada_(programming_language)",
      extRedditPath: "ada",
      extHomeURL: "https://www.adaic.org/",
    })
    .addDialectOf(["pl+pascal"])
    .addInfluencedBy(["pl+c++", "pl+eiffel", "pl+pascal"])
    .addParadigms([
      "paradigm+array",
      "paradigm+aspect",
      "paradigm+concurrent",
      "paradigm+distributed",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+embedded",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+testing",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
