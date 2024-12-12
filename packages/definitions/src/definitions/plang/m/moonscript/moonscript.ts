import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+moonscript", {
      name: "MoonScript",
      description:
        "MoonScript is a dynamic, whitespace-sensitive language that compiles to Lua, offering a cleaner syntax inspired by CoffeeScript and compatibility with Lua environments, including LuaJIT.",
      keywords: ["coffeescript", "dynamic", "lua", "moonscript", "scripting-language", "whitespace-sensitive"],
      isTranspiler: true,
      stackovTags: ["moonscript"],
      githubName: "MoonScript",
      languishRanking: 360,
      githubLangId: "238",
      githubColor: "#ff4585",
      githubPopular: false,
      githubType: "programming",
      extensions: [".moon"],
      extRedditPath: "moonscript",
      extWikipediaPath: "MoonScript",
      extHomeURL: "https://moonscript.org/",
      created: "2011",
      shortDesc: "MoonScript is a dynamic scripting language compiling to Lua with CoffeeScript-inspired syntax.",
      githubStars: 3200,
      extGithubPath: "leafo/moonscript",
      ghRepoCreated: "2012-04-20",
    })
    .relCompilesTo.add("pl+lua")
    .relInfluencedBy.add("pl+c++", "pl+coffeescript", "pl+lua", "pl+scheme")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+prototype",
      "para+reflective",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
