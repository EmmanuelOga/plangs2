import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+emacs-lisp", {
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a dialect of Lisp used for extending the Emacs editor, providing a powerful scripting environment and enabling extensive customization.",
      keywords: ["elisp", "emacs", "emacs-lisp"],
      extensions: [".el", ".elc", ".eln"],
      releases: [{ version: "29.4", name: "Emacs Lisp 29.4", date: "2024-06-22" }],
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
      filenames: ["init.el"],
      isTranspiler: false,
      shortDesc: "Emacs Lisp is a Lisp dialect for extending the Emacs editor.",
      links: [{ url: "https://www.emacswiki.org/", title: "EmacsWiki" }],
      githubStars: 4500,
      extGithubPath: "emacs-mirror/emacs",
    })
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add("pl+common-lisp")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+extensible", "para+functional", "para+metaprogramming", "para+reflective", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
