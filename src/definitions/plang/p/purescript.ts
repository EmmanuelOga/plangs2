import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PureScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "PureScript";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "PureScript",
    "href": "https://en.wikipedia.org/wiki/PureScript"
  },
  {
    "kind": "homepage",
    "title": "www.purescript.org",
    "href": "https://www.purescript.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".purs"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Phil-Freeman","designer"]]);

   plb.addLicenses(pl, ["license+bsd"]);

   plb.addParadigms(pl, ["para+functional"]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Haskell","pl+JavaScript"]);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2013-01-01",
    "kind": "first"
  },
  {
    "version": "0.15.15",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}