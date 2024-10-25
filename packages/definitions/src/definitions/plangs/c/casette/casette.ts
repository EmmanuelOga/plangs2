import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+casette", {
      name: "Casette",
      description:
        "Cassette is a simple language for personal programming. It's designed for solo programmers working on non-enterprise projects. It's DIY, roll your own, batteries-not-included. It's for fun.",
      keywords: ["casette"],
      websites: [{ title: "Cassette Lang", href: "https://cassette-lang.com/", kind: "homepage" }],
      extensions: [".cassette"],
      year: 2021,
      releases: [{ version: "1.0.0", name: "Initial Release", date: "2021-05-01" }],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+dataflow", "paradigm+declarative", "paradigm+dsl", "paradigm+event-driven"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+dsl", "tag+workflow"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+python"]);
}
