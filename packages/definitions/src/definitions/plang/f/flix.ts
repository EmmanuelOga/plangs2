import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flix", {
      name: "Flix",
      description:
        "Versatile programming language blending functional, imperative, and logic paradigms, developed at Aarhus University with community contributions. It stands out for its type and effect system alongside support for first-class Datalog constraints.",
      shortDesc: "Functional, imperative, and logic language focusing on type and effect systems.",
      created: "2015",
      extensions: [".flix"],
      extGithubPath: "flix/flix",
      extHomeURL: "https://flix.dev/",
      extWikipediaPath: "Flix_(programming_language)",
      githubStars: 2200,
      isTranspiler: false,
      keywords: ["flix"],
      releases: [{ version: "0.54.0", date: "2024-09-30" }],
    })
    .relInfluencedBy.add("pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+functional", "para+imperative", "para+logic", "para+multi")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+algebraic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+java");
}
