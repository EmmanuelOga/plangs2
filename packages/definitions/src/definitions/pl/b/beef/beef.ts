import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+beef", {
      name: "Beef",
      description:
        "Beef is an open source performance-oriented compiled programming language designed for a fluid and pleasurable development experience, particularly suited for high-performance real-time applications such as video games, with manual memory management and custom allocators.",
      keywords: ["beef", "high-performance", "memory management", "open source", "real-time"],
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
      extHomeURL: "https://www.beeflang.org/",
      created: "2020",
    })
    .relInfluencedBy.add(["pl+c", "pl+c++", "pl+delphi", "pl+rust"])
    .relLicense.add(["lic+zlib"])
    .relParadigm.add(["para+compiled", "para+multi", "para+oop", "para+procedural"])
    .relPlatform.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows"])
    .relTag.add(["tag+compiler", "tag+games"])
    .relTypeSystem.add(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
