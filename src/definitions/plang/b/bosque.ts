import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Bosque" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Bosque";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bosque_logo.png/256px-Bosque_logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Bosque",
    "href": "https://en.wikipedia.org/wiki/Bosque_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "www.microsoft.com/en-us/research/project/bosque-programming-language/",
    "href": "https://www.microsoft.com/en-us/research/project/bosque-programming-language/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".bsq"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Mark-Marron","designer"]]);

   plb.addLicenses(pl, ["license+mit"]);

   plb.addParadigms(pl, ["para+functional","para+multi-paradigm","para+typed-language"]);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+JavaScript","pl+ML","pl+TypeScript"]);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [{"version":"unknown","date":"2019-03-03","kind":"first"}]);
}