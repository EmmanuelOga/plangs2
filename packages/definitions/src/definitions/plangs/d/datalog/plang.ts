import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+datalog", {
      name: "Datalog",
      description:
        "Datalog is a declarative logic programming language.  While it is syntactically a subset of Prolog, Datalog generally uses a bottom-up rather than top-down evaluation model.  This difference yields significantly different behavior and properties from Prolog.  It is often used as a query language for deductive databases. Datalog has been applied to problems in data integration, networking, program analysis, and more.",
      firstAppeared: "1977-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/Datalog", title: "Datalog", kind: "wikipedia" }],
    })
    .addDialectOf(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addParadigms(["para+declarative", "para+logic"])
    .addTypeSystems(["tsys+weak"]);
}
