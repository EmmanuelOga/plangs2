import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+beef", {
      name: "Beef",
      description:
        "Beef is an open source, performance-oriented programming language designed for efficient real-time applications, such as games, providing manual memory management and custom allocators.",
      keywords: ["beef", "manual memory management", "performance-oriented"],
      extensions: [".bf"],
      releases: [{ version: "0.43.4", name: "Beef 0.43.4", date: "2022-09-07" }],
      stackovTags: ["beef"],
      githubName: "Beef",
      languishRanking: 378,
      githubLangId: "545626333",
      githubColor: "#a52f4e",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "beeflang",
      extGithubPath: "beefytech/Beef",
      extHomeURL: "https://www.beeflang.org",
      created: "2020",
      isTranspiler: false,
      shortDesc: "Beef is a high-performance language for real-time applications with manual memory management.",
      githubStars: 2500,
      ghRepoCreated: "2019-09-27",
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
