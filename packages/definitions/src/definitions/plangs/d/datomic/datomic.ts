import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datomic", {
      name: "Datomic",
      description:
        "Datomic is a distributed database and implementation of Datalog. It supports ACID transactions, joins, and a logical query language, Datalog. A distinguishing feature of Datomic is its immutable data model where time is a basic feature of data entities, allowing for temporal queries.",
      keywords: ["datomic"],
      websites: [
        { title: "datomic.com", href: "http://datomic.com/", kind: "homepage" },
        { title: "Datomic", href: "https://en.wikipedia.org/wiki/Datomic", kind: "wikipedia" },
      ],
      firstAppeared: "2012-08-10",
      images: [
        { kind: "logo", title: "Datomic Logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Datomic_logo.png", width: 512, height: 512 },
      ],
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.0.7180", name: "Datomic 1.0", date: "2012-08-10" }],
    })
    .addDialectOf(["pl+datalog"])
    .addInfluencedBy(["pl+clojure"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative", "paradigm+distributed", "paradigm+query"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+dataflow", "tag+dbms"])
    .addWrittenIn(["pl+clojure"]);
}
