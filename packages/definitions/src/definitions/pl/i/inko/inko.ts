import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+inko", {
      name: "Inko",
      description:
        "Inko is a programming language designed for building concurrent software efficiently and safely. It features deterministic automatic memory management, move semantics, static typing, and type-safe concurrency. It is particularly known for avoiding runtime errors, race conditions, and unpredictable performance.",
      keywords: ["concurrent", "inko", "safe", "type-safe"],
      extensions: [".inko"],
      year: 2016,
      releases: [
        { version: "0.9.0", name: "Inko 0.9.0", date: "2019-01-01" },
        { version: "1.0.0", name: "Inko 1.0.0", date: "2020-06-01" },
      ],
      isMainstream: false,
      extGithubPath: "inko-lang/inko",
      extHomeURL: "https://inko-lang.org/",
    })
    .addInfluencedBy(["pl+erlang", "pl+go"])
    .addLicenses(["license+mit", "license+mpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+message-passing", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux"])
    .addTags(["tag+automation"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
