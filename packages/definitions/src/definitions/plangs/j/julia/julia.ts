import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+julia", {
      name: "Julia",
      description:
        "Julia is a high-level, general-purpose dynamic programming language, most commonly used for numerical analysis and computational science. Distinctive aspects of Julia's design include a type system with parametric polymorphism and the use of multiple dispatch as a core programming paradigm, efficient garbage collection, and a just-in-time (JIT) compiler (with support for ahead-of-time compilation).",
      keywords: ["julia"],
      websites: [
        { title: "JuliaLang.org", href: "https://julialang.org/", kind: "homepage" },
        { title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_programming_language", kind: "wikipedia" },
      ],
      extensions: [".jl"],
      year: 2012,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "1.10.5", name: "Julia 1.10.5", date: "2024-01-01" },
        { version: "1.11.0", name: "Julia 1.11.0", date: "2024-01-01" },
      ],
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
