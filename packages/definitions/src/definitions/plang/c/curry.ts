import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+curry", {
      name: "Curry",
      description:
        "A declarative programming language that uniquely integrates features of functional and logic programming paradigms. It supports non-deterministic computations, constraint programming, and combines features such as lazy evaluation and strong typing. Curry is based on Haskell but extends it with logic programming features.",
      shortDesc:
        "Declarative language that integrates features of functional and logic programming paradigms",
      created: "1995",
      extensions: [".curry"],
      extHomeURL: "https://curry-lang.org",
      extWikipediaPath: "Curry_(programming_language)",
      githubColor: "#531242",
      githubLangId: "439829048",
      githubName: "Curry",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["curry", "declarative", "functional", "logic", "programming"],
      releases: [{ version: "3.6.0", name: "Curry 3.6.0", date: "2023-11-10" }],
    })
    .relInfluencedBy.add("pl+haskell", "pl+prolog")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+concurrent",
      "para+constraint",
      "para+declarative",
      "para+functional",
      "para+lazy",
      "para+logic",
      "para+modular",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+x86-64")
    .relTags.add(
      "tag+audio-dev",
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
      "tag+testing",
    )
    .relTypeSystems.add(
      "tsys+algebraic",
      "tsys+inferred",
      "tsys+static",
      "tsys+strong",
    );
}
