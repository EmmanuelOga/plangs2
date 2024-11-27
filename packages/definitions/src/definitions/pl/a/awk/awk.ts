import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+awk", {
      name: "AWK",
      description:
        "AWK is a domain-specific language designed for text processing and is typically used as a data extraction and reporting tool. It operates as a filter and is a standard feature of most Unix-like operating systems. AWK is recognized for its terseness and power in text processing, facilitating one-liner programs.",
      keywords: ["awk", "text processing", "unix utilities"],
      extensions: [".awk", ".gawk", ".mawk", ".nawk"],
      stackovTags: ["awk"],
      githubName: "Awk",
      githubLangId: "28",
      githubColor: "#c30e9b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "AWK",
      extRedditPath: "awk",
      created: "1977",
    })
    .relInfluencedBy.add(["pl+c", "pl+sed"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+data-driven", "para+procedural", "para+scripting"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+dataflow", "tag+editor", "tag+interpreters", "tag+scripting", "tag+shell"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
