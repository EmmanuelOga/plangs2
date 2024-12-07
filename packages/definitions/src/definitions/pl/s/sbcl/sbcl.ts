import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+sbcl", {
      name: "SBCL",
      description:
        "Steel Bank Common Lisp (SBCL) is a high-performance Common Lisp compiler. It is a free and open-source implementation with a permissive license. SBCL provides a compiler and a runtime system for ANSI Common Lisp and features an interactive environment with a debugger, statistical profiler, code coverage tool, and many extensions. Originally forked in December 1999 from CMUCL, it supports multiple operating systems including Linux, macOS, Solaris, and Windows.",
      keywords: ["common lisp", "compiler", "sbcl", "steel bank"],
      releases: [
        { version: "2.4.5", name: "SBCL 2.4.5", date: "2024-05-30" },
        { version: "2.4.10", name: "SBCL 2.4.10", date: "2024-10-30" },
      ],
      stackovTags: ["common-lisp"],
      githubName: "Common Lisp",
      githubLangId: "66",
      githubColor: "#3fb68b",
      githubPopular: false,
      githubType: "programming",
      extensions: [".cl", ".l", ".lisp", ".lsp"],
      extWikipediaPath: "Common_Lisp",
      extRedditPath: "Common_Lisp",
      extHomeURL: "http://www.sbcl.org/",
      created: "1999",
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
