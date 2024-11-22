import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+zig", {
      name: "Zig",
      description:
        "Zig is an imperative, general-purpose, statically typed, compiled system programming language designed by Andrew Kelley. It is intended to serve as a successor to the C language, focusing on robustness, simplicity, and maintainability without hidden control flows or macros. Zig allows seamless integration with C/C++ and aims to provide better performance and safety features compared to traditional C, with manual memory management and optional types. The language is open-source and backed by the Zig Software Foundation.",
      keywords: ["zig"],
      extensions: [".zig", ".zigr", ".zir", ".zon"],
      releases: [{ version: "0.13.0", name: "Zig 0.13.0", date: "2024-06-06" }],
      stackovTags: ["zig"],
      githubName: "Zig",
      languishRanking: 52,
      githubLangId: "646424281",
      githubColor: "#ec915c",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Zig_(programming_language)",
      extRedditPath: "Zig",
      extHomeURL: "https://ziglang.org/",
      created: "2016",
    })
    .relInfluencedBy.add(["pl+c", "pl+c++", "pl+go", "pl+javascript", "pl+rust"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+procedural"])
    .relPlatforms.add(["plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+wasm", "plat+windows", "plat+x86-64"])
    .relTags.add([
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+embedded",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+testing",
      "tag+viz",
    ])
    .relTsys.add(["tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
