import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datalog", {
      name: "Datalog",
      description:
        "Datalog is a declarative logic programming language that serves as a syntactic subset of Prolog, using a bottom-up evaluation model to deduce facts. It is extensively used as a query language for deductive databases, aiding in data integration, networking, program analysis, and more.",
      keywords: ["datalog", "declarative", "deductive databases", "logic programming", "query language"],
      extensions: [".dl"],
      extWikipediaPath: "Datalog",
      extHomeURL: "http://datalog-specs.info",
      created: "1977",
    })
    .relDialectOf.add(["pl+prolog"])
    .relInfluencedBy.add(["pl+prolog"])
    .relParadigms.add(["paradigm+declarative", "paradigm+logic"])
    .relTags.add(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+viz"])
    .relTsys.add(["tsys+untyped", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
