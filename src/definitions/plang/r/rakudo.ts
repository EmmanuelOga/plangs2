import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Rakudo" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Rakudo";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rakudo_Logo.png/250px-Rakudo_Logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Rakudo",
    "href": "https://en.wikipedia.org/wiki/Rakudo"
  },
  {
    "kind": "homepage",
    "title": "rakudo.org",
    "href": "http://rakudo.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+artistic"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [{"version":"2024.05","date":"2024-05-30","kind":"stable"}]);
}