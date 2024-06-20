import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Verilog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Verilog";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Verilog",
    "href": "https://en.wikipedia.org/wiki/Verilog"
  },
  {
    "kind": "homepage",
    "title": "https://ieeexplore.ieee.org/document/10458102",
    "href": "https://ieeexplore.ieee.org/document/10458102"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".v"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Phil-Moorby","designer"],["person+Prabhu-Goel","designer"]]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, ["para+structured"]);

   plb.addTypeSystems(pl, ["tsys+static","tsys+weak"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Ada","pl+C","pl+Fortran","pl+Pascal","pl+SystemVerilog"]);

   plb.addInfluenced(pl, ["pl+C","pl+SystemVerilog"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1984-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2023-12-06",
    "kind": "stable"
  }
]);
}