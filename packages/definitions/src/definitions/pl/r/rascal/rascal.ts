import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rascal", {
      name: "Rascal",
      description:
        "Rascal is a domain-specific language for metaprogramming and language-oriented programming, which includes tasks like static code analysis, program transformation, program generation, and the implementation of domain-specific languages. It serves as a general meta language without bias towards any specific software language. Rascal incorporates elements from both relational calculus and term rewriting, while its syntax and semantics are a blend of procedural (imperative) and functional programming.",
      keywords: ["dsl", "metaprogramming", "rascal"],
      extensions: [".rsc"],
      releases: [{ version: "0.30.1", name: "Rascal 0.30.1", date: "2023-07-05" }],
      stackovTags: ["rascal"],
      githubName: "Rascal",
      languishRanking: 232,
      githubLangId: "173616037",
      githubColor: "#fffaa0",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "RascalMPL",
      extHomeURL: "http://www.rascal-mpl.org/",
      created: "2009",
    })
    .relLicense.add(["lic+bsd", "lic+epl"])
    .relParadigm.add(["para+declarative", "para+functional", "para+imperative", "para+language-oriented", "para+scripting"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+analysis"])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
