import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+boo", {
      name: "Boo",
      description:
        "Boo is an object-oriented, statically typed, general-purpose programming language that seeks to make use of the Common Language Infrastructure's support for Unicode, internationalization, and web applications, while using a Python-inspired syntax and a special focus on language and compiler extensibility. Some features of note include type inference, generators, multimethods, optional duck typing, macros, true closures, currying, and first-class functions.",
      keywords: ["boo"],
      websites: [
        { title: "github.com/boo-lang", href: "https://github.com/boo-lang", kind: "repository" },
        { title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".boo"],
      firstAppeared: "2003-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.9.7", name: "Boo 0.9.7", date: "2013-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+python"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+.net", "plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+games", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c-sharp"]);
}
