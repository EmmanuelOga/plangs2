import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+moonscript", {
      name: "MoonScript",
      description:
        "Dynamic, whitespace-sensitive language that compiles to Lua, offering a cleaner syntax inspired by CoffeeScript and compatibility with Lua environments, including LuaJIT.",
      shortDesc:
        "Dynamic scripting language compiling to Lua with CoffeeScript-inspired syntax.",
      created: "2011",
      extensions: [".moon"],
      extGithubPath: "leafo/moonscript",
      extHomeURL: "https://moonscript.org/",
      extRedditPath: "moonscript",
      extWikipediaPath: "MoonScript",
      githubColor: "#ff4585",
      githubLangId: "238",
      githubName: "MoonScript",
      githubPopular: false,
      githubStars: 3200,
      githubType: "programming",
      isTranspiler: true,
      keywords: [
        "coffeescript",
        "dynamic",
        "lua",
        "moonscript",
        "scripting-language",
        "whitespace-sensitive",
      ],
      languishRanking: 360,
      stackovTags: ["moonscript"],
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
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+dynamic",
      "tsys+object",
      "tsys+strong",
    );
}
