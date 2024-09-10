import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xtend", {
      name: "Xtend",
      description:
        "Xtend is a general-purpose high-level programming language for the Java Virtual Machine. Syntactically and semantically Xtend has its roots in the Java programming language but focuses on a more concise syntax and some additional functionality such as type inference, extension methods, and operator overloading. Being primarily an object-oriented language, it also integrates features known from functional programming, e.g. lambda expressions. Xtend is statically typed and uses Java's type system without modifications. It is compiled to Java code and thereby seamlessly integrates with all existing Java libraries.",
      firstAppeared: "2011-01-01",
      websites: [
        { href: "https://eclipse.dev/Xtext/xtend/", title: "eclipse.dev/Xtext/xtend/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Xtend", title: "Xtend", kind: "wikipedia" },
      ],
      releases: [{ version: "2.25.0", date: "2021-01-01" }],
    })
    .addInfluencedBy(["pl+groovy", "pl+scala"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
