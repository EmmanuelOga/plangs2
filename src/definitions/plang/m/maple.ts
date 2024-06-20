import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Maple" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Maple";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/3/30/Maple_2015_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Maple",
    "href": "https://en.wikipedia.org/wiki/Maple_(software)"
  },
  {
    "kind": "homepage",
    "title": "www.maplesoft.com/products/Maple/",
    "href": "https://www.maplesoft.com/products/Maple/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Waterloo-Maple","designer"]]);

   plb.addLicenses(pl, ["license+commercial-software","license+proprietary"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, ["platf+Linux","platf+Windows","platf+macOS"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, ["pl+Darwin"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1982-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2024-03-06",
    "kind": "stable"
  }
]);
}