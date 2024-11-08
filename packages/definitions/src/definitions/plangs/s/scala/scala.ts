import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scala", {
      name: "Scala",
      description:
        "Scala (/ˈskɑːlɑː/ SKAH-lah) is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are intended to address criticisms of Java.",
      keywords: ["scala"],
      websites: [
        { title: "www.scala-lang.org", href: "http://www.scala-lang.org/", kind: "homepage" },
        { title: "Scala", href: "https://en.wikipedia.org/wiki/Scala_programming_language", kind: "wikipedia" },
        { title: "Scala on Reddit", kind: "reddit", href: "https://reddit.com/r/scala" },
        { title: "Scala on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Scala_(programming_language)" },
      ],
      extensions: [".sc", ".scala"],
      year: 2004,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "3.4.0", name: "Scala 3.4.0", date: "2024-01-01" }],
      github: { name: "Scala", langId: "341", color: "#c22d40", popular: true, type: "programming" },
      stackovTags: ["scala"],
    })
    .addInfluencedBy([
      "pl+common-lisp",
      "pl+eiffel",
      "pl+erlang",
      "pl+f-sharp",
      "pl+haskell",
      "pl+lisp",
      "pl+ml",
      "pl+ocaml",
      "pl+r5rs",
      "pl+scheme",
      "pl+standard-ml",
    ])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+java", "plat+nodejs"])
    .addTags([
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
