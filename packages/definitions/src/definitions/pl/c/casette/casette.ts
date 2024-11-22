import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+casette", {
      name: "Cassette",
      description: "Cassette is a simple language for personal programming. It's DIY, roll your own, batteries-not-included. It's for fun.",
      keywords: ["cassette"],
      extensions: [".cassette"],
      releases: [
        { version: "2.0.0", date: "2023-01-01" },
        { version: "1.0.0", date: "2021-05-01" },
      ],
      isTranspiler: true,
      extHomeURL: "https://cassette-lang.com/",
      created: "2021",
    })
    .relCompilesTo.add(["pl+c"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add([
      "paradigm+dataflow",
      "paradigm+declarative",
      "paradigm+dsl",
      "paradigm+event-driven",
      "paradigm+functional",
      "paradigm+interpreted",
    ])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+audio-dev", "tag+workflow"])
    .relTsys.add(["tsys+dynamic"])
    .relWrittenIn.add(["pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
