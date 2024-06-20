import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Scheme" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Scheme";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Scheme",
      href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)",
    },
    {
      kind: "homepage",
      title: "www.scheme.org",
      href: "https://www.scheme.org/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".scm", ".ss"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [
    ["person+Gerald-Jay-Sussman", "designer"],
    ["person+Guy-L-Steele", "designer"],
  ]);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+functional", "para+imperative", "para+meta", "para+multi-paradigm"]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, ["pl+Scheme-implementations"]);

  plb.addDialects(pl, ["pl+Document-Style-Semantics-and-Specification-Language", "pl+Lisp"]);

  plb.addInfluences(pl, [
    "pl+ALGOL",
    "pl+Clojure",
    "pl+Common-Lisp",
    "pl+Dylan",
    "pl+EuLisp",
    "pl+Haskell",
    "pl+Hop",
    "pl+JavaScript",
    "pl+Julia",
    "pl+Lisp",
    "pl+Lua",
    "pl+MDL",
    "pl+MultiLisp",
    "pl+Python",
    "pl+R",
    "pl+Racket",
    "pl+Ruby",
    "pl+Rust",
    "pl+S",
    "pl+Scala",
    "pl+T",
  ]);

  plb.addInfluenced(pl, [
    "pl+---",
    "pl+ALGOL",
    "pl+AmbientTalk",
    "pl+Arc",
    "pl+Clojure",
    "pl+Common-Lisp",
    "pl+Dylan",
    "pl+ECMAScript",
    "pl+EuLisp",
    "pl+GNU-Guile",
    "pl+Gambit",
    "pl+Game-Oriented-Assembly-Lisp",
    "pl+Haskell",
    "pl+Hop",
    "pl+ISLISP",
    "pl+JavaScript",
    "pl+Joy",
    "pl+K",
    "pl+Kawa",
    "pl+LFE",
    "pl+Lua",
    "pl+MDL",
    "pl+MultiLisp",
    "pl+Oaklisp",
    "pl+Pico",
    "pl+R",
    "pl+Racket",
    "pl+Rust",
    "pl+SCM",
    "pl+SIOD",
    "pl+SKILL",
    "pl+Sather",
    "pl+Scala",
    "pl+Snap-",
    "pl+Source",
    "pl+T",
    "pl+Tea",
    "pl+newLISP",
    "pl+q",
  ]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1975-01-01",
      kind: "first",
    },
    {
      version: "unknown",
      date: "2013-01-01",
      kind: "stable",
    },
  ]);
}
