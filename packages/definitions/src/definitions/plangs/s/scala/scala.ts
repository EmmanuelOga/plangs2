import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scala", {
      name: "Scala",
      description:
        "Scala (/ˈskɑːlɑː/ SKAH-lah) is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are intended to address criticisms of Java.",
      firstAppeared: "2004-01-01",
      extensions: [".sc", ".scala"],
      websites: [
        { href: "http://www.scala-lang.org/", title: "www.scala-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Scala_programming_language", title: "Scala", kind: "wikipedia" },
      ],
      releases: [{ version: "3.4.0", date: "2024-01-01" }],
      images: [{ kind: "other", title: "Scala", url: "/images/plangs/s/scala/other.png" }],
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
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+scripting",
      "tag+testing",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
