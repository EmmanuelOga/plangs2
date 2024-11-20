import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+awk", {
      name: "AWK",
      description:
        "AWK is a domain-specific language designed for text processing and is typically used as a data extraction and reporting tool. It operates as a filter and is a standard feature of most Unix-like operating systems. AWK is recognized for its terseness and power in text processing, facilitating one-liner programs.",
      keywords: ["awk", "text processing", "unix utilities"],
      extensions: [".awk", ".gawk", ".mawk", ".nawk"],
      year: 1977,
      stackovTags: ["awk"],
      githubName: "Awk",
      githubLangId: "28",
      githubColor: "#c30e9b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "AWK",
      extRedditPath: "awk",
    })
    .addInfluencedBy(["pl+c", "pl+sed"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+data-driven", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataflow", "tag+editor", "tag+interpreters", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
