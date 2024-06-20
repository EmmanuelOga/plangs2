import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Emacs-Lisp" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Emacs Lisp";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Emacs Lisp",
    "href": "https://en.wikipedia.org/wiki/Emacs_Lisp"
  },
  {
    "kind": "homepage",
    "title": "www.gnu.org/software/emacs",
    "href": "http://www.gnu.org/software/emacs"
  }
]);

   plb.addScoping(pl, ["lexical"]);

   plb.addExtensions(pl, [".el",".elc",".eln"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Guy-L.-Steele",
    "designer"
  ],
  [
    "person+Richard-Stallman",
    "designer"
  ]
]);

   plb.addLicenses(pl, ["license+gpl-3"]);

   plb.addParadigms(pl, ["para+functional","para+meta","para+reflective"]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Emacs"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, ["pl+Lisp"]);

   plb.addInfluences(pl, ["pl+Common-Lisp","pl+Maclisp"]);

   plb.addInfluenced(pl, ["pl+Common-Lisp"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1985-01-01",
    "kind": "first"
  },
  {
    "version": "29.1",
    "date": "2023-07-30",
    "kind": "stable"
  }
]);
}