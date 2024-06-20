import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Gforth" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Gforth";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Gforth",
    "href": "https://en.wikipedia.org/wiki/Gforth"
  },
  {
    "kind": "homepage",
    "title": "gnu.org/s/gforth/",
    "href": "http://gnu.org/s/gforth/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+gnu-gpl-3"]);

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
    "date": "1992-01-01",
    "kind": "first"
  },
  {
    "version": "0.7.3",
    "date": "2014-01-01",
    "kind": "stable"
  },
  {
    "version": "0.7.9",
    "date": "2020-02-13",
    "kind": "preview"
  }
]);
}