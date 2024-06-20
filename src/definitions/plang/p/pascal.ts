import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Pascal" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Pascal";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Pascal",
      href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Niklaus-Wirth", "designer"]]);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+imperative", "para+structured"]);

  plb.addTypeSystems(pl, ["tsys+safe", "tsys+static", "tsys+strong"]);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, [
    "pl+BSD",
    "pl+CDC-6000",
    "pl+Embarcadero-Delphi",
    "pl+Free-Pascal",
    "pl+GNU-Pascal",
    "pl+IBM-System-Slash370",
    "pl+ICL-1900",
    "pl+PDP-10",
    "pl+PDP-11",
    "pl+Pascal-P",
    "pl+VSI-Pascal",
  ]);

  plb.addDialects(pl, [
    "pl+Ada",
    "pl+Clarion",
    "pl+Concurrent-Pascal",
    "pl+Object-Pascal",
    "pl+PLANC",
  ]);

  plb.addInfluences(pl, [
    "pl+-2",
    "pl+-3",
    "pl+ALGOL-W",
    "pl+Ada",
    "pl+C-Sharp",
    "pl+C-SlashAL",
    "pl+Component-Pascal",
    "pl+Go",
    "pl+Java",
    "pl+Modula",
    "pl+Oberon",
    "pl+Object-Pascal",
    "pl+Oxygene",
    "pl+Power-Fx",
    "pl+Seed7",
    "pl+Simula",
    "pl+Standard-ML",
    "pl+Structured-text",
    "pl+VHDL",
  ]);

  plb.addInfluenced(pl, [
    "pl+A-",
    "pl+ALGOL",
    "pl+ALGOL-60",
    "pl+ALGOL-W",
    "pl+Ada",
    "pl+Aldor",
    "pl+C-SlashAL",
    "pl+COMAL",
    "pl+Charm",
    "pl+Component-Pascal",
    "pl+Concurrent-Pascal",
    "pl+Draco",
    "pl+Emerald",
    "pl+Euclid",
    "pl+Go",
    "pl+HyperTalk",
    "pl+KUKA-Robot-Language",
    "pl+Karel-the-Robot",
    "pl+Limbo",
    "pl+Microsoft-Power-Fx",
    "pl+Modula",
    "pl+Modula-2",
    "pl+Modula-2-Plus",
    "pl+Modula-3",
    "pl+OCaml",
    "pl+Object-Pascal",
    "pl+ParaSail",
    "pl+Pascal-Script",
    "pl+Plus",
    "pl+SISAL",
    "pl+Seed7",
    "pl+Simula",
    "pl+Standard-ML",
    "pl+Transaction-Programming-Language-(TAL)",
    "pl+VHDL",
    "pl+Verilog",
    "pl+Wolfram-Language",
    "pl+Zonnon",
  ]);

  plb.addReleases(pl, [{ version: "unknown", date: "1970-01-01", kind: "first" }]);
}
