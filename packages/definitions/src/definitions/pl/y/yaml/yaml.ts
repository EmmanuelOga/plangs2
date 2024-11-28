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
        "YAML is a human-readable data serialization language commonly used for configuration files and data interchange where data is stored or transmitted. It is known for its minimal syntax and ability to represent complex data structures, such as lists and associative arrays. YAML is designed to be easy to read and write, with indentation-based nesting similar to Python, making it suitable for configuration and data interchange tasks.",
      keywords: ["YAML", "configuration files", "data serialization"],
      extensions: [".yaml", ".yml"],
      releases: [
        { version: "1.0", name: "YAML 1.0", date: "2004-01-29" },
        { version: "1.1", name: "YAML 1.1", date: "2005-01-18" },
        { version: "1.2.0", name: "YAML 1.2.0", date: "2009-07-21" },
        { version: "1.2.1", name: "YAML 1.2.1", date: "2009-10-01" },
        { version: "1.2.2", name: "YAML 1.2.2", date: "2021-10-01" },
      ],
      extWikipediaPath: "YAML",
      extRedditPath: "yaml",
      created: "2001",
    })
    .relParadigms.add("para+data-exchange", "para+declarative")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+scripting");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
