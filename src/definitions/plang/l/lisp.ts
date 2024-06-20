import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Lisp" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Lisp";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Lisp",
      href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)",
    },
    {
      kind: "wikipedia",
      title: "Lisp",
      href: "https://en.wikipedia.org/wiki/Lisp_programming_language",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [
    ["person+John-McCarthy", "designer"],
    ["person+Steve-Russell", "designer"],
  ]);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, [
    "para+functional",
    "para+imperative",
    "para+meta",
    "para+multi-paradigm",
    "para+reflective",
  ]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, [
    "pl+-StarLisp-(StarLisp)",
    "pl+Allegro-Common-Lisp",
    "pl+Arc",
    "pl+AutoLISP",
    "pl+COWSEL--POP-1",
    "pl+Clojure",
    "pl+Common-Lisp",
    "pl+Emacs-Lisp",
    "pl+Embeddable-Common-Lisp",
    "pl+EuLisp",
    "pl+Franz-Lisp",
    "pl+GNU-Guile",
    "pl+Gambit",
    "pl+Game-Oriented-Assembly-Lisp",
    "pl+Hy",
    "pl+ISLISP",
    "pl+Interlisp",
    "pl+Kawa",
    "pl+LFE",
    "pl+Le-Lisp",
    "pl+Lisp-Machine-Lisp",
    "pl+LispWorks",
    "pl+Logo",
    "pl+MDL",
    "pl+Maclisp",
    "pl+MultiLisp",
    "pl+NetLogo",
    "pl+OpenLisp",
    "pl+POP-11",
    "pl+POP-2",
    "pl+Pico",
    "pl+PicoLisp",
    "pl+Racket",
    "pl+SCM",
    "pl+SIOD",
    "pl+Scheme",
    "pl+StarLogo",
    "pl+T",
    "pl+UCBLogo",
    "pl+newLISP",
  ]);

  plb.addInfluences(pl, [
    "pl+11",
    "pl+CLIPS",
    "pl+CLU",
    "pl+COWSEL",
    "pl+Dylan",
    "pl+Elixir",
    "pl+Excel",
    "pl+Forth",
    "pl+Haskell",
    "pl+Information-Processing-Language",
    "pl+Io",
    "pl+JavaScript",
    "pl+Julia",
    "pl+Logo",
    "pl+Lua",
    "pl+ML",
    "pl+Nim",
    "pl+Nu",
    "pl+OPS5",
    "pl+POP-2",
    "pl+Perl",
    "pl+Python",
    "pl+R",
    "pl+Rebol",
    "pl+Red",
    "pl+Ruby",
    "pl+Scala",
    "pl+Smalltalk",
    "pl+Swift",
    "pl+Tcl",
    "pl+Wolfram-Language",
  ]);

  plb.addInfluenced(pl, [
    "pl+-StarLisp-(StarLisp)",
    "pl+AgentCubes",
    "pl+AgentSheets",
    "pl+Allegro-Common-Lisp",
    "pl+Amiga-E",
    "pl+Arc",
    "pl+AutoLISP",
    "pl+CLU",
    "pl+COWSEL--POP-1",
    "pl+Ceylon",
    "pl+Claire",
    "pl+Common-Lisp",
    "pl+Curl",
    "pl+Embeddable-Common-Lisp",
    "pl+Erlang",
    "pl+Factor",
    "pl+Franz-Lisp",
    "pl+GNU-Guile",
    "pl+Gambit",
    "pl+Game-Oriented-Assembly-Lisp",
    "pl+Haskell",
    "pl+ISWIM",
    "pl+Information-Processing-Language-(IPL)",
    "pl+Interlisp",
    "pl+Io",
    "pl+Java",
    "pl+Julia",
    "pl+Kawa",
    "pl+Le-Lisp",
    "pl+Lisp-Machine-Lisp",
    "pl+LispWorks",
    "pl+Little-b",
    "pl+Logo",
    "pl+MDL",
    "pl+MultiLisp",
    "pl+Nemerle",
    "pl+Nial",
    "pl+Nim",
    "pl+Nu",
    "pl+OpenLisp",
    "pl+Oz",
    "pl+POP-2",
    "pl+Perl",
    "pl+PostScript",
    "pl+Pure",
    "pl+Python",
    "pl+R",
    "pl+RPL",
    "pl+Rebol",
    "pl+Red",
    "pl+Ruby",
    "pl+SCM",
    "pl+SIOD",
    "pl+Scheme",
    "pl+Smalltalk",
    "pl+Squeak",
    "pl+Tcl",
    "pl+UCBLogo",
    "pl+VisualWorks",
    "pl+WebAssembly",
    "pl+Wolfram-Language",
  ]);

  plb.addReleases(pl, [{ version: "unknown", date: "1960-01-01", kind: "first" }]);
}
