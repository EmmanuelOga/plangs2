import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+common-lisp", {
      name: "Common Lisp",
      description:
        "A multi-paradigm, high-performance, ANSI-standardized dialect of Lisp, known for its flexibility and powerful macro system. It supports procedural, functional, and object-oriented programming, and includes the Common Lisp Object System (CLOS) for object-oriented capabilities. Common Lisp is praised for its support of dynamic and incremental development, iterative compilation, and allows real-time application modification and debugging. It offers cross-platform compatibility and remains influential in various domains such as artificial intelligence, rapid prototyping, and long-running server applications.",
      shortDesc:
        "A high-performance, ANSI-standardized Lisp dialect recognized for its flexibility and macro system, supporting multiple programming paradigms.",
      created: "1984",
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      extHomeURL: "http://common-lisp.net/",
      extRedditPath: "Common_Lisp",
      extWikipediaPath: "Common_Lisp",
      githubColor: "#3fb68b",
      githubLangId: "66",
      githubName: "Common Lisp",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["ansi common lisp", "cl", "common lisp", "lisp"],
      languishRanking: 95,
      stackovTags: ["common-lisp"],
    })
    .relDialectOf.add("pl+lisp")
    .relImplements.add("pl+lisp")
    .relInfluencedBy.add("pl+lisp", "pl+r5rs", "pl+scheme")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+modeling",
      "tag+rad",
      "tag+scripting",
      "tag+shell",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");
}
