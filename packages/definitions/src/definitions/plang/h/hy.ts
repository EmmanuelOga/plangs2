import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+hy", {
      name: "Hy",
      description:
        "Lisp dialect embedded in Python, offering a multi-paradigm programming environment. Designed by Paul Tagliamonte and introduced at PyCon 2013, Hy acts as a transparent Lisp front-end for Python, translating s-expressions to Python's AST and incorporating Python libraries. This language allows the integration of imperative, functional, and object-oriented programming styles.",
      shortDesc:
        "Lisp dialect embedded in Python, facilitating seamless integration with Python libraries and syntax.",
      created: "2013",
      extensions: [".hy"],
      extGithubPath: "hylang/hy",
      extHomeURL: "http://hylang.org/",
      extRedditPath: "hylang",
      extWikipediaPath: "Hy",
      githubColor: "#7790B2",
      githubLangId: "159",
      githubName: "Hy",
      githubPopular: false,
      githubStars: 5100,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["hy", "hylang", "lisp", "python"],
      languishRanking: 436,
      releases: [
        { version: "1.0.0", name: "Afternoon Review", date: "2024-09-22" },
      ],
      stackovTags: ["hy"],
    })
    .relCompilesTo.add("pl+python")
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add("pl+clojure", "pl+common-lisp", "pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross", "plat+x86-64")
    .relTags.add("tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+python");
}
