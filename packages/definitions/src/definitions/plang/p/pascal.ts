import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pascal", {
      name: "Pascal",
      description:
        "An imperative and procedural language, designed by Niklaus Wirth as a small, efficient language intended to encourage good programming practices using structured programming and data structuring. It is named after the French mathematician and philosopher Blaise Pascal.",
      shortDesc:
        "An imperative and procedural language designed by Niklaus Wirth, known for encouraging structured programming and data structuring.",
      created: "1970",
      extensions: [".p", ".pas", ".pp"],
      extRedditPath: "pascal",
      extWikipediaPath: "Pascal_(programming_language)",
      githubColor: "#E3F171",
      githubLangId: "281",
      githubName: "Pascal",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["pascal", "wirth"],
      languishRanking: 72,
      stackovTags: ["pascal"],
    })
    .relParadigms.add("para+imperative", "para+procedural", "para+structured")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+edu", "tag+framework", "tag+games", "tag+interpreters")
    .relTypeSystems.add("tsys+safe", "tsys+static", "tsys+strong");
}
