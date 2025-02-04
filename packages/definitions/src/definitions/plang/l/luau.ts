import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+luau", {
      name: "Luau",
      description:
        "High-performance scripting language developed by Roblox as a subset of Lua, optimized for game development on the Roblox platform, featuring gradual typing and safety features.",
      shortDesc:
        "Lua subset developed by Roblox for game scripting with gradual typing.",
      created: "2019",
      extensions: [".luau"],
      extGithubPath: "Roblox/luau",
      extHomeURL: "https://luau.org/",
      githubColor: "#00A2FF",
      githubLangId: "365050359",
      githubName: "Luau",
      githubPopular: false,
      githubStars: 4100,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["game development", "lua", "luau", "roblox", "scripting"],
      languishRanking: 219,
      releases: [{ version: "1.0", name: "Luau 1.0", date: "2021-02-18" }],
    })
    .relCompilesTo.add("pl+lua")
    .relDialectOf.add("pl+lua")
    .relInfluencedBy.add("pl+lua")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+embedded",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+scripting",
    )
    .relPlatforms.add(
      "plat+arm",
      "plat+cross",
      "plat+embedded",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add("tag+games", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual")
    .relWrittenWith.add("pl+c", "pl+c++");
}
