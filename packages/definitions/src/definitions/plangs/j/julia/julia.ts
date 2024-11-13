import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+julia", {
      name: "Julia",
      description:
        "Julia is a high-level, general-purpose dynamic programming language designed for numerical and scientific computing, as well as a variety of other applications such as data science, artificial intelligence, machine learning, modeling, and simulation. Julia's distinctive design features include a type system with parametric polymorphism, multiple dispatch as a core programming paradigm, a just-in-time compiler with support for ahead-of-time compilation, and efficient garbage collection. The language also provides strong support for parallel and distributed computing, and has a built-in package manager and extensive interoperability with other programming languages.",
      keywords: ["data science", "julia", "machine learning", "numerical computing"],
      websites: [
        { title: "JuliaLang.org", href: "https://julialang.org/", kind: "homepage" },
        { title: "Julia on Reddit", kind: "reddit", href: "https://reddit.com/r/Julia" },
        { title: "Julia on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
      ],
      extensions: [".jl"],
      year: 2012,
      isMainstream: true,
      releases: [
        { version: "1.11.1", name: "Julia 1.11.1", date: "2024-10-16" },
        { version: "1.10.6", name: "Julia 1.10.6", date: "2024-10-28" },
        { version: "1.10.5", name: "Julia 1.10.5", date: "2024-01-01" },
        { version: "1.11.0", name: "Julia 1.11.0", date: "2024-01-01" },
      ],
      stackovTags: ["julia"],
      githubName: "Julia",
      languishRanking: 48,
      githubLangId: "184",
      githubColor: "#a270ba",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy([
      "pl+c",
      "pl+common-lisp",
      "pl+dylan",
      "pl+fortress",
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
    ])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+array",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags([
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dataq",
      "tag+dbms",
      "tag+embedded",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+modeling",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+shell",
      "tag+ui",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+optional", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+c++", "pl+llvm", "pl+scheme"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
