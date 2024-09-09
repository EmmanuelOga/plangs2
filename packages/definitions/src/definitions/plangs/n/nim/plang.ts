import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+nim", {
      images: [{ kind: "logo", title: "Nim", url: "/images/plangs/n/nim/logo.png" }],
      name: "Nim",
      description:
        'Nim is a general-purpose, multi-paradigm, statically typed, compiled high-level system programming language, designed and developed by a team around Andreas Rumpf. Nim is designed to be "efficient, expressive, and elegant", supporting metaprogramming, functional, message passing, procedural, and object-oriented programming styles by providing several features such as compile time code generation, algebraic data types, a foreign function interface (FFI) with C, C++, Objective-C, and JavaScript, and supporting compiling to those same languages as intermediate representations.',
      websites: [
        { href: "http://nim-lang.org/", title: "nim-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Nim_(programming_language)", title: "Nim", kind: "wikipedia" },
      ],
      extensions: [".nim", ".nimble", ".nims"],
      releases: [{ version: "2.0.8", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+ada", "pl+c", "pl+c++", "pl+lisp", "pl+oberon", "pl+rust"])
    .addParadigms([
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
    ])
    .addPlatforms(["platf+arm", "platf+cross", "platf+riscv", "platf+x86-64"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+pascal"]);
}
