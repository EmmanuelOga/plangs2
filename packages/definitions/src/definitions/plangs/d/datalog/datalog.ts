import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datalog", {
      name: "Datalog",
      description:
        "Datalog is a declarative logic programming language. While it is syntactically a subset of Prolog, Datalog generally uses a bottom-up rather than top-down evaluation model. This difference yields significantly different behavior and properties from Prolog. It is often used as a query language for deductive databases. Datalog has been applied to problems in data integration, networking, program analysis, and more.",
      keywords: ["datalog", "logic programming", "query language", "deductive databases"],
      websites: [{ title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog", kind: "wikipedia" }],
      extensions: [".dl"],
      year: 1977,
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addParadigms(["paradigm+declarative", "paradigm+logic", "paradigm+rule-based"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
