import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datomic", {
      name: "Datomic",
      description:
        "Datomic is a distributed database and implementation of Datalog. It has ACID transactions, joins, and a logical query language, Datalog. A distinguishing feature of Datomic is that time is a basic feature of data entities.",
      websites: [
        { href: "http://datomic.com/", title: "datomic.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Datomic", title: "Datomic", kind: "wikipedia" },
      ],
      releases: [{ version: "1.0.7180" }],
    })
    .addDialectOf(["pl+datalog"])
    .addLicenses(["license+apache"])
    .addWrittenIn(["pl+clojure"]);
}
