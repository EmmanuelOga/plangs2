import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+json", {
      name: "JSON",
      languishRanking: 27,
      stackovTags: ["json"],
      githubName: "JSON",
      githubLangId: "174",
      githubColor: "#292929",
      githubPopular: false,
      githubType: "data",
      description:
        "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
      keywords: ["data interchange", "javascript object notation", "json", "lightweight"],
      extensions: [".json"],
      releases: [{ version: "1.0", name: "Initial JSON Specification", date: "2013" }],
      extWikipediaPath: "JSON",
      extHomeURL: "https://json.org",
      created: "2001",
      isTranspiler: false,
      shortDesc:
        "JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
    })
    .relParadigms.add("para+data-exchange")
    .relPlatforms.add("plat+cross");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
