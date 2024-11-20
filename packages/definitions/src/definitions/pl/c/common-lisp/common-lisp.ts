import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+common-lisp", {
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a multi-paradigm, high-performance, ANSI-standardized dialect of Lisp, known for its flexibility and powerful macro system. It supports procedural, functional, and object-oriented programming, and includes the Common Lisp Object System (CLOS) for object-oriented capabilities. Common Lisp is praised for its support of dynamic and incremental development, iterative compilation, and allows real-time application modification and debugging. It offers cross-platform compatibility and remains influential in various domains such as artificial intelligence, rapid prototyping, and long-running server applications.",
      keywords: ["ansi common lisp", "cl", "common lisp", "lisp"],
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      year: 1984,
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
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags([
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
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
