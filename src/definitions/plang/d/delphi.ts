import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Delphi" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Delphi";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/en/b/b2/Embarcadero_Delphi_10.4_Sydney_Product_Logo_and_Icon.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Delphi",
    "href": "https://en.wikipedia.org/wiki/Delphi_(software)"
  },
  {
    "kind": "homepage",
    "title": "www.embarcadero.com/products/delphi",
    "href": "https://www.embarcadero.com/products/delphi"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+freemium"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, ["pl+Object-Pascal","pl+Pascal"]);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, ["pl+C-Plus-PlusBuilder","pl+Oxygene"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1995-01-01",
    "kind": "first"
  },
  {
    "version": "12.1",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}