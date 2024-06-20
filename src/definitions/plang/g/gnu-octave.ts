import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+GNU-Octave" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "GNU Octave";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "GNU Octave",
    "href": "https://en.wikipedia.org/wiki/GNU_Octave"
  },
  {
    "kind": "homepage",
    "title": "gnu.org/software/octave/",
    "href": "https://gnu.org/software/octave/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+John-W.-Eaton","designer"]]);

   plb.addLicenses(pl, ["license+gpl-2","license+gpl-3"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "1.0",
    "date": "1993-01-01",
    "kind": "first"
  },
  {
    "version": "9.1.0",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}