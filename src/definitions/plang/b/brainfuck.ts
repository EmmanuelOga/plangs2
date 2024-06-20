import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Brainfuck" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Brainfuck";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Brainfuck",
      href: "https://en.wikipedia.org/wiki/Brainfuck",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".b", ".bf"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Urban-Muller", "designer"]]);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+esoteric", "para+imperative", "para+structured"]);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, ["pl+P--"]);

  plb.addInfluences(pl, ["pl+FALSE", "pl+Malbolge", "pl+P--"]);

  plb.addInfluenced(pl, ["pl+Malbolge", "pl+P--"]);

  plb.addReleases(pl, [{ version: "unknown", date: "1993-01-01", kind: "first" }]);
}
