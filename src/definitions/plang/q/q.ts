import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+q" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "q";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "q",
    "href": "https://en.wikipedia.org/wiki/Q_(programming_language_from_Kx_Systems)"
  },
  {
    "kind": "homepage",
    "title": "code.kx.com",
    "href": "http://code.kx.com"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Arthur-Whitney","designer"]]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, ["para+array","para+functional"]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+strong"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+A-Plus","pl+APL","pl+Scheme","pl+k"]);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2003-01-01",
    "kind": "first"
  },
  {
    "version": "4.0",
    "date": "2020-03-17",
    "kind": "stable"
  }
]);
}