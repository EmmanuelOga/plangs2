import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+self", {
      name: "Self",
      description:
        "Self is a prototype-based dynamic object-oriented programming language, environment, and virtual machine focused on principles like simplicity and uniformity. It allows direct and physical interaction with objects and integrates a programming environment for modifying objects. Influenced by Smalltalk and APL, it influenced languages like JavaScript and NewtonScript.",
      keywords: ["dynamic language", "object-oriented", "prototype", "self"],
      websites: [
        { title: "Self | Welcome", href: "http://www.selflanguage.org/", kind: "homepage" },
        { title: "Self (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Self_(programming_language)", kind: "wikipedia" },
      ],
      year: 1987,
      isMainstream: false,
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
    })
    .addInfluencedBy(["pl+apl"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+oop", "paradigm+prototype"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+windows"])
    .addTags(["tag+4gl", "tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
