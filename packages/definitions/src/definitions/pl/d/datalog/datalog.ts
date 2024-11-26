import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relInfluence.add(["pl+prolog"])
    .relParadigm.add(["para+declarative", "para+logic"])
    .relTag.add(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+viz"])
    .relTypeSystem.add(["tsys+untyped", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
