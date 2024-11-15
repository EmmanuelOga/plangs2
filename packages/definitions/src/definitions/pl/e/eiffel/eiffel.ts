import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+eiffel", {
      name: "Eiffel",
      description:
        "Eiffel is an object-oriented programming language designed by Bertrand Meyer. It emphasizes software reliability through design by contract, and first appeared in 1986. The language supports multiple inheritance, genericity, polymorphism, encapsulation, and other advanced software engineering concepts. Eiffel is particularly noted for its strong typing and explicit contract design, including preconditions, postconditions, and invariants.",
      keywords: ["bertrand meyer", "design by contract", "eiffel", "object-oriented"],
      extensions: [".e"],
      year: 1986,
      stackovTags: ["eiffel"],
      githubName: "Eiffel",
      languishRanking: 402,
      githubLangId: "99",
      githubColor: "#4d6977",
      githubType: "programming",
      releases: [{ version: "24.05", name: "EiffelStudio", date: "2024-06-14" }],
      githubPopular: false,
      extWikipediaPath: "Eiffel_(programming_language)",
      extHomeURL: "http://eiffel.org/",
    })
    .addInfluencedBy(["pl+ada", "pl+simula"])
    .addLicenses(["license+dual", "license+epl"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+contracts", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}