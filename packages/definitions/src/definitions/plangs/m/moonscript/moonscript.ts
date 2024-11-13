import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+moonscript", {
      name: "MoonScript",
      description:
        "MoonScript is a dynamic scripting language that compiles into Lua. It gives you the power of one of the fastest scripting languages combined with a rich set of features.",
      keywords: ["moonscript"],
      websites: [
        { title: "MoonScript", href: "https://moonscript.org/", kind: "homepage" },
        { title: "MoonScript", href: "https://en.wikipedia.org/wiki/MoonScript", kind: "wikipedia" },
        { title: "MoonScript on Reddit", kind: "reddit", href: "https://reddit.com/r/moonscript" },
      ],
      year: 2011,
      isTranspiler: true,
      isMainstream: true,
      stackovTags: ["moonscript"],
      githubName: "MoonScript",
      languishRanking: 360,
      githubLangId: "238",
      githubColor: "#ff4585",
      githubPopular: false,
      githubType: "programming",
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
