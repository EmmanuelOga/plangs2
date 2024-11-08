import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+apl", {
      name: "APL",
      description:
        "APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multidimensional array. It uses a large range of special graphic symbols to represent most functions and operators, leading to very concise code. It has been an important influence on the development of concept modeling, spreadsheets, functional programming, and computer math packages. It has also inspired several other programming languages.",
      keywords: ["apl", "array programming"],
      websites: [
        { title: "APL Wiki", href: "https://aplwiki.com/", kind: "homepage" },
        { title: "APL on Wikipedia", href: "https://en.wikipedia.org/wiki/APL_programming_language", kind: "wikipedia" },
        { title: "APL on Reddit", kind: "reddit", href: "https://reddit.com/r/apljk" },
      ],
      extensions: [".apl"],
      year: 1966,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1", name: "APL 1", date: "1966-01-01" },
        { version: "2", name: "APL 2", date: "1980-01-01" },
      ],
      github: { name: "APL", langId: "6", color: "#5A8164", popular: false, type: "programming" },
      stackovTags: ["apl"],
    })
    .addLicenses(["license+proprietary"])
    .addParadigms(["paradigm+array", "paradigm+functional", "paradigm+modular", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+automation",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+embedded",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+ray-tracer",
      "tag+server",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
