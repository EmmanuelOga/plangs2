import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cobra", {
      name: "Cobra",
      description:
        "Cobra is a discontinued general-purpose, object-oriented programming language. Cobra is designed by Charles Esterbrook, and runs on the Microsoft .NET and Mono platforms. It is strongly influenced by Python, C#, Eiffel, Objective-C, and other programming languages. It supports both static and dynamic typing. It has support for unit tests and contracts. It has lambda expressions, closures, list comprehensions, and generators.",
      firstAppeared: "2006-01-01",
      extensions: [".cobra"],
      websites: [
        { href: "http://cobra-language.com/", title: "cobra-language.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)", title: "Cobra", kind: "wikipedia" },
      ],
      releases: [{ version: "0.9.6", date: "2013-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+eiffel"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+multi", "paradigm+oop"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"]);
}
