import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+lua", {
      name: "Lua",
      description:
        "Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.",
      keywords: ["lua"],
      websites: [
        { title: "www.lua.org", href: "https://www.lua.org/", kind: "homepage" },
        { title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)", kind: "wikipedia" },
        { title: "Lua on Reddit", kind: "reddit", href: "https://reddit.com/r/lua" },
      ],
      extensions: [".lua"],
      year: 1993,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "5.4.7", name: "Lua 5.4.7", date: "2024-01-01" }],
      stackovTags: ["lua"],
      githubName: "Lua",
      languishRanking: 26,
      githubLangId: "213",
      githubColor: "#000080",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+awk", "pl+c++", "pl+clu", "pl+lisp", "pl+modula", "pl+r5rs", "pl+scheme", "pl+self"])
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
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
