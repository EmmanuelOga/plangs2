import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Standard-ML" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Standard ML";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Standard ML",
    "href": "https://en.wikipedia.org/wiki/Standard_ML"
  },
  {
    "kind": "repository",
    "title": "smlfamily.github.io",
    "href": "https://smlfamily.github.io/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".sml"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+modular",
  "para+multi-paradigm"
]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, ["pl+MLton","pl+Poly-SlashML","pl+SML-SlashNJ"]);

   plb.addDialects(pl, ["pl+Alice","pl+ML","pl+MLton","pl+Standard-ML-of-New-Jersey"]);

   plb.addInfluences(pl, [
  "pl+Elm",
  "pl+F-Sharp",
  "pl+F-Star",
  "pl+Haskell",
  "pl+Hope",
  "pl+ML",
  "pl+OCaml",
  "pl+Pascal",
  "pl+Python",
  "pl+Rust",
  "pl+Scala"
]);

   plb.addInfluenced(pl, [
  "pl+Elm",
  "pl+EuLisp",
  "pl+F-Star",
  "pl+Futhark",
  "pl+Haskell",
  "pl+ML",
  "pl+MLton",
  "pl+OCaml",
  "pl+Pascal",
  "pl+Python",
  "pl+Rust",
  "pl+Scala",
  "pl+Standard-ML-of-New-Jersey"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1983-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "1997-01-01",
    "kind": "stable"
  }
]);
}