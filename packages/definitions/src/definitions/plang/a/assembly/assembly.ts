import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+assembly", {
      name: "Assembly",
      description:
        "Assembly language, often simply referred to as assembly and abbreviated as ASM or asm, is a low-level programming language with a strong correspondence between its instructions and the machine code of the architecture it's designed for. Assembly language usually has a 1:1 mapping with machine instructions but also supports constants, comments, assembler directives, symbolic labels, and macros.",
      shortDesc: "Assembly is a low-level programming language closely aligned with machine code instructions.",
      created: "1947",
      extensions: [".S", ".SRC", ".a51", ".asm", ".inc", ".s", ".src", ".wla"],
      extRedditPath: "asm",
      extWikipediaPath: "Assembly_language",
      githubColor: "#6E4C13",
      githubLangId: "24",
      githubName: "Assembly",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["asm", "assembler", "assembly"],
      languishRanking: 40,
      stackovTags: ["assembly"],
    })
    .relParadigms.add("para+imperative", "para+macro", "para+metaprogramming", "para+structured")
    .relPlatforms.add("plat+apple", "plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+asm", "tag+compiler", "tag+embedded", "tag+industrial", "tag+interpreters")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
