import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+APL" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "APL";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "APL",
    "href": "https://en.wikipedia.org/wiki/APL_(programming_language)"
  },
  {
    "kind": "wikipedia",
    "title": "APL",
    "href": "https://en.wikipedia.org/wiki/APL_programming_language"
  },
  {
    "kind": "homepage",
    "title": "aplwiki.com",
    "href": "https://aplwiki.com/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Dick-Lathwell",
    "designer"
  ],
  [
    "person+Larry-Breed",
    "designer"
  ],
  [
    "person+Roger-Moore",
    "designer"
  ]
]);

   plb.addLicenses(pl, ["license+open-source","license+proprietary"]);

   plb.addParadigms(pl, ["para+array","para+functional","para+modular","para+structured"]);

   plb.addTypeSystems(pl, ["tsys+dynamic"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, ["pl+APLX"]);

   plb.addDialects(pl, ["pl+APLX"]);

   plb.addInfluences(pl, [
  "pl+A-and-A-Plus",
  "pl+C-Plus-Plus",
  "pl+FP",
  "pl+J",
  "pl+K",
  "pl+MATLAB",
  "pl+Mathematical-notation",
  "pl+Nial",
  "pl+PPL",
  "pl+Python",
  "pl+S",
  "pl+Snap-",
  "pl+Speakeasy",
  "pl+Wolfram-Language",
  "pl+q--kdb-"
]);

   plb.addInfluenced(pl, [
  "pl+A-Plus",
  "pl+FP",
  "pl+Futhark",
  "pl+Go",
  "pl+J",
  "pl+K",
  "pl+MATLAB--programming-language-MATLAB--software-",
  "pl+Nial",
  "pl+Perl-Data-Language--PDL-",
  "pl+Python",
  "pl+S",
  "pl+SAC",
  "pl+Self",
  "pl+Snap-",
  "pl+SpeakeasySpeakeasy--the-interpreted-programming-language-",
  "pl+Wolfram-Language",
  "pl+q"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1966-11-27",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2001-02-01",
    "kind": "stable"
  }
]);
}