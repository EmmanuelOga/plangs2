import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scheme", {
      name: "Scheme",
      description:
        "Minimalistic and flexible dialect of the Lisp programming language, prioritizing functional programming and metaprogramming. Developed in the 1970s by Guy L. Steele and Gerald Jay Sussman at MIT, it pioneered concepts like lexical scoping and first-class continuations.",
      shortDesc:
        "Minimalistic Lisp dialect known for its functional programming capabilities.",
      created: "1975",
      extensions: [".scm", ".ss"],
      extHomeURL: "https://www.scheme.org/",
      extRedditPath: "scheme",
      extWikipediaPath: "Scheme_(programming_language)",
      githubColor: "#1e4aec",
      githubLangId: "343",
      githubName: "Scheme",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      languishRanking: 115,
      stackovTags: ["scheme"],
    })
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add("pl+lisp")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+latent", "tsys+strong");
}
