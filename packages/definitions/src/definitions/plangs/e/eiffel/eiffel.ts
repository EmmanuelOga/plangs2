import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+eiffel", {
      name: "Eiffel",
      description:
        "Eiffel is an object-oriented programming language designed by Bertrand Meyer, known for its emphasis on software reliability and design by contract method. Initially developed in 1985, Eiffel aimed to improve commercial software reliability, becoming available in 1986 and achieving ISO standardization in 2005.",
      keywords: ["eiffel"],
      websites: [
        { title: "eiffel.org", href: "http://eiffel.org/", kind: "homepage" },
        { title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".e"],
      year: 1986,
      isTranspiler: false,
      isMainstream: false,
      stackovTags: ["eiffel"],
      githubName: "Eiffel",
      languishRanking: 402,
      githubLangId: "99",
      githubColor: "#4d6977",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+ada", "pl+simula"])
    .addLicenses(["license+epl"])
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
