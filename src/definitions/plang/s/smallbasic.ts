import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+SmallBASIC" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "SmallBASIC";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "SmallBASIC",
      href: "https://en.wikipedia.org/wiki/SmallBasic",
    },
    {
      kind: "repository",
      title: "smallbasic.github.io",
      href: "https://smallbasic.github.io",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".bas"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+gpl-3"]);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, ["pl+BASIC"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [{ version: "12.27", date: "2024-04-26", kind: "stable" }]);
}
