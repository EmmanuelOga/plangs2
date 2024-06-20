import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Red" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Red";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Red_Language_Tower_Logo.png/150px-Red_Language_Tower_Logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Red",
    "href": "https://en.wikipedia.org/wiki/Red_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "www.red-lang.org",
    "href": "https://www.red-lang.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".red",".reds"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Nenad-Rakocevic","designer"]]);

   plb.addLicenses(pl, ["license+boost","license+modified-bsd"]);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+symbolic"
]);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, ["platf+Linux","platf+OS-X","platf+Windows"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Lisp","pl+Lua","pl+Rebol","pl+Scala"]);

   plb.addInfluenced(pl, ["pl+Lisp","pl+Rebol","pl+Scala"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2011-01-01",
    "kind": "first"
  },
  {
    "version": "0.6.5",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}