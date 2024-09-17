import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+moonscript", {
      name: "Moonscript",
      description: "MoonScript is a dynamic scripting language that compiles into Lua. It gives the full power of Lua in a more concise syntax.",
      extensions: [".moon"],
      websites: [{ href: "https://moonscript.org/", title: "moonscript.org", kind: "homepage" }],
    })
    .addInfluencedBy(["pl+lua"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+prototype",
      "paradigm+reflective",
      "paradigm+scripting",
    ])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+games"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);
}
