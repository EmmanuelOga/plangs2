import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+eiffel", {
      name: "Eiffel",
      description:
        "Object-oriented programming language designed by Bertrand Meyer, which emphasizes software reliability through design by contract. It supports multiple inheritance, genericity, polymorphism, and other advanced software engineering concepts.",
      shortDesc:
        "Object-oriented programming language emphasizing design by contract.",
      created: "1986",
      extensions: [".e"],
      extHomeURL: "http://eiffel.org/",
      extWikipediaPath: "Eiffel_(programming_language)",
      githubColor: "#4d6977",
      githubLangId: "99",
      githubName: "Eiffel",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "bertrand meyer",
        "design by contract",
        "eiffel",
        "object-oriented",
      ],
      languishRanking: 402,
      releases: [
        { version: "24.05", name: "EiffelStudio", date: "2024-06-14" },
      ],
      stackovTags: ["eiffel"],
    })
    .relInfluencedBy.add("pl+ada")
    .relLicenses.add("lic+dual", "lic+epl")
    .relParadigms.add(
      "para+aspect",
      "para+compiled",
      "para+concurrent",
      "para+contracts",
      "para+general-purpose",
      "para+oop",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+windows",
    )
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
    .relTypeSystems.add("tsys+object", "tsys+static", "tsys+strong");
}
