import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+emacs-lisp",
    "Emacs Lisp",
    {
      name: "Emacs Lisp",
      websites: [
        { kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" },
        { kind: "homepage", title: "www.gnu.org/software/emacs", href: "http://www.gnu.org/software/emacs" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "29.1", date: "2023-07-30", kind: "stable" },
      ],
      scoping: ["lexical"],
      extensions: [".el", ".elc", ".eln"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+common-lisp"],
      influences: ["pl+common-lisp", "pl+maclisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+functional", "para+meta", "para+reflective"],
      people: [
        ["person+guy-l-steele", "designer"],
        ["person+richard-stallman", "designer"],
      ],
      platforms: ["platf+emacs"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
