import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+dataflow", "para+declarative", "para+dsl", "para+event-driven", "para+functional", "para+interpreted"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+audio-dev", "tag+workflow"])
    .relTypeSystem.add(["tsys+dynamic"])
    .relWrittenInPlang.add(["pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
