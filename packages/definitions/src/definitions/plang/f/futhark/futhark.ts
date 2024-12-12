import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+futhark", {
      name: "Futhark",
      description:
        "Futhark is a data-parallel programming language designed for high-performance computing, particularly on GPUs, utilizing a functional programming paradigm influenced by languages such as APL and Haskell. It supports automatic differentiation and emphasizes efficient data parallelism in array computations through a Hindley-Milner type system with uniqueness types.",
      keywords: ["futhark"],
      extensions: [".fut"],
      releases: [
        { version: "0.20.0", name: "Futhark 0.20.0", date: "2021-12-01" },
        { version: "0.21.0", name: "Futhark 0.21.0", date: "2022-06-01" },
      ],
      stackovTags: ["futhark"],
      githubName: "Futhark",
      languishRanking: 399,
      githubLangId: "97358117",
      githubColor: "#5f021f",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Futhark_(programming_language)",
      extRedditPath: "futhark",
      extHomeURL: "https://futhark-lang.org/",
      created: "2014",
      isTranspiler: false,
      shortDesc: "Futhark is a functional, parallel programming language optimized for high-performance GPU and CPU execution.",
      githubStars: 2400,
      extGithubPath: "diku-dk/futhark",
      ghRepoCreated: "2014-08-19",
    })
    .relCompilesTo.add("pl+cuda")
    .relInfluencedBy.add("pl+apl", "pl+haskell", "pl+standard-ml")
    .relLicenses.add("lic+isc")
    .relParadigms.add("para+array", "para+compiled", "para+functional", "para+multi", "para+parallel")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+compiler", "tag+interpreters", "tag+numeric", "tag+ray-tracer", "tag+sci")
    .relTypeSystems.add("tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness")
    .relWrittenWith.add("pl+standard-ml");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
