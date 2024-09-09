import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+racket", {
      images: [{ kind: "logo", title: "Racket", url: "/images/plangs/r/racket/logo.png" }],
      name: "Racket",
      description:
        "Racket is a general-purpose, multi-paradigm programming language. The Racket language is a modern dialect of Lisp and a descendant of Scheme. It is designed as a platform for programming language design and implementation. In addition to the core Racket language, Racket is also used to refer to the family of programming languages and set of tools supporting development on and with Racket. Racket is also used for scripting, computer science education, and research.",
      websites: [
        { href: "https://racket-lang.org/", title: "racket-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Racket_(programming_language)", title: "Racket", kind: "wikipedia" },
      ],
      extensions: [".rkt"],
      releases: [{ version: "8.14", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+eiffel", "pl+r5rs", "pl+scheme"])
    .addLicenses(["lic+apache", "lic+mit"])
    .addParadigms([
      "para+functional",
      "para+imperative",
      "para+logic",
      "para+metaprogramming",
      "para+modular",
      "para+multi",
      "para+oop",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);
}
