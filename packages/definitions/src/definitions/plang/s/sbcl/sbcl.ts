import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sbcl", {
      name: "SBCL",
      description:
        "SBCL (Steel Bank Common Lisp) is an open-source implementation of ANSI Common Lisp that focuses on providing a high-performance compiler and a runtime environment for multi-paradigm programming. It is derived from CMUCL and extends its functionality with improved performance and type safety features.",
      shortDesc: "SBCL is an open-source, high-performance Common Lisp implementation derived from CMUCL.",
      created: "1999",
      extensions: [".cl", ".l", ".lisp", ".lsp", ".ny"],
      extGithubPath: "sbcl/sbcl",
      extHomeURL: "http://www.sbcl.org/",
      extRedditPath: "Common_Lisp",
      extWikipediaPath: "Common_Lisp",
      githubColor: "#3fb68b",
      githubLangId: "66",
      githubName: "Common Lisp",
      githubPopular: false,
      githubStars: 1900,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["common lisp", "high performance lisp", "sbcl", "steel bank"],
      releases: [
        { version: "1.0.0", name: "Initial Release", date: "2005-11-01" },
        { version: "2.4.5", name: "SBCL 2.4.5", date: "2024-05-30" },
        { version: "2.4.10", name: "SBCL 2.4.10", date: "2024-10-30" },
      ],
      stackovTags: ["common-lisp"],
    })
    .relDialectOf.add("pl+common-lisp")
    .relInfluencedBy.add("pl+common-lisp")
    .relLicenses.add("lic+bsd", "lic+mit", "lic+public-domain")
    .relParadigms.add("para+functional", "para+multi", "para+oop", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
