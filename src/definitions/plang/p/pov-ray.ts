import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+POV-Ray" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "POV-Ray";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "POV-Ray",
    "href": "https://en.wikipedia.org/wiki/POV-Ray"
  },
  {
    "kind": "homepage",
    "title": "www.povray.org",
    "href": "https://www.povray.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+agpl-3"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1991-07-29",
    "kind": "first"
  },
  {
    "version": "3.7.0.0",
    "date": "2013-01-01",
    "kind": "stable"
  },
  {
    "version": "3.8.0",
    "date": "2021-08-09",
    "kind": "preview"
  }
]);
}