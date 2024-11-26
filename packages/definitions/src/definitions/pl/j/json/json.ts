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
        "JSON (JavaScript Object Notation) is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of name–value pairs and arrays. It is commonly used in web applications.",
      keywords: ["JSON", "JavaScript Object Notation", "data interchange", "web applications"],
      extensions: [".json"],
      releases: [{ version: "1.0", name: "Initial JSON Specification", date: "2013" }],
      extWikipediaPath: "JSON",
      extHomeURL: "https://json.org",
      created: "2001",
    })
    .relParadigm.add(["para+data-exchange"])
    .relPlatform.add(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
