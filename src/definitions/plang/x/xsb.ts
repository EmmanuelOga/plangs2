import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+XSB" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "XSB";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "XSB",
    "href": "https://en.wikipedia.org/wiki/XSB"
  },
  {
    "kind": "homepage",
    "title": "Sourceforge.net",
    "href": "https://xsb.sourceforge.net/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".P"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+David-S.-Warren",
    "designer"
  ],
  [
    "person+Kostis-Sagonas",
    "designer"
  ],
  [
    "person+Terrance-Swift",
    "designer"
  ]
]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, ["para+logic"]);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Prolog"]);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [{"version":"5.0","date":"2022-05-12","kind":"stable"}]);
}