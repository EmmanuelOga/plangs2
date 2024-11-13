import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+common-lisp", {
      name: "Common Lisp",
      description:
        "Common Lisp (CL) is a dialect of the Lisp programming language, published in American National Standards Institute (ANSI) standard document ANSI INCITS 226-1994 (S2018) (formerly X3.226-1994 (R1999)). The Common Lisp HyperSpec, a hyperlinked HTML version, has been derived from the ANSI Common Lisp standard.",
      keywords: ["cl", "common lisp"],
      websites: [
        { title: "common-lisp.net", href: "http://common-lisp.net/", kind: "other" },
        { title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Common_Lisp", kind: "wikipedia" },
        { title: "Common Lisp on Reddit", kind: "reddit", href: "https://reddit.com/r/Common_Lisp" },
      ],
      extensions: [".cl", ".fasl", ".l", ".lisp", ".lsp"],
      year: 1984,
      isTranspiler: false,
      isMainstream: true,
      stackovTags: ["common-lisp"],
      githubName: "Common Lisp",
      languishRanking: 60,
      githubLangId: "66",
      githubColor: "#3fb68b",
      githubPopular: false,
      githubType: "programming",
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+r5rs", "pl+scheme"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+industrial",
      "tag+interpreter",
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
