import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+PowerBASIC" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "PowerBASIC";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PowerBasic-screen-shot.png/300px-PowerBasic-screen-shot.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "PowerBASIC",
      href: "https://en.wikipedia.org/wiki/PowerBASIC",
    },
    {
      kind: "homepage",
      title: "www.powerbasic.com",
      href: "https://www.powerbasic.com/",
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

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Turbo-Basic"]);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1989-01-01",
      kind: "first",
    },
    {
      version: "10.0",
      date: "2011-05-04",
      kind: "stable",
    },
  ]);
}
