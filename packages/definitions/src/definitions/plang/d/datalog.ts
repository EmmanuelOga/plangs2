import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+datalog", {
      name: "Datalog",
      description:
        "Declarative logic programming language that serves as a syntactic subset of Prolog, using a bottom-up evaluation model to deduce facts. It is extensively used as a query language for deductive databases, aiding in data integration, networking, program analysis, and more.",
      shortDesc:
        "Declarative logic programming language and subset of Prolog, used for deductive databases.",
      created: "1977",
      extensions: [".dl"],
      extHomeURL: "http://datalog-specs.info",
      extWikipediaPath: "Datalog",
      isTranspiler: false,
      keywords: [
        "datalog",
        "declarative",
        "deductive databases",
        "logic programming",
        "query language",
      ],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relParadigms.add("para+declarative", "para+logic")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreters",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+untyped", "tsys+weak");
}
