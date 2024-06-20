import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Stateflow" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Stateflow";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Stateflow",
      href: "https://en.wikipedia.org/wiki/Stateflow",
    },
    {
      kind: "homepage",
      title: "Stateflow product page",
      href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+proprietary"]);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, ["platf+x64"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2018-09-12",
      kind: "stable",
    },
    {
      version: "unknown",
      date: "2018-06-14",
      kind: "preview",
    },
  ]);
}
