import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relLicenses.add(["lic+mit"])
    .relParadigms.add(["para+declarative", "para+event-driven", "para+multi", "para+reactive", "para+scripting"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+framework", "tag+scripting"])
    .relTypeSystems.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenWith.add(["pl+typescript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
