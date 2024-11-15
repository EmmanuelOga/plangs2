import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+d", {
      name: "D",
      description:
        "D, also known as dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is now a very different language. As it has developed, it has drawn inspiration from other high-level programming languages. Notably, it has been influenced by Java, Python, Ruby, C#, and Eiffel.",
      keywords: ["d language", "d programming", "dlang"],
      extensions: [".d"],
      year: 2001,
      releases: [{ version: "2.109.1", name: "Stable Release", date: "2024-07-01" }],
      stackovTags: ["d"],
      githubName: "D",
      languishRanking: 147,
      githubLangId: "80",
      githubColor: "#ba595e",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "D_(programming_language)",
      extRedditPath: "d_language",
      extHomeURL: "http://dlang.org/",
    })
    .addInfluencedBy(["pl+ada", "pl+basic", "pl+c", "pl+c++", "pl+c-sharp", "pl+eiffel", "pl+python", "pl+ruby"])
    .addLicenses(["license+boost"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+metaprogramming", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+cli",
      "tag+compiler",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+numeric",
      "tag+sci",
      "tag+ui",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
