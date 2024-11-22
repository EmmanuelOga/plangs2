import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rye", {
      name: "Rye",
      description:
        "Rye is a high-level, interpreted programming language focused on simplicity, expressiveness, and modern coding paradigms. It is designed to make programming more intuitive and accessible, with features that emphasize functional programming and ease of use.",
      keywords: ["programming language", "rye", "ryelang"],
      extensions: [".ry"],
      releases: [
        { version: "0.0.26", name: "Rye 0.0.26", date: "2024-10-01" },
        { version: "1.0", name: "Rye 1.0", date: "2022-01-01" },
        { version: "1.1", name: "Rye 1.1", date: "2023-03-10" },
      ],
      extHomeURL: "https://ryelang.org/",
      created: "2022",
    })
    .relInfluencedBy.add(["pl+factor", "pl+rebol", "pl+red"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+functional", "paradigm+interpreted", "paradigm+multi", "paradigm+scripting"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .relTags.add(["tag+app", "tag+cli", "tag+scripting"])
    .relTsys.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenIn.add(["pl+go"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
