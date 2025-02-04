import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+assembly", {
      name: "Assembly",
      description:
        "Low-level language with a strong correspondence between instructions and machine code: usually a 1:1 mapping between them.",
      shortDesc:
        "Low-level programming language closely aligned with machine code instructions.",
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
      languishRanking: 33,
      stackovTags: ["assembly"],
    })
    .relParadigms.add(
      "para+imperative",
      "para+macro",
      "para+metaprogramming",
      "para+structured",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+arm",
      "plat+cross",
      "plat+embedded",
      "plat+linux",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+asm",
      "tag+compiler",
      "tag+embedded",
      "tag+industrial",
      "tag+interpreters",
    )
    .relTypeSystems.add("tsys+untyped");
}
