import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+assembly", {
      name: "Assembly",
      description:
        "Assembly language, often simply referred to as assembly and abbreviated as ASM or asm, is a low-level programming language with a strong correspondence between its instructions and the machine code of the architecture it's designed for. Assembly language usually has a 1:1 mapping with machine instructions but also supports constants, comments, assembler directives, symbolic labels, and macros.",
      keywords: ["asm", "assembler", "assembly"],
      extensions: [".S", ".SRC", ".a51", ".asm", ".inc", ".s", ".src", ".wla"],
      isTranspiler: false,
      stackovTags: ["assembly"],
      githubName: "Assembly",
      languishRanking: 40,
      githubLangId: "24",
      githubColor: "#6E4C13",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Assembly_language",
      extRedditPath: "asm",
      created: "1947",
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
