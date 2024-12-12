import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sed", {
      name: "sed",
      description:
        'sed ("stream editor") is a Unix utility that parses and transforms text, using a simple, compact programming language, developed in the early 1970s by Lee E. McMahon of Bell Labs. It was influenced by and based on the scripting features of the interactive editor ed and the earlier qed. Notable for its early support of regular expressions, sed remains widely used for text processing, particularly with its substitution command.',
      keywords: ["sed", "stream editor"],
      extensions: [".sed"],
      releases: [{ version: "1.0", name: "Initial Version", date: "1974-01-01" }],
      stackovTags: ["sed"],
      githubName: "sed",
      languishRanking: 82,
      githubLangId: "847830017",
      githubColor: "#64b970",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Sed",
      created: "1974",
      isTranspiler: false,
      shortDesc: "sed is a Unix utility that parses and transforms text, using a compact programming language developed by Lee E. McMahon.",
    })
    .relLicenses.add("lic+public-domain")
    .relParadigms.add("para+procedural", "para+scripting")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux")
    .relTags.add("tag+cli", "tag+editor", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+untyped")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
