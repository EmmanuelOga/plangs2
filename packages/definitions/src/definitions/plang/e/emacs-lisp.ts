import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+emacs-lisp", {
      name: "Emacs Lisp",
      description:
        "Dialect of Lisp used for extending the Emacs editor, providing a powerful scripting environment and enabling extensive customization.",
      shortDesc: "Lisp dialect for extending the Emacs editor.",
      created: "1985",
      extensions: [".el", ".elc", ".eln"],
      extGithubPath: "emacs-mirror/emacs",
      extHomeURL: "http://www.gnu.org/software/emacs",
      extRedditPath: "emacs",
      extWikipediaPath: "Emacs_Lisp",
      filenames: ["init.el"],
      githubColor: "#c065db",
      githubLangId: "102",
      githubName: "Emacs Lisp",
      githubPopular: false,
      githubStars: 4500,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["elisp", "emacs", "emacs-lisp"],
      languishRanking: 70,
      links: [{ url: "https://www.emacswiki.org/", title: "EmacsWiki" }],
      releases: [{ version: "29.4", name: "Emacs Lisp 29.4", date: "2024-06-22" }],
      stackovTags: ["elisp"],
    })
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add("pl+common-lisp")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+extensible", "para+functional", "para+metaprogramming", "para+reflective", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
