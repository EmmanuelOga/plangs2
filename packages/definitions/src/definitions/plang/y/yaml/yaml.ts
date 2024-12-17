import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+yaml", {
      name: "YAML",
      description:
        "Human-readable data serialization language commonly used for configuration files and data exchange, known for its minimal syntax and complex data structure representation. YAML is particularly popular for configuration files, allowing for nesting and structures similar to Python but using indentation-based syntax.",
      shortDesc: "Human-readable data serialization language for configuration files and data exchange, featuring minimal syntax.",
      created: "2001",
      extensions: [".yaml", ".yml"],
      extHomeURL: "https://yaml.org/",
      extRedditPath: "yaml",
      extWikipediaPath: "YAML",
      githubColor: "#cb171e",
      githubLangId: "407",
      githubName: "YAML",
      githubPopular: false,
      githubType: "data",
      isTranspiler: false,
      keywords: ["YAML", "configuration files", "data serialization"],
      languishRanking: 59,
      releases: [{ version: "1.2.2", name: "YAML 1.2.2", date: "2021-10-01" }],
      stackovTags: ["yaml"],
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-exchange", "para+declarative", "para+markup")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataflow", "tag+scripting");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
