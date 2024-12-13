import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+zig", {
      name: "Zig",
      description:
        "Zig is an imperative, general-purpose, statically typed system programming language designed to improve upon C/C++'s features, focusing on robust error handling and performance without hidden control flows or a preprocessor.",
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
      extHomeURL: "https://ziglang.org",
      created: "2015",
      isTranspiler: false,
      shortDesc:
        "Zig is a robust system programming language designed as an improvement over C/C++ with native error handling and performance enhancements.",
      githubStars: 35400,
      extGithubPath: "ziglang/zig",
    })
    .relInfluencedBy.add("pl+c", "pl+c++", "pl+go", "pl+javascript", "pl+rust")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+concurrent", "para+functional", "para+imperative", "para+multi", "para+procedural")
    .relPlatforms.add("plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+wasm", "plat+windows", "plat+x86-64")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+embedded",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+testing",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+zig", "pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
