import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+common-lisp", {
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a multi-paradigm, high-performance, ANSI-standardized dialect of Lisp, known for its flexibility and powerful macro system. It supports procedural, functional, and object-oriented programming, and includes the Common Lisp Object System (CLOS) for object-oriented capabilities. Common Lisp is praised for its support of dynamic and incremental development, iterative compilation, and allows real-time application modification and debugging. It offers cross-platform compatibility and remains influential in various domains such as artificial intelligence, rapid prototyping, and long-running server applications.",
      keywords: ["ansi common lisp", "cl", "common lisp", "lisp"],
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      stackovTags: ["common-lisp"],
      githubName: "Common Lisp",
      languishRanking: 60,
      githubLangId: "66",
      githubColor: "#3fb68b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Common_Lisp",
      extRedditPath: "Common_Lisp",
      extHomeURL: "http://common-lisp.net/",
      created: "1984",
    })
    .relDialectOf.add(["pl+lisp"])
    .relInfluencedBy.add(["pl+lisp", "pl+r5rs", "pl+scheme"])
    .relParadigm.add(["para+functional", "para+metaprogramming", "para+multi", "para+oop", "para+procedural", "para+reflective"])
    .relPlatform.add(["plat+cross"])
    .relTag.add([
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
    ])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
