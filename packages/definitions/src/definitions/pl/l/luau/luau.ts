import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+luau", {
      name: "Luau",
      description:
        "Luau is a fast, small, safe, gradually typed embeddable scripting language derived from Lua. Developed by Roblox, it is optimized for game development on their platform and includes features like type inference, static analysis, and sandboxing for secure script execution.",
      keywords: ["gradual typing", "lua", "luau", "roblox", "scripting"],
      extensions: [".luau"],
      releases: [{ version: "1.0", name: "Luau 1.0", date: "2021-02-18" }],
      githubName: "Luau",
      githubLangId: "365050359",
      githubColor: "#00A2FF",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: true,
      extHomeURL: "https://luau.org/",
      created: "2006",
    })
    .relCompilesTo.add(["pl+lua"])
    .relDialectOf.add(["pl+lua"])
    .relInfluencedBy.add(["pl+lua"])
    .relLicenses.add(["lic+mit"])
    .relParadigms.add(["para+imperative", "para+multi", "para+oop", "para+procedural", "para+scripting"])
    .relPlatforms.add(["plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows"])
    .relTags.add(["tag+games", "tag+scripting"])
    .relTypeSystems.add(["tsys+dynamic", "tsys+gradual"])
    .relWrittenWith.add(["pl+c", "pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
