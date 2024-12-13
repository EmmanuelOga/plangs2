import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+lua", {
      name: "Lua",
      description:
        "Lua is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. It is cross-platform as it's implemented in ANSI C, enabling integration with various systems through its simple API.",
      keywords: ["lua"],
      extensions: [".lua"],
      releases: [{ version: "5.4.7", name: "Lua 5.4.7", date: "2024-06-25" }],
      stackovTags: ["lua"],
      githubName: "Lua",
      languishRanking: 26,
      githubLangId: "213",
      githubColor: "#000080",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Lua_(programming_language)",
      extRedditPath: "lua",
      extHomeURL: "https://www.lua.org/",
      created: "1993",
      isTranspiler: false,
      shortDesc: "Lua is a lightweight, high-level language designed for embedding in applications.",
      githubStars: 8600,
      extGithubPath: "lua/lua",
    })
    .relInfluencedBy.add("pl+awk", "pl+c", "pl+c++", "pl+lisp", "pl+r5rs", "pl+scheme", "pl+self")
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
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
