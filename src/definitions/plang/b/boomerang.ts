import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Boomerang" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Boomerang";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Boomerang",
    "href": "https://en.wikipedia.org/wiki/Boomerang_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "www.seas.upenn.edu/~harmony/",
    "href": "http://www.seas.upenn.edu/~harmony/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Benjamin-C.-Pierce",
    "designer"
  ],
  [
    "person+Nate-Foster",
    "designer"
  ]
]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, ["platf+Linux","platf+Mac-OS-X"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+OCaml","pl+XSLT"]);

   plb.addInfluenced(pl, []);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2008-01-01",
    "kind": "first"
  },
  {
    "version": "0.2",
    "date": "2009-09-02",
    "kind": "stable"
  }
]);
}