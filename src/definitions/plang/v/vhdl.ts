import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+VHDL" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "VHDL";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "VHDL",
      href: "https://en.wikipedia.org/wiki/VHDL",
    },
    {
      kind: "homepage",
      title: "IEEE VASG",
      href: "https://opensource.ieee.org/vasg",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".vhd"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+concurrent", "para+dataflow", "para+reactive"]);

  plb.addTypeSystems(pl, ["tsys+strong"]);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Ada", "pl+Pascal"]);

  plb.addInfluenced(pl, ["pl+Ada", "pl+Pascal", "pl+SystemVerilog"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1980-01-01",
      kind: "first",
    },
    {
      version: "unknown",
      date: "2019-12-23",
      kind: "stable",
    },
  ]);
}
