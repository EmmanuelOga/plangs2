import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+wing", {
      name: "Wing",
      description:
        "Wing is a high-level programming language tailored for cloud infrastructure management, streamlining development for cloud-native and serverless applications with simplified syntax and robust features, enhancing productivity for cloud services like AWS.",
      shortDesc: "Wing is designed for managing cloud infrastructure and serverless applications.",
      created: "2022",
      extensions: [".w", ".wing"],
      extGithubPath: "winglang/wing",
      extHomeURL: "https://www.winglang.io/",
      githubStars: 5100,
      isTranspiler: false,
      keywords: ["cloud", "infrastructure", "serverless"],
      releases: [{ version: "1.0.0", name: "Wing Initial Release", date: "2022-09-01" }],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+event-driven", "para+multi", "para+reactive", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+framework", "tag+scripting")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+typescript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
