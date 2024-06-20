import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+CPython" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "CPython";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "CPython",
    "href": "https://en.wikipedia.org/wiki/CPython"
  },
  {
    "kind": "homepage",
    "title": "www.python.org",
    "href": "https://www.python.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+python-software-foundation"]);

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
    "date": "1994-01-26",
    "kind": "first"
  },
  {
    "version": "3.12.0",
    "date": "2023-01-01",
    "kind": "stable"
  }
]);
}