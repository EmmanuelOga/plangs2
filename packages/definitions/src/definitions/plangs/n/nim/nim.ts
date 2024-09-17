import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nim", {
      name: "Nim",
      description:
        'Nim is a general-purpose, multi-paradigm, statically typed, compiled high-level system programming language, designed and developed by a team around Andreas Rumpf. Nim is designed to be "efficient, expressive, and elegant", supporting metaprogramming, functional, message passing, procedural, and object-oriented programming styles by providing several features such as compile time code generation, algebraic data types, a foreign function interface (FFI) with C, C++, Objective-C, and JavaScript, and supporting compiling to those same languages as intermediate representations.',
      firstAppeared: "2008-01-01",
      extensions: [".nim", ".nimble", ".nims"],
      websites: [
        { href: "http://nim-lang.org/", title: "nim-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Nim_(programming_language)", title: "Nim", kind: "wikipedia" },
      ],
      releases: [{ version: "2.0.8", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Nim", url: "/images/plangs/n/nim/logo.png" }],
    })
    .addInfluencedBy(["pl+ada", "pl+c", "pl+c++", "pl+lisp", "pl+oberon", "pl+python", "pl+rust"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
    ])
    .addPlatforms(["plat+arm", "plat+cross", "plat+riscv", "plat+x86-64"])
    .addTags([
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+editor",
      "tag+games",
      "tag+interpreter",
      "tag+iot",
      "tag+ray-tracer",
      "tag+stats",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+pascal"]);
}
