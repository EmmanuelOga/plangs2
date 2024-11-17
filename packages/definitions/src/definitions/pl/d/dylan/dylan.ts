import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dylan", {
      name: "Dylan",
      description:
        "Dylan is a multi-paradigm programming language that includes support for both functional and object-oriented programming. Originally designed by Apple, Dylan was created to provide dynamic and reflective capabilities, allowing for efficient machine code generation with fine-grained control over dynamic and static behaviors. It was intended for the Apple Newton and is influenced by languages like Scheme and Common Lisp, featuring an object system derived from CLOS without the Lisp syntax.",
      keywords: ["CLOS", "dylan", "object-functional language", "scheme"],
      year: 1992,
      releases: [{ version: "2022.1", date: "2022-11-28" }],
      stackovTags: ["dylan"],
      githubName: "Dylan",
      githubLangId: "91",
      githubColor: "#6c616e",
      githubPopular: false,
      githubType: "programming",
      extensions: [".dylan", ".lid"],
      extWikipediaPath: "Dylan_(programming_language)",
      extHomeURL: "https://opendylan.org/",
    })
    .addInfluencedBy(["pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+multi", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+industrial", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
