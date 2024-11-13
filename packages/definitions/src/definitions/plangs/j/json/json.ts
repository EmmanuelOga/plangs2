import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+json", {
      name: "JSON",
      languishRanking: 27,
      websites: [
        { title: "JSON on Wikipedia", href: "https://en.wikipedia.org/wiki/JSON", kind: "wikipedia" },
        { title: "JSON Official Website", href: "https://json.org", kind: "homepage" },
      ],
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
      year: 2001,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Initial JSON Specification", date: "2013" }],
    })
    .addParadigms(["paradigm+data-exchange"])
    .addPlatforms(["plat+cross"])
    .addLibs(["lib+flask", "lib+msgspec"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
