import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+CoffeeScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "CoffeeScript";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "CoffeeScript",
    "href": "https://en.wikipedia.org/wiki/CoffeeScript"
  },
  {
    "kind": "homepage",
    "title": "coffeescript.org",
    "href": "https://coffeescript.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Jeremy-Ashkenas","designer"]]);

   plb.addLicenses(pl, ["license+mit"]);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+prototypes",
  "para+scripting"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+LiveScript","pl+MoonScript"]);

   plb.addInfluenced(pl, [
  "pl+ECMAScript",
  "pl+JavaScript",
  "pl+LiveScript",
  "pl+Python",
  "pl+Ruby"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2009-12-13",
    "kind": "first"
  },
  {
    "version": "2.7.0",
    "date": "2022-01-01",
    "kind": "stable"
  }
]);
}