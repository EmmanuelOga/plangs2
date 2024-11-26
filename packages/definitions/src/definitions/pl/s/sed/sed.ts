import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+sed", {
      name: "sed",
      description:
        'sed ("stream editor") is a Unix utility that parses and transforms text, using a simple, compact programming language. It was developed in the early 1970s by Lee E. McMahon of Bell Labs, and is available today for most operating systems. sed was based on the scripting features of the interactive editor ed ("editor", 1971) and the earlier qed ("quick editor", 1965–66). It was one of the earliest tools to support regular expressions, and remains widely used for text processing, most notably with the substitution command. Popular alternative tools for plaintext string manipulation and "stream editing" include AWK and Perl.',
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
    })
    .relLicense.add(["license+public-domain"])
    .relParadigm.add(["para+procedural", "para+scripting"])
    .relPlatforms.add(["plat+bsd", "plat+cross", "plat+linux"])
    .relTags.add(["tag+cli", "tag+editor", "tag+scripting", "tag+shell"])
    .relTsys.add(["tsys+untyped"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
