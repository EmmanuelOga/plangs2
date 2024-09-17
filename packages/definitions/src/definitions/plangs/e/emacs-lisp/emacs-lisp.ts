import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+emacs-lisp", {
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a  Lisp dialect made for Emacs.\nIt is used for implementing most of the editing functionality built into Emacs, the remainder being written in C, as is the Lisp interpreter.",
      firstAppeared: "1985-01-01",
      extensions: [".el", ".elc", ".eln"],
      websites: [
        { href: "http://www.gnu.org/software/emacs", title: "www.gnu.org/software/emacs", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Emacs_Lisp", title: "Emacs Lisp", kind: "wikipedia" },
      ],
      releases: [{ version: "29.4", date: "2024-01-01" }],
      images: [{ kind: "other", title: "Emacs Lisp", url: "/images/plangs/e/emacs-lisp/other.png" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+common-lisp"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+reflective"])
    .addTags(["tag+app", "tag+compiler", "tag+editor", "tag+if", "tag+industrial", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
