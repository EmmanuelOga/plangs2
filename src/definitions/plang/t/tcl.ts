import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Tcl" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Tcl";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Tcl",
    "href": "https://en.wikipedia.org/wiki/Tcl"
  },
  {
    "kind": "homepage",
    "title": "www.tcl-lang.org",
    "href": "https://www.tcl-lang.org"
  },
  {
    "kind": "homepage",
    "title": "www.tcl.tk",
    "href": "https://www.tcl.tk"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".tbc",".tcl"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+John-Ousterhout","designer"]]);

   plb.addLicenses(pl, ["license+bsd"]);

   plb.addParadigms(pl, [
  "para+event-driven",
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+AWK","pl+Lisp","pl+PHP","pl+PowerShell","pl+Tea"]);

   plb.addInfluenced(pl, ["pl+AWK","pl+Lisp","pl+PHP","pl+PowerShell","pl+Tea","pl+XOTcl"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1988-01-01",
    "kind": "first"
  },
  {
    "version": "8.6.14",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}