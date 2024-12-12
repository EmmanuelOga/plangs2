import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gravity", {
      name: "Gravity",
      description:
        "Gravity is a lightweight, dynamically typed, embeddable programming language designed for the Creo project. It supports multiple paradigms such as procedural, object-oriented, and functional programming, and takes influence from languages like Lua and Swift.",
      keywords: ["creo", "gravity", "lua-inspired", "swift-like"],
      extensions: [".gravity"],
      releases: [{ version: "0.8", name: "Gravity 0.8", date: "2023-01-01" }],
      isTranspiler: false,
      extGithubPath: "marcobambini/gravity",
      created: "2015",
      shortDesc: "Gravity is a lightweight, embeddable programming language supporting multiple paradigms.",
      extHomeURL: "https://marcobambini.github.io/gravity/",
      githubStars: 4300,
      ghRepoCreated: "2015-07-21",
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
