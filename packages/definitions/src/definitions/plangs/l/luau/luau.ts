import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+luau", {
      name: "Luau",
      description:
        "Luau is a fast, small, safe, gradual scripting language derived from Lua and developed by Roblox for their platform. It is specifically optimized for the developer community within Roblox, providing features like type inference and static analysis to catch bugs before runtime.",
      keywords: ["luau", "roblox", "scripting", "lua"],
      websites: [{ title: "Luau", href: "https://luau.org/", kind: "homepage" }],
      extensions: [".luau"],
      firstAppeared: "2019-11-13",
      isMainstream: true,
      releases: [{ version: "1.0", name: "Luau 1.0", date: "2021-02-18" }],
    })
    .addDialectOf(["pl+lua"])
    .addInfluencedBy(["pl+lua"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+arm", "plat+cross", "plat+embedded", "plat+linux", "plat+windows"])
    .addTags(["tag+games", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"])
    .addWrittenIn(["pl+c", "pl+c++"]);
}
