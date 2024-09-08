import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+cobra", {
      images: [],
      name: "Cobra",
      description:
        "Cobra is a discontinued general-purpose, object-oriented programming language. Cobra is designed by Charles Esterbrook, and runs on the Microsoft .NET and Mono platforms. It is strongly influenced by Python, C#, Eiffel, Objective-C, and other programming languages. It supports both static and dynamic typing. It has support for unit tests and contracts. It has lambda expressions, closures, list comprehensions, and generators.",
      websites: [
        { href: "http://cobra-language.com/", title: "cobra-language.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Cobra_(programming_language)", title: "Cobra", kind: "wikipedia" },
      ],
      extensions: [".cobra"],
      releases: [{ version: "0.9.6", date: "2013-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+eiffel"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+oop"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"]);
}
