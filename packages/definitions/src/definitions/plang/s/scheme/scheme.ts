import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scheme", {
      name: "Scheme",
      description:
        "Scheme is a minimalistic and flexible dialect of the Lisp programming language, prioritizing functional programming and metaprogramming. Developed in the 1970s by Guy L. Steele and Gerald Jay Sussman at MIT, it pioneered concepts like lexical scoping and first-class continuations.",
      extensions: [".scm", ".ss"],
      stackovTags: ["scheme"],
      githubName: "Scheme",
      languishRanking: 115,
      githubLangId: "343",
      githubColor: "#1e4aec",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Scheme_(programming_language)",
      extRedditPath: "scheme",
      extHomeURL: "https://www.scheme.org/",
      created: "1975",
      isTranspiler: false,
      shortDesc: "Scheme is a minimalistic Lisp dialect known for its functional programming capabilities.",
    })
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add("pl+lisp")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+imperative", "para+metaprogramming", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+dynamic", "tsys+latent", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
