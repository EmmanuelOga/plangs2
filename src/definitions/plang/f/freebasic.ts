import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+FreeBASIC" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "FreeBASIC";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "FreeBASIC",
    "href": "https://en.wikipedia.org/wiki/FreeBASIC"
  },
  {
    "kind": "homepage",
    "title": "www.freebasic.net",
    "href": "http://www.freebasic.net"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Andre-Victor","designer"]]);

   plb.addLicenses(pl, ["license+gnu-gpl-2-plus","license+gnu-lgpl-2-plus"]);

   plb.addParadigms(pl, ["para+imperative","para+objects"]);

   plb.addTypeSystems(pl, ["tsys+static"]);

   plb.addPlatforms(pl, [
  "platf+FreeBSD",
  "platf+Linux",
  "platf+MS-DOS",
  "platf+Microsoft-Windows"
]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+C","pl+QuickBASIC"]);

   plb.addInfluenced(pl, ["pl+QBasic"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2004-01-01",
    "kind": "first"
  },
  {
    "version": "1.10.1",
    "date": "2023-12-25",
    "kind": "stable"
  }
]);
}