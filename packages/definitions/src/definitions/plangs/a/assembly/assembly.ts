import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+assembly", {
      name: "Assembly",
      description:
        "Assembly language, often simply referred to as assembly and abbreviated as ASM or asm, is a low-level programming language with a strong correspondence between its instructions and the machine code of the architecture it's designed for. Assembly language usually has a 1:1 mapping with machine instructions but also supports constants, comments, assembler directives, symbolic labels, and macros.",
      keywords: ["asm", "assembler", "assembly"],
      websites: [
        { title: "Assembly on Wikipedia", href: "https://en.wikipedia.org/wiki/Assembly_language", kind: "wikipedia" },
        { title: "Assembly on Reddit", href: "https://reddit.com/r/asm", kind: "reddit" },
      ],
      extensions: [".S", ".SRC", ".a51", ".asm", ".inc", ".s", ".src", ".wla"],
      year: 1947,
      isTranspiler: false,
      isMainstream: true,
      stackovTags: ["assembly"],
      githubName: "Assembly",
      languishRanking: 40,
      githubLangId: "24",
      githubColor: "#6E4C13",
      githubPopular: false,
      githubType: "programming",
    })
    .addParadigms(["paradigm+imperative", "paradigm+macro", "paradigm+metaprogramming", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+asm", "tag+compiler", "tag+embedded", "tag+industrial", "tag+interpreter"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
