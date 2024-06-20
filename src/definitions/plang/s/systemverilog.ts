import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+SystemVerilog" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "SystemVerilog";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [{"kind":"wikipedia","title":"SystemVerilog","href":"https://en.wikipedia.org/wiki/SystemVerilog"}]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".sv"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, ["para+objects","para+structured"]);

   plb.addTypeSystems(pl, ["tsys+static","tsys+weak"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+C-Plus-Plus","pl+Java","pl+OpenVera","pl+VHDL","pl+Verilog"]);

   plb.addInfluenced(pl, ["pl+Verilog"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2002-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2023-12-16",
    "kind": "stable"
  }
]);
}