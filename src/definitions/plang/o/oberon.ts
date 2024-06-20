import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Oberon" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Oberon";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Oberon",
      href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)",
    },
    {
      kind: "homepage",
      title: "projectoberon.net",
      href: "https://projectoberon.net",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+imperative", "para+modular", "para+objects", "para+structured"]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+static", "tsys+strong"]);

  plb.addPlatforms(pl, [
    "platf+amiga",
    "platf+arm",
    "platf+atari",
    "platf+ia-32",
    "platf+linux",
    "platf+windows",
    "platf+x86-64",
  ]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, ["pl+Active-Oberon", "pl+Oberon-2", "pl+Obliq"]);

  plb.addInfluences(pl, [
    "pl+Active-Oberon",
    "pl+Component-Pascal",
    "pl+Go",
    "pl+Modula-2",
    "pl+Nim",
    "pl+Oberon-2",
    "pl+V-(Vlang)",
    "pl+Zonnon",
  ]);

  plb.addInfluenced(pl, [
    "pl+Active-Oberon",
    "pl+Component-Pascal",
    "pl+Go",
    "pl+Java",
    "pl+Modula-2",
    "pl+Modula-3",
    "pl+Nim",
    "pl+Oberon-2",
    "pl+Object-Oberon",
    "pl+Obliq",
    "pl+Pascal",
    "pl+V",
    "pl+Zonnon",
  ]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1987-01-01",
      kind: "first",
    },
    {
      version: "unknown",
      date: "2020-03-06",
      kind: "stable",
    },
  ]);
}
