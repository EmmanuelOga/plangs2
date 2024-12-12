import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+yaml", {
      name: "YAML",
      languishRanking: 59,
      stackovTags: ["yaml"],
      githubName: "YAML",
      githubLangId: "407",
      githubColor: "#cb171e",
      githubPopular: false,
      githubType: "data",
      description:
        "YAML is a human-readable data serialization language commonly used for configuration files and data exchange, known for its minimal syntax and complex data structure representation. YAML is particularly popular for configuration files, allowing for nesting and structures similar to Python but using indentation-based syntax.",
      keywords: ["YAML", "configuration files", "data serialization"],
      extensions: [".yaml", ".yml"],
      releases: [{ version: "1.2.2", name: "YAML 1.2.2", date: "2021-10-01" }],
      extWikipediaPath: "YAML",
      extRedditPath: "yaml",
      created: "2001",
      extHomeURL: "https://yaml.org/",
      isTranspiler: false,
      shortDesc: "YAML is a human-readable data serialization language for configuration files and data exchange, featuring minimal syntax.",
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-exchange", "para+declarative")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataflow", "tag+scripting");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
