import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+GNAT" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "GNAT";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "GNAT",
      href: "https://en.wikipedia.org/wiki/GNAT",
    },
    {
      kind: "homepage",
      title: "www.getadanow.com",
      href: "http://www.getadanow.com",
    },
    {
      kind: "homepage",
      title: "www.adacore.com/gnatpro/",
      href: "http://www.adacore.com/gnatpro/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+gnu-gpl-3-plus"]);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1995-01-01",
      kind: "first",
    },
    {
      version: "9.2",
      date: "2019-08-12",
      kind: "stable",
    },
  ]);
}
