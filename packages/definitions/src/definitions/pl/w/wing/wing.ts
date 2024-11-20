import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+wing", {
      name: "Wing",
      description:
        "Wing is a high-level programming language designed for cloud infrastructure management, providing developers with simplified syntax and powerful features for building and managing cloud-native and serverless applications effectively. Designed to reduce complexity, Wing offers enhanced productivity in interacting with cloud services, especially AWS.",
      keywords: ["cloud", "programming", "serverless"],
      extensions: [".w"],
      releases: [{ version: "1.0.0", name: "Wing Initial Release", date: "2022-09-01" }],
      extHomeURL: "https://www.winglang.io/",
      created: "2022",
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+event-driven", "paradigm+multi", "paradigm+reactive", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+framework", "tag+scripting"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+typescript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
