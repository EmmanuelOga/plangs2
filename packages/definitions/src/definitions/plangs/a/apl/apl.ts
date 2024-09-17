import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+apl", {
      name: "APL",
      description:
        "APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multidimensional array. It uses a large range of special graphic symbols to represent most functions and operators, leading to very concise code. It has been an important influence on the development of concept modeling, spreadsheets, functional programming, and computer math packages. It has also inspired several other programming languages.",
      firstAppeared: "1966-01-01",
      websites: [
        { href: "https://aplwiki.com/", title: "aplwiki.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/APL_programming_language", title: "APL", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "APL", url: "/images/plangs/a/apl/logo.png" }],
    })
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
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+ray-tracer",
      "tag+server",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic"]);
}
