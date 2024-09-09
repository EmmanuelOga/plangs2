import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+scala", {
      images: [{ kind: "other", title: "Scala", url: "/images/plangs/s/scala/other.png" }],
      name: "Scala",
      description:
        "Scala (/ˈskɑːlɑː/ SKAH-lah) is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are intended to address criticisms of Java.",
      websites: [
        { href: "http://www.scala-lang.org/", title: "www.scala-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Scala_programming_language", title: "Scala", kind: "wikipedia" },
      ],
      extensions: [".sc", ".scala"],
      releases: [{ version: "3.4.0", date: "2024-01-01" }],
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
    .addLicenses(["lic+apache"])
    .addParadigms(["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+oop"])
    .addPlatforms(["platf+java", "platf+nodejs"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
