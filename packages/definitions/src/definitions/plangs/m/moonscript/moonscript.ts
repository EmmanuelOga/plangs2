import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+moonscript", {
      name: "MoonScript",
      description:
        "MoonScript is a dynamic, whitespace-sensitive scripting language that compiles into Lua. It offers a clean syntax inspired by CoffeeScript and provides compatibility with Lua, including alternative implementations like LuaJIT.",
      keywords: ["coffeeScript", "dynamic", "lua", "moonscript", "programming language", "scripting language"],
      websites: [
        { title: "MoonScript", href: "https://moonscript.org/", kind: "homepage" },
        { title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript", kind: "wikipedia" },
        { title: "MoonScript on Reddit", kind: "reddit", href: "https://reddit.com/r/moonscript" },
      ],
      year: 2011,
      isTranspiler: true,
      stackovTags: ["moonscript"],
      githubName: "MoonScript",
      languishRanking: 360,
      githubLangId: "238",
      githubColor: "#ff4585",
      githubPopular: false,
      githubType: "programming",
      extensions: [".moon"],
    })
    .addCompilesTo(["pl+lua"])
    .addInfluencedBy(["pl+c++", "pl+clu", "pl+coffeescript", "pl+modula", "pl+scheme"])
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
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
