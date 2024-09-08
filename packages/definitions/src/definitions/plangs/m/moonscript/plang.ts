import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+moonscript", {
      images: [{ kind: "logo", title: "Lua" }],
      name: "Lua",
      description:
        "Lua (/ˈluːə/ LOO-ə; from Portuguese: lua [ˈlu(w)ɐ] meaning moon) is a lightweight, high-level, multi-paradigm programming language designed mainly for embedded use in applications. Lua is cross-platform software, since the interpreter of compiled bytecode is written in ANSI C, and Lua has a relatively simple C application programming interface (API) to embed it into applications.",
      websites: [
        { href: "https://www.lua.org/", title: "www.lua.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/MoonScript", title: "Lua", kind: "wikipedia" },
      ],
      extensions: [".lua"],
      releases: [{ version: "5.4.7", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c++", "pl+clu", "pl+coffeescript", "pl+modula", "pl+scheme"])
    .addLicenses(["lic+mit"])
    .addParadigms([
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
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);
}