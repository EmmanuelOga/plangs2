import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+LiveScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "LiveScript";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "LiveScript",
    "href": "https://en.wikipedia.org/wiki/LiveScript_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "livescript.net",
    "href": "https://livescript.net"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".ls"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+George-Zahariev",
    "designer"
  ],
  [
    "person+Jeremy-Ashkenas",
    "designer"
  ],
  [
    "person+Satoshi-Murakami",
    "designer"
  ]
]);

   plb.addLicenses(pl, ["license+mit"]);

   plb.addParadigms(pl, ["para+functional","para+multi-paradigm","para+objects"]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+weak"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+CoffeeScript","pl+F-Sharp","pl+Haskell","pl+JavaScript"]);

   plb.addInfluenced(pl, ["pl+CoffeeScript"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2011-01-01",
    "kind": "first"
  },
  {
    "version": "1.6.1",
    "date": "2020-07-14",
    "kind": "stable"
  }
]);
}