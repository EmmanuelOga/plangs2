import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+assembly", {
      name: "Assembly language",
      description:
        "Assembly language, often simply referred to as assembly and abbreviated as ASM or asm, is a low-level programming language with a strong correspondence between its instructions and the machine code of the architecture it's designed for. Assembly language usually has a 1:1 mapping with machine instructions but also supports constants, comments, assembler directives, symbolic labels, and macros.",
      keywords: ["assembly", "asm", "assembler"],
      websites: [{ title: "Assembly language", href: "https://en.wikipedia.org/wiki/Assembly_language", kind: "wikipedia" }],
      extensions: [".asm", ".s", ".inc", ".src", ".a51"],
      firstAppeared: "1947-01-01",
      isTranspiler: false,
      isMainstream: true,
    })
    .addParadigms(["paradigm+imperative", "paradigm+macro", "paradigm+metaprogramming", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+asm", "tag+compiler", "tag+embedded", "tag+industrial", "tag+interpreter"])
    .addTypeSystems(["tsys+untyped"]);
}
