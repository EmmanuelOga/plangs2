import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+biomejs", {
      name: "Biome",
      description:
        "A toolchain for web projects, aimed to provide functionalities to maintain them. Biome offers formatter and linter, usable via CLI and LSP.",
      shortDesc: "Offers a formatter and linter, usable via CLI and LSP.",
      extGithubPath: "biomejs/biome",
      extHomeURL: "https://biomejs.dev/",
    })
    .relPlangs.add(
      "pl+css",
      "pl+html",
      "pl+javascript",
      "pl+json",
      "pl+typescript",
    )
    .relPlatforms.add(
      "plat+cross",
      "plat+linux",
      "plat+nodejs",
      "plat+wasm",
      "plat+windows",
    )
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+javascript", "pl+rust", "pl+typescript");
}
