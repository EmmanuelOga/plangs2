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
        { title: "Emacs Lisp - Wikipedia", href: "https://en.wikipedia.org/wiki/Emacs_Lisp", kind: "wikipedia" },
      ],
      extensions: [".el", ".elc", ".eln"],
      firstAppeared: "1985-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "29.4", name: "Emacs Lisp 29.4", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+common-lisp"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+reflective", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows", "plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
