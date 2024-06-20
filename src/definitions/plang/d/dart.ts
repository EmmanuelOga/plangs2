import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Dart" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Dart";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Dart",
    "href": "https://en.wikipedia.org/wiki/Dart_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "dart.dev",
    "href": "https://dart.dev"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".dart"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Lars-Bak","designer"]]);

   plb.addLicenses(pl, ["license+bsd"]);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+objects",
  "para+reflective"
]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+optional","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, ["pl+Flutter"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+C",
  "pl+C-Plus-Plus",
  "pl+C-Sharp",
  "pl+Erlang",
  "pl+Java",
  "pl+JavaScript",
  "pl+Ruby",
  "pl+Smalltalk",
  "pl+Strongtalk",
  "pl+TypeScript"
]);

   plb.addInfluenced(pl, ["pl+Erlang","pl+JavaScript","pl+Smalltalk"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2011-10-10",
    "kind": "first"
  },
  {
    "version": "3.4.3",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}