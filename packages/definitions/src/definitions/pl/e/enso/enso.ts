import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+enso", {
      name: "Enso",
      description:
        "Enso is a visual, data-centric programming language designed for data professionals to efficiently collaborate. It seamlessly combines visual programming with a high-performance engine, offering both scalability and intuitive design.",
      keywords: ["data-centric", "enso", "visual programming"],
      extensions: [".enso"],
      releases: [{ version: "2.0.0", name: "Enso 2.0", date: "2022-09-15" }],
      extGithubPath: "enso-org/enso",
      extHomeURL: "https://ensoanalytics.com/",
      created: "2021",
    })
    .relLicenses.add(["license+agpl", "license+apache"])
    .relParadigms.add(["paradigm+functional", "paradigm+multi", "paradigm+visual"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+windows"])
    .relTags.add(["tag+analysis", "tag+viz", "tag+workflow"])
    .relTsys.add(["tsys+dynamic", "tsys+gradual"])
    .relWrittenIn.add(["pl+rust", "pl+scala"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
