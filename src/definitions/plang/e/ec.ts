import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+eC" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "eC";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "eC",
      href: "https://en.wikipedia.org/wiki/EC_(programming_language)",
    },
    {
      kind: "homepage",
      title: "ec-lang.org",
      href: "http://ec-lang.org/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".ec", ".eh"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+bsd-3"]);

  plb.addParadigms(pl, ["para+generic", "para+imperative", "para+multi-paradigm", "para+objects"]);

  plb.addTypeSystems(pl, ["tsys+inferred", "tsys+nominative", "tsys+static"]);

  plb.addPlatforms(pl, ["platf+cross-platform"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+C", "pl+C-Plus-Plus", "pl+Python"]);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2004-01-01",
      kind: "first",
    },
    {
      version: "0.44.15",
      date: "2016-08-04",
      kind: "stable",
    },
  ]);
}
