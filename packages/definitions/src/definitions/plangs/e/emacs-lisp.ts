import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+emacs-lisp", {
      images: [{ title: "Emacs Lisp", kind: "other", url: "/images/plangs/e/emacs-lisp/main.png" }],
      name: "Emacs Lisp",
      description:
        "Emacs Lisp is a  Lisp dialect made for Emacs.\nIt is used for implementing most of the editing functionality built into Emacs, the remainder being written in C, as is the Lisp interpreter.",
      websites: [
        { href: "http://www.gnu.org/software/emacs", title: "www.gnu.org/software/emacs", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Emacs_Lisp", title: "Emacs Lisp", kind: "wikipedia" },
      ],
      extensions: [".el", ".elc", ".eln"],
      releases: [{ version: "29.4", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+common-lisp"])
    .addLicenses(["lic+gnu-gpl"])
    .addParadigms(["para+functional", "para+metaprogramming", "para+reflective"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
