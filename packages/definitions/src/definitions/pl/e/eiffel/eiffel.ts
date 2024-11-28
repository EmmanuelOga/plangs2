import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+eiffel", {
      name: "Eiffel",
      description:
        "Eiffel is an object-oriented programming language designed by Bertrand Meyer. It emphasizes software reliability through design by contract, and first appeared in 1986. The language supports multiple inheritance, genericity, polymorphism, encapsulation, and other advanced software engineering concepts. Eiffel is particularly noted for its strong typing and explicit contract design, including preconditions, postconditions, and invariants.",
      keywords: ["bertrand meyer", "design by contract", "eiffel", "object-oriented"],
      extensions: [".e"],
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
      created: "1986",
    })
    .relInfluencedBy.add("pl+ada")
    .relLicenses.add("lic+dual", "lic+epl")
    .relParadigms.add("para+compiled", "para+concurrent", "para+contracts", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
