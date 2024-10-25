import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+inko", {
      name: "Inko",
      description:
        "Inko is a programming language designed for writing concurrent and highly-parallel applications. It is a safe language that features actor-based concurrency, immutability by default, and a garbage-collected runtime, making it suitable for modern systems programming.",
      keywords: ["inko", "concurrent", "actor"],
      websites: [
        { title: "Inko", href: "https://inko-lang.org/", kind: "homepage" },
        { title: "Inko on GitHub", href: "https://github.com/inko-lang/inko", kind: "repository" },
      ],
      extensions: [".inko"],
      year: 2016,
      releases: [
        { version: "0.9.0", name: "Inko 0.9.0", date: "2019-01-01" },
        { version: "1.0.0", name: "Inko 1.0.0", date: "2020-06-01" },
      ],
    })
    .addInfluencedBy(["pl+erlang", "pl+golang"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+message-passing", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux"])
    .addTags(["tag+automation"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+rust"]);
}
