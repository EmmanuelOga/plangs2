import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+beef", {
      name: "Beef",
      description:
        "Open source, performance oriented programming language designed for efficient real-time applications, such as games, providing manual memory management and custom allocators.",
      shortDesc: "High-performance language for real-time applications with manual memory management.",
      created: "2020",
      extensions: [".bf"],
      extGithubPath: "beefytech/Beef",
      extHomeURL: "https://www.beeflang.org",
      extRedditPath: "beeflang",
      githubColor: "#a52f4e",
      githubLangId: "545626333",
      githubName: "Beef",
      githubPopular: false,
      githubStars: 2500,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["beef", "manual memory management", "performance-oriented"],
      languishRanking: 378,
      releases: [{ version: "0.43.4", name: "Beef 0.43.4", date: "2022-09-07" }],
      stackovTags: ["beef"],
    })
    .relInfluencedBy.add("pl+c", "pl+c++", "pl+delphi", "pl+rust")
    .relLicenses.add("lic+zlib")
    .relParadigms.add("para+compiled", "para+multi", "para+oop", "para+procedural")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows")
    .relTags.add("tag+compiler", "tag+games")
    .relTypeSystems.add("tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
