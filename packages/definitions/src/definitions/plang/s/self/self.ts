import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+self", {
      name: "Self",
      description:
        "Self is a prototype-based dynamic object-oriented programming language, environment, and virtual machine focused on principles like simplicity and uniformity. It allows direct and physical interaction with objects and integrates a programming environment for modifying objects. Influenced by Smalltalk and APL, it influenced languages like JavaScript and NewtonScript.",
      keywords: ["dynamic language", "object-oriented", "prototype", "self"],
      releases: [
        { version: "2024.1", name: "", date: "2024-08-28" },
        { version: "2017.1", name: "", date: "2017-05-01" },
      ],
      stackovTags: ["self"],
      githubName: "Self",
      languishRanking: 296,
      githubLangId: "345",
      githubColor: "#0579aa",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Self_(programming_language)",
      extHomeURL: "http://www.selflanguage.org/",
      created: "1987",
    })
    .relInfluencedBy.add("pl+apl")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+oop", "para+prototype")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+windows")
    .relTags.add("tag+4gl", "tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreters", "tag+viz")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
