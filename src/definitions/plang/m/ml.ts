import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+ML" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "ML";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [{"kind":"wikipedia","title":"ML","href":"https://en.wikipedia.org/wiki/ML_(programming_language)"}]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Robin-Milner","designer"]]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, [
  "para+functional",
  "para+generic",
  "para+imperative",
  "para+multi-paradigm"
]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, [
  "pl+ATS",
  "pl+Alice",
  "pl+Caml",
  "pl+F-Star",
  "pl+Futhark",
  "pl+MLton",
  "pl+OCaml",
  "pl+Reason",
  "pl+Standard-ML",
  "pl+Standard-ML-of-New-Jersey"
]);

   plb.addInfluences(pl, [
  "pl+C-Plus-Plus",
  "pl+Clojure",
  "pl+Coq",
  "pl+Cyclone",
  "pl+Elm",
  "pl+Erlang",
  "pl+F-Sharp",
  "pl+F-Star",
  "pl+Haskell",
  "pl+ISWIM",
  "pl+Idris",
  "pl+Kotlin",
  "pl+Miranda",
  "pl+Nemerle",
  "pl+OCaml",
  "pl+Opa",
  "pl+Rust",
  "pl+Scala",
  "pl+Standard-ML"
]);

   plb.addInfluenced(pl, [
  "pl+ATS",
  "pl+Alice",
  "pl+Bosque",
  "pl+C-Plus-Plus",
  "pl+Caml",
  "pl+Ceylon",
  "pl+Claire",
  "pl+Clojure",
  "pl+Haskell",
  "pl+ISWIM",
  "pl+Idris",
  "pl+Kotlin",
  "pl+Lean",
  "pl+Lisp",
  "pl+Miranda",
  "pl+Nemerle",
  "pl+Orc",
  "pl+ParaSail",
  "pl+Pict",
  "pl+Standard-ML"
]);

   plb.addReleases(pl, [{"version":"unknown","date":"1973-01-01","kind":"first"}]);
}