import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mlton", {
      name: "MLton",
      description:
        "MLton is a whole-program optimizing compiler for the programming language Standard ML. MLton development began in 1997, and continues with a worldwide community of developers and users, who have helped to port MLton to several computing platforms. It is free and open-source software released under a Historical Permission Notice and Disclaimer. MLton was a participating organization in the 2013 Google Summer of Code.",
      firstAppeared: "1997-01-01",
      extensions: [".sml"],
      websites: [
        { href: "http://mlton.org/", title: "mlton.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/MLton", title: "MLton", kind: "wikipedia" },
      ],
    })
    .addDialectOf(["pl+ml", "pl+standard-ml"])
    .addImplements(["pl+standard-ml"])
    .addInfluencedBy(["pl+standard-ml"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
