import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rascal", {
      name: "Rascal",
      description:
        "Rascal is a domain-specific language for metaprogramming and language-oriented programming, which includes tasks like static code analysis, program transformation, program generation, and the implementation of domain-specific languages. It serves as a general meta language without bias towards any specific software language. Rascal incorporates elements from both relational calculus and term rewriting, while its syntax and semantics are a blend of procedural (imperative) and functional programming.",
      keywords: ["dsl", "metaprogramming", "rascal"],
      websites: [
        { title: "Rascal", href: "http://www.rascal-mpl.org/", kind: "homepage" },
        { title: "Rascal", href: "https://en.wikipedia.org/wiki/RascalMPL", kind: "wikipedia" },
      ],
      extensions: [".rsc"],
      year: 2009,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.30.1", name: "Rascal 0.30.1", date: "2023-01-01" }],
      stackovTags: ["rascal"],
      githubName: "Rascal",
      languishRanking: 232,
      githubLangId: "173616037",
      githubColor: "#fffaa0",
      githubPopular: false,
      githubType: "programming",
    })
    .addLicenses(["license+epl"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+imperative", "paradigm+language-oriented", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+dsl", "tag+transformation"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
