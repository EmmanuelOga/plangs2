import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+XSLT" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "XSLT";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "XSLT",
      href: "https://en.wikipedia.org/wiki/XSLT",
    },
    {
      kind: "homepage",
      title: "www.w3.org/TR/xslt-30/",
      href: "https://www.w3.org/TR/xslt-30/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".xslt"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, ["para+declarative"]);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, ["pl+Saxon", "pl+Xalan", "pl+libxslt"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+DSSSL"]);

  plb.addInfluenced(pl, ["pl+Boomerang", "pl+XQuery"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1998-01-01",
      kind: "first",
    },
    {
      version: "3.0",
      date: "2017-06-08",
      kind: "stable",
    },
  ]);
}
