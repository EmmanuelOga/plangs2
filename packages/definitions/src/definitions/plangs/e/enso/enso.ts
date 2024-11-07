import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+enso", {
      name: "Enso",
      description:
        "Enso is a visual, data-centric programming language designed for data professionals to efficiently collaborate. It seamlessly combines visual programming with a high-performance engine, offering both scalability and intuitive design.",
      keywords: ["enso", "visual programming", "data-centric"],
      websites: [
        { title: "Enso Analytics", href: "https://ensoanalytics.com/", kind: "homepage" },
        { title: "Enso on GitHub", href: "https://github.com/enso-org/enso", kind: "repository" },
      ],
      extensions: [".enso"],
      year: 2021,
      releases: [{ version: "2.0.0", name: "Enso 2.0", date: "2022-09-15" }],
    })
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+data-centric", "paradigm+functional", "paradigm+multi", "paradigm+visual"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+analysis", "tag+viz", "tag+workflow"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual"])
    .addWrittenIn(["pl+rust", "pl+scala"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
