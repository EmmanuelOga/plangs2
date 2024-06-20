import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+ChucK" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "ChucK";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "ChucK",
    "href": "https://en.wikipedia.org/wiki/ChucK"
  },
  {
    "kind": "homepage",
    "title": "chuck.cs.princeton.edu",
    "href": "http://chuck.cs.princeton.edu"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Ge-Wang","designer"]]);

   plb.addLicenses(pl, [
  "license+gpl-2",
  "license+ios",
  "license+linux",
  "license+mac",
  "license+windows"
]);

   plb.addParadigms(pl, ["para+multi-paradigm"]);

   plb.addTypeSystems(pl, ["tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2003-01-01",
    "kind": "first"
  },
  {
    "version": "1.5.2.4",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}