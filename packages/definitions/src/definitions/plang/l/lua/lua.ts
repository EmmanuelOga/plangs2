import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+lua", {
      name: "Lua",
      description:
        "Lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. It is cross-platform as it's implemented in ANSI C, enabling integration with various systems through its simple API.",
      shortDesc: "Lightweight, high-level language designed for embedding in applications.",
      created: "1993",
      extensions: [".lua"],
      extGithubPath: "lua/lua",
      extHomeURL: "https://www.lua.org/",
      extRedditPath: "lua",
      extWikipediaPath: "Lua_(programming_language)",
      githubColor: "#000080",
      githubLangId: "213",
      githubName: "Lua",
      githubPopular: false,
      githubStars: 8600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["lua"],
      languishRanking: 26,
      releases: [{ version: "5.4.7", name: "Lua 5.4.7", date: "2024-06-25" }],
      stackovTags: ["lua"],
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
