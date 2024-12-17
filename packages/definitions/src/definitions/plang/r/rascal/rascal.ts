import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rascal", {
      name: "Rascal",
      description:
        "Rascal is a domain-specific language for metaprogramming and language-oriented programming, which includes tasks like static code analysis, program transformation, program generation, and the implementation of domain-specific languages. It serves as a general meta language without bias towards any specific software language. Rascal incorporates elements from both relational calculus and term rewriting, while its syntax and semantics are a blend of procedural (imperative) and functional programming.",
      shortDesc: "Rascal is a domain-specific language for metaprogramming and implementing domain-specific languages.",
      created: "2009",
      extensions: [".rsc"],
      extGithubPath: "usethesource/rascal",
      extHomeURL: "https://www.rascal-mpl.org/",
      extWikipediaPath: "RascalMPL",
      githubColor: "#fffaa0",
      githubLangId: "173616037",
      githubName: "Rascal",
      githubPopular: false,
      githubStars: 411,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["dsl", "metaprogramming", "rascal"],
      languishRanking: 232,
      releases: [{ version: "0.30.1", name: "Rascal 0.30.1", date: "2023-07-05" }],
      stackovTags: ["rascal"],
    })
    .relLicenses.add("lic+bsd", "lic+epl")
    .relParadigms.add("para+declarative", "para+functional", "para+imperative", "para+language-oriented", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+analysis")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
