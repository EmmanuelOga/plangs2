import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+CSP" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "CSP";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "CSP",
      href: "https://en.wikipedia.org/wiki/Communicating_sequential_processes",
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

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, ["pl+Handel-C", "pl+Limbo", "pl+Newsqueak"]);

  plb.addReleases(pl, []);
}
