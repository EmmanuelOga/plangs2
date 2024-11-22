import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after the French mathematician and philosopher Blaise Pascal.",
      keywords: ["pascal", "programming language", "structured programming"],
      extensions: [".p", ".pas", ".pp"],
      stackovTags: ["pascal"],
      githubName: "Pascal",
      languishRanking: 72,
      githubLangId: "281",
      githubColor: "#E3F171",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Pascal_(programming_language)",
      extRedditPath: "pascal",
      created: "1970",
    })
    .relParadigms.add(["paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .relPlatforms.add(["plat+bsd", "plat+cross", "plat+dos", "plat+linux", "plat+windows"])
    .relTags.add(["tag+compiler", "tag+edu", "tag+framework", "tag+games", "tag+interpreters"])
    .relTsys.add(["tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
