import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Source" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Source";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Source",
      href: "https://en.wikipedia.org/wiki/Source_(programming_language)",
    },
    {
      kind: "homepage",
      title: "docs.sourceacademy.org",
      href: "https://docs.sourceacademy.org/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".js"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+apache"]);

  plb.addParadigms(pl, [
    "para+functional",
    "para+imperative",
    "para+multi-paradigm",
    "para+scripting",
  ]);

  plb.addTypeSystems(pl, ["tsys+duck", "tsys+dynamic"]);

  plb.addPlatforms(pl, ["platf+web"]);

  plb.addImplementations(pl, ["pl+Safari", "pl+properly-tail-recursive"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+JavaScript", "pl+Scheme"]);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2017-01-01",
      kind: "first",
    },
    {
      version: "unknown",
      date: "2021-12-31",
      kind: "stable",
    },
  ]);
}
