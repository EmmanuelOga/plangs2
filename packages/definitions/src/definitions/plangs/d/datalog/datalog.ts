import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datalog", {
      name: "Datalog",
      description:
        "Datalog is a declarative logic programming language that serves as a syntactic subset of Prolog, using a bottom-up evaluation model to deduce facts. It is extensively used as a query language for deductive databases, aiding in data integration, networking, program analysis, and more.",
      keywords: ["datalog", "declarative", "deductive databases", "logic programming", "query language"],
      websites: [
        { title: "Datalog - Wikipedia", href: "https://en.wikipedia.org/wiki/Datalog", kind: "wikipedia" },
        { title: "Datalog Specifications", href: "http://datalog-specs.info", kind: "other" },
      ],
      extensions: [".dl"],
      year: 1977,
      isMainstream: false,
    })
    .addDialectOf(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addParadigms(["paradigm+declarative", "paradigm+logic", "paradigm+rule-based"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+untyped", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
