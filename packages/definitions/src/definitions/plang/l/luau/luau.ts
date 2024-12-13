import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+luau", {
      name: "Luau",
      description:
        "Luau is a high-performance scripting language developed by Roblox as a subset of Lua, optimized for game development on the Roblox platform, featuring gradual typing and safety features.",
      keywords: ["game development", "lua", "luau", "roblox", "scripting"],
      extensions: [".luau"],
      releases: [{ version: "1.0", name: "Luau 1.0", date: "2021-02-18" }],
      githubName: "Luau",
      githubLangId: "365050359",
      githubColor: "#00A2FF",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: true,
      extHomeURL: "https://luau.org/",
      created: "2019",
      shortDesc: "Luau is a Lua subset developed by Roblox for game scripting with gradual typing.",
      githubStars: 4100,
      extGithubPath: "Roblox/luau",
    })
    .relCompilesTo.add("pl+lua")
    .relDialectOf.add("pl+lua")
    .relInfluencedBy.add("pl+lua")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+imperative", "para+multi", "para+oop", "para+procedural", "para+scripting")
    .relPlatforms.add("plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add("tag+games", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual")
    .relWrittenWith.add("pl+c", "pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
