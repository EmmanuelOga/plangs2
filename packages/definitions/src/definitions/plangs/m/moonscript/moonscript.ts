import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+moonscript", {
      name: "Lua",
      description:
        "Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.",
      firstAppeared: "1993-01-01",
      extensions: [".lua"],
      websites: [
        { href: "https://www.lua.org/", title: "www.lua.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/MoonScript", title: "Lua", kind: "wikipedia" },
      ],
      releases: [{ version: "5.4.7", date: "2024-01-01" }],
    })
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
}
