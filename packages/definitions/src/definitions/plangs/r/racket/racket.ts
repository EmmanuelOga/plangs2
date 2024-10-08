import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+racket", {
      name: "Racket",
      description:
        "Racket is a general-purpose, multi-paradigm programming language. The Racket language is a modern dialect of Lisp and a descendant of Scheme. It is designed as a platform for programming language design and implementation. In addition to the core Racket language, Racket is also used to refer to the family of programming languages and set of tools supporting development on and with Racket. Racket is also used for scripting, computer science education, and research.",
      keywords: ["racket"],
      websites: [
        { title: "racket-lang.org", href: "https://racket-lang.org/", kind: "homepage" },
        { title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".rkt"],
      firstAppeared: "1995-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "8.14", name: "Racket 8.14", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+eiffel", "pl+r5rs", "pl+scheme"])
    .addLicenses(["license+apache", "license+mit"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+logic",
      "paradigm+metaprogramming",
      "paradigm+modular",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
      "tag+ui",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);
}
