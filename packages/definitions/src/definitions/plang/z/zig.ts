import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+zig", {
      name: "Zig",
      description:
        "Imperative, general-purpose, statically typed system programming language designed to improve upon C/C++'s features, focusing on robust error handling and performance without hidden control flows or a preprocessor.",
      shortDesc: "System programming language designed as an improvement over C/C++ with native error handling and performance enhancements.",
      created: "2015",
      extensions: [".zig", ".zigr", ".zir", ".zon"],
      extGithubPath: "ziglang/zig",
      extHomeURL: "https://ziglang.org",
      extRedditPath: "Zig",
      extWikipediaPath: "Zig_(programming_language)",
      githubColor: "#ec915c",
      githubLangId: "646424281",
      githubName: "Zig",
      githubPopular: false,
      githubStars: 35400,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["zig"],
      languishRanking: 52,
      releases: [{ version: "0.13.0", name: "Zig 0.13.0", date: "2024-06-06" }],
      stackovTags: ["zig"],
    })
    .relInfluencedBy.add("pl+c", "pl+c++", "pl+go", "pl+javascript", "pl+rust")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+concurrent", "para+functional", "para+imperative", "para+multi", "para+procedural")
    .relPlatforms.add("plat+arm", "plat+bsd", "plat+cross", "plat+linux", "plat+riscv", "plat+wasm", "plat+windows", "plat+x86-64")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+better-c",
      "tag+compiler",
      "tag+embedded",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+testing",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+flow", "tsys+generic", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+c++", "pl+zig");
}
