import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+lua", {
      name: "Lua",
      description:
        "Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.",
      firstAppeared: "1993-01-01",
      extensions: [".lua"],
      websites: [
        { href: "https://www.lua.org/", title: "www.lua.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Lua_(programming_language)", title: "Lua", kind: "wikipedia" },
      ],
      releases: [{ version: "5.4.7", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Lua", url: "/images/plangs/l/lua/logo.png" }],
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
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);
}
