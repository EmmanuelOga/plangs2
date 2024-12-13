import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flix", {
      name: "Flix",
      description:
        "Flix is a versatile programming language blending functional, imperative, and logic paradigms, developed at Aarhus University with community contributions. It stands out for its type and effect system alongside support for first-class Datalog constraints.",
      keywords: ["flix"],
      extensions: [".flix"],
      releases: [{ version: "0.54.0", date: "2024-09-30" }],
      extWikipediaPath: "Flix_(programming_language)",
      extHomeURL: "https://flix.dev/",
      created: "2015",
      isTranspiler: false,
      shortDesc: "Flix is a functional, imperative, and logic language focusing on type and effect systems.",
      githubStars: 2200,
      extGithubPath: "flix/flix",
    })
    .relInfluencedBy.add("pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+imperative", "para+logic", "para+multi")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
