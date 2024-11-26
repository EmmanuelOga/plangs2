import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+lua", {
      name: "Lua",
      description:
        "Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.",
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
    })
    .relInfluencedBy.add(["pl+awk", "pl+c++", "pl+lisp", "pl+r5rs", "pl+scheme", "pl+self"])
    .relLicense.add(["license+mit"])
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
    .relPlatforms.add(["plat+cross"])
    .relTags.add([
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
    .relTsys.add(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
