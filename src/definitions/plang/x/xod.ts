import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+XOD" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "XOD";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "XOD",
      href: "https://en.wikipedia.org/wiki/XOD_(programming_language)",
    },
    {
      kind: "homepage",
      title: "xod.io",
      href: "http://xod.io",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+gnu-affero-gpl"]);

  plb.addParadigms(pl, ["para+dataflow", "para+declarative", "para+functional", "para+visual"]);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, ["platf+arduino", "platf+rpi"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2016-01-01",
      kind: "first",
    },
    {
      version: "0.38.0",
      date: "2021-03-12",
      kind: "stable",
    },
  ]);
}
