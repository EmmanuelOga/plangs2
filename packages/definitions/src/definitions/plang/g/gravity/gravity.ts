import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gravity", {
      name: "Gravity",
      description:
        "Lightweight, dynamically typed, embeddable programming language designed for the Creo project. It supports multiple paradigms such as procedural, object-oriented, and functional programming, and takes influence from languages like Lua and Swift.",
      shortDesc: "Lightweight, embeddable programming language supporting multiple paradigms.",
      created: "2015",
      extensions: [".gravity"],
      extGithubPath: "marcobambini/gravity",
      extHomeURL: "https://marcobambini.github.io/gravity/",
      githubStars: 4300,
      isTranspiler: false,
      keywords: ["creo", "gravity", "lua-inspired", "swift-like"],
      releases: [{ version: "0.8", name: "Gravity 0.8", date: "2023-01-01" }],
    })
    .relInfluencedBy.add("pl+lua", "pl+swift")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+multi", "para+oop", "para+procedural", "para+scripting")
    .relPlatforms.add("plat+android", "plat+cross")
    .relTags.add("tag+embedded", "tag+games", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
