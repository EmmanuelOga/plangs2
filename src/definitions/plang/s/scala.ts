import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Scala" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Scala";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Scala",
    "href": "https://en.wikipedia.org/wiki/Scala_(programming_language)"
  },
  {
    "kind": "wikipedia",
    "title": "Scala",
    "href": "https://en.wikipedia.org/wiki/Scala_programming_language"
  },
  {
    "kind": "homepage",
    "title": "www.scala-lang.org",
    "href": "http://www.scala-lang.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".sc",".scala"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Martin-Odersky","designer"]]);

   plb.addLicenses(pl, ["license+apache"]);

   plb.addParadigms(pl, [
  "para+concurrent",
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong","tsys+structural"]);

   plb.addPlatforms(pl, ["platf+Java-virtual-machine","platf+JavaScript","platf+LLVM"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+C-Sharp",
  "pl+Ceylon",
  "pl+Chisel",
  "pl+Common-Lisp",
  "pl+Eiffel",
  "pl+Erlang",
  "pl+F-Sharp",
  "pl+Fantom",
  "pl+Flix",
  "pl+Haskell",
  "pl+Java",
  "pl+Kotlin",
  "pl+Lasso",
  "pl+OCaml",
  "pl+Oz",
  "pl+Pizza",
  "pl+Red",
  "pl+Scheme",
  "pl+Smalltalk",
  "pl+Standard-ML"
]);

   plb.addInfluenced(pl, [
  "pl+Ceylon",
  "pl+Eiffel",
  "pl+Erlang",
  "pl+Fantom",
  "pl+Flix",
  "pl+Fortress",
  "pl+Hack",
  "pl+Java",
  "pl+Kotlin",
  "pl+Lasso",
  "pl+Lisp",
  "pl+ML",
  "pl+OCaml",
  "pl+Oz",
  "pl+Pizza",
  "pl+Red",
  "pl+Scheme",
  "pl+Smalltalk",
  "pl+Standard-ML",
  "pl+Xtend"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2004-01-20",
    "kind": "first"
  },
  {
    "version": "3.4.0",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}