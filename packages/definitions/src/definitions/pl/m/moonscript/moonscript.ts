import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+moonscript", {
      name: "MoonScript",
      description:
        "MoonScript is a dynamic, whitespace-sensitive scripting language that compiles into Lua. It offers a clean syntax inspired by CoffeeScript and provides compatibility with Lua, including alternative implementations like LuaJIT.",
      keywords: ["coffeeScript", "dynamic", "lua", "moonscript", "programming language", "scripting language"],
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
    })
    .relCompilesTo.add(["pl+lua"])
    .relInfluencedBy.add(["pl+c++", "pl+coffeescript", "pl+scheme"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add([
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+prototype",
      "para+reflective",
      "para+scripting",
    ])
    .relPlatform.add(["plat+cross"])
    .relTag.add([
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
    ])
    .relTypeSystem.add(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
