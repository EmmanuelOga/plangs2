import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Raku" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Raku";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Camelia.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Raku",
    "href": "https://en.wikipedia.org/wiki/Raku_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "raku.org",
    "href": "http://raku.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".raku",".t"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Larry-Wall","designer"]]);

   plb.addLicenses(pl, ["license+artistic-2","license+gnu-gpl"]);

   plb.addParadigms(pl, ["para+multi-paradigm"]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+gradual"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, ["pl+Rakudo"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Haskell","pl+JavaScript","pl+Perl","pl+Ruby","pl+Smalltalk"]);

   plb.addInfluenced(pl, ["pl+Smalltalk"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2015-12-25",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2020-10-24",
    "kind": "stable"
  }
]);
}