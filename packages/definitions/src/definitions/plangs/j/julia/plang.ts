import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+julia", {
      name: "Julia",
      description:
        "Julia is a high-level, general-purpose dynamic programming language, most commonly used for numerical analysis and computational science. Distinctive aspects of Julia's design include a type system with parametric polymorphism and the use of multiple dispatch as a core programming paradigm, efficient garbage collection, and a just-in-time (JIT) compiler (with support for ahead-of-time compilation).",
      firstAppeared: "2012-01-01",
      extensions: [".jl"],
      websites: [
        { href: "https://julialang.org/", title: "JuliaLang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Julia_programming_language", title: "Julia", kind: "wikipedia" },
      ],
      releases: [
        { version: "1.10.5", date: "2024-01-01" },
        { version: "1.11.0", date: "2024-01-01" },
      ],
      images: [{ kind: "logo", title: "Julia", url: "/images/plangs/j/julia/logo.png" }],
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
      "pl+r",
      "pl+r5rs",
      "pl+ruby",
      "pl+scheme",
      "pl+wolfram-language",
    ])
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+array",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+structured",
    ])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+linux", "platf+windows", "platf+x86-64"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+nominal", "tsys+optional", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+c++", "pl+llvm", "pl+scheme"]);
}
