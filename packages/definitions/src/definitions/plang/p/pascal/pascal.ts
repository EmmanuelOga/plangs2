import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "Pascal is an imperative and procedural programming language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after the French mathematician and philosopher Blaise Pascal.",
      keywords: ["pascal", "wirth"],
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
      isTranspiler: false,
      shortDesc:
        "Pascal is an imperative and procedural programming language designed by Niklaus Wirth, known for encouraging structured programming and data structuring.",
    })
    .relParadigms.add("para+imperative", "para+procedural", "para+structured")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+edu", "tag+framework", "tag+games", "tag+interpreters")
    .relTypeSystems.add("tsys+safe", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
