import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Modelica" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Modelica";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Modelica_Language.png/300px-Modelica_Language.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Modelica",
    "href": "https://en.wikipedia.org/wiki/Modelica"
  },
  {
    "kind": "homepage",
    "title": "www.modelica.org",
    "href": "https://www.modelica.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".mo"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+cc-by-sa"]);

   plb.addParadigms(pl, ["para+declarative"]);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, [
  "pl+AMESim",
  "pl+CATIA",
  "pl+Dymola",
  "pl+JModelica.org",
  "pl+MapleSim",
  "pl+OpenModelica",
  "pl+Scicos",
  "pl+SimulationX",
  "pl+Wolfram-SystemModeler",
  "pl+Xcos"
]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1997-01-01",
    "kind": "first"
  },
  {
    "version": "3.6",
    "date": "2023-01-01",
    "kind": "stable"
  }
]);
}