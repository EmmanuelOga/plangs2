import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+assembly", {
      images: [{ kind: "other", title: "Assembly language", url: "/images/plangs/a/assembly/other.png" }],
      name: "Assembly language",
      description:
        "In computer programming,  assembly language (alternatively assembler language or symbolic machine code), often referred to simply as assembly and commonly abbreviated as ASM or asm, is any low-level programming language with a very strong correspondence between the instructions in the language and the architecture's machine code instructions. Assembly language usually has one statement per machine instruction (1:1), but  constants, comments, assembler directives, symbolic labels of, e.g., memory locations, registers, and macros are generally also supported.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Assembly_language", title: "Assembly language", kind: "wikipedia" }],
      extensions: [".SRC", ".asm", ".inc", ".s", ".wla"],
      releases: [],
    })
    .addParadigms(["para+imperative", "para+macro", "para+metaprogramming", "para+oop", "para+structured"]);
}
