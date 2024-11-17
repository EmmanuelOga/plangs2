import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+enso", {
      name: "Enso",
      description:
        "Enso is a visual, data-centric programming language designed for data professionals to efficiently collaborate. It seamlessly combines visual programming with a high-performance engine, offering both scalability and intuitive design.",
      keywords: ["data-centric", "enso", "visual programming"],
      extensions: [".enso"],
      year: 2021,
      releases: [{ version: "2.0.0", name: "Enso 2.0", date: "2022-09-15" }],
      isMainstream: true,
      extGithubPath: "enso-org/enso",
      extHomeURL: "https://ensoanalytics.com/",
    })
    .addLicenses(["license+agpl", "license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+visual"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+viz", "tag+workflow"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"])
    .addWrittenIn(["pl+rust", "pl+scala"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
