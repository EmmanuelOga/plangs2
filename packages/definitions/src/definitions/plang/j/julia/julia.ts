import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+julia", {
      name: "Julia",
      description:
        "Julia is a high-level, general-purpose dynamic programming language designed for numerical and scientific computing, as well as a variety of other applications such as data science, artificial intelligence, machine learning, modeling, and simulation. Julia's distinctive design features include a type system with parametric polymorphism, multiple dispatch as a core programming paradigm, a just-in-time compiler with support for ahead-of-time compilation, and efficient garbage collection. The language also provides strong support for parallel and distributed computing, and has a built-in package manager and extensive interoperability with other programming languages.",
      shortDesc:
        "Julia is a dynamic language designed for numerical and scientific computing with strong support for parallel computing and multiple dispatch.",
      created: "2012",
      extensions: [".jl"],
      extGithubPath: "JuliaLang/julia",
      extHomeURL: "https://julialang.org",
      extRedditPath: "Julia",
      extWikipediaPath: "Julia_(programming_language)",
      githubColor: "#a270ba",
      githubLangId: "184",
      githubName: "Julia",
      githubPopular: false,
      githubStars: 46000,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["data science", "julia", "machine learning", "numerical computing"],
      languishRanking: 48,
      releases: [
        { version: "1.11.1", name: "Julia 1.11.1", date: "2024-10-16" },
        { version: "1.10.6", name: "Julia 1.10.6", date: "2024-10-28" },
        { version: "1.10.5", name: "Julia 1.10.5", date: "2024-01-01" },
        { version: "1.11.0", name: "Julia 1.11.0", date: "2024-01-01" },
      ],
      stackovTags: ["julia"],
    })
    .relInfluencedBy.add(
      "pl+c",
      "pl+common-lisp",
      "pl+lisp",
      "pl+lua",
      "pl+moonscript",
      "pl+perl",
      "pl+python",
      "pl+r",
      "pl+r5rs",
      "pl+ruby",
      "pl+scheme",
      "pl+wolfram-language",
    )
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+array",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+structured",
    )
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+control",
      "tag+dataq",
      "tag+dbms",
      "tag+embedded",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+shell",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+optional", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+c++", "pl+llvm", "pl+scheme");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
