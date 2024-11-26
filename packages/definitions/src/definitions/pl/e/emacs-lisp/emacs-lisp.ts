import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+emacs-lisp", {
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a Lisp dialect made for Emacs. It is used for implementing most of the editing functionality built into Emacs, the remainder being written in C, as is the Lisp interpreter.",
      keywords: ["elisp", "emacs", "lisp"],
      extensions: [".el", ".elc", ".eln"],
      releases: [
        { version: "29.4", name: "Emacs Lisp 29.4", date: "2024-06-22" },
        { version: "29.3", name: "Emacs Lisp 29.3", date: "2024-03-24" },
        { version: "29.2", name: "Emacs Lisp 29.2", date: "2024-01-18" },
        { version: "29.1", name: "Emacs Lisp 29.1", date: "2023-07-30" },
      ],
      stackovTags: ["elisp"],
      githubName: "Emacs Lisp",
      languishRanking: 70,
      githubLangId: "102",
      githubColor: "#c065db",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Emacs_Lisp",
      extRedditPath: "emacs",
      extHomeURL: "http://www.gnu.org/software/emacs",
      created: "1985",
    })
    .relDialectOf.add(["pl+lisp"])
    .relInfluence.add(["pl+common-lisp"])
    .relLicense.add(["lic+gnu-gpl"])
    .relParadigm.add(["para+functional", "para+metaprogramming", "para+reflective", "para+scripting"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+app", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+shell"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
