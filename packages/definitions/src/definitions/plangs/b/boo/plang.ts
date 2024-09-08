import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+boo", {
      images: [],
      name: "Boo",
      description:
        "Boo is an object-oriented, statically typed, general-purpose programming language that seeks to make use of the Common Language Infrastructure's support for Unicode, internationalization, and web applications, while using a Python-inspired syntax and a special focus on language and compiler extensibility. Some features of note include type inference, generators, multimethods, optional duck typing, macros, true closures, currying, and first-class functions.",
      websites: [
        { href: "https://github.com/boo-lang", title: "github.com/boo-lang", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Boo_(programming_language)", title: "Boo", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.9.7", date: "2013-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+oop"])
    .addTypeSystems(["tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c-sharp"]);
}
