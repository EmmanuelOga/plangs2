import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+self", {
      name: "Self",
      description:
        "Prototype-based dynamic object-oriented programming language, environment, and virtual machine focused on principles like simplicity and uniformity. It allows direct and physical interaction with objects and integrates a programming environment for modifying objects. Influenced by Smalltalk and APL, it influenced languages like JavaScript and NewtonScript.",
      shortDesc:
        "Prototype-based dynamic OOP language, influenced by Smalltalk and APL, impacting JavaScript.",
      created: "1987",
      extensions: [".self"],
      extGithubPath: "russellallen/self",
      extHomeURL: "http://selflanguage.org/",
      extWikipediaPath: "Self_(programming_language)",
      githubColor: "#0579aa",
      githubLangId: "345",
      githubName: "Self",
      githubPopular: false,
      githubStars: 718,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["dynamic language", "object-oriented", "prototype", "self"],
      languishRanking: 296,
      releases: [{ version: "2024.1", name: "", date: "2024-08-28" }],
      stackovTags: ["self"],
    })
    .relInfluencedBy.add("pl+apl")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+general-purpose", "para+oop", "para+prototype")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+windows")
    .relTags.add(
      "tag+4gl",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");
}
