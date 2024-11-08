import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+emacs-lisp", {
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a Lisp dialect made for Emacs. It is used for implementing most of the editing functionality built into Emacs, the remainder being written in C, as is the Lisp interpreter.",
      keywords: ["emacs", "lisp", "elisp"],
      websites: [
        { title: "GNU Emacs", href: "http://www.gnu.org/software/emacs", kind: "homepage" },
        { title: "Emacs Lisp on Wikipedia", href: "https://en.wikipedia.org/wiki/Emacs_Lisp", kind: "wikipedia" },
        { title: "Emacs Lisp on Reddit", kind: "reddit", href: "https://reddit.com/r/emacs" },
      ],
      extensions: [".el", ".elc", ".eln"],
      year: 1985,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "29.4", name: "Emacs Lisp 29.4", date: "2024-01-01" }],
      github: { name: "Emacs Lisp", langId: "102", color: "#c065db", popular: false, type: "programming" },
      stackovTags: ["elisp"],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+common-lisp"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+reflective", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
