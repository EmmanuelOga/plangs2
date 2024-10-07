import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shex", {
      name: "ShEx - Shape Expressions",
      description: "Shape Expressions (ShEx)  is a data modelling language for validating and describing a Resource Description Framework (RDF).",
      websites: [
        { href: "https://www.w3.org/community/shex/", title: "www.w3.org/community/shex/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/ShEx", title: "ShEx - Shape Expressions", kind: "wikipedia" },
      ],
      releases: [{ version: "2.1", date: "2018-01-01" }],
    })
    .addParadigms(["paradigm+validation"])
    .addTags(["tag+framework"])
    .addWrittenIn(["pl+javascript", "pl+scala"]);
}
