import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+C-Sharp" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "C#";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "C#",
      href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, ["pl+Nemerle"]);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, [
    "pl+ArkTS",
    "pl+Ballerina",
    "pl+Boo",
    "pl+C",
    "pl+C-Plus-Plus",
    "pl+Chapel",
    "pl+Clojure",
    "pl+Cobra",
    "pl+Crystal",
    "pl+D-programming-language",
    "pl+Dart",
    "pl+Eiffel",
    "pl+Fantom",
    "pl+Gosu",
    "pl+Hack",
    "pl+Haxe",
    "pl+JS-Plus-Plus",
    "pl+Java",
    "pl+Kotlin",
    "pl+Modula-3",
    "pl+Nemerle",
    "pl+Object-Pascal",
    "pl+Oxygene",
    "pl+Pascal",
    "pl+PowerShell",
    "pl+Ring",
    "pl+Rust",
    "pl+Scala",
    "pl+TypeScript",
    "pl+Vala",
  ]);

  plb.addReleases(pl, []);
}
