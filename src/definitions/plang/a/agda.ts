import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Agda" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Agda";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Agda",
      href: "https://en.wikipedia.org/wiki/Agda_(programming_language)",
    },
    {
      kind: "wikipedia",
      title: "Agda",
      href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)",
    },
    {
      kind: "homepage",
      title: "wiki.portal.chalmers.se/agda",
      href: "http://wiki.portal.chalmers.se/agda",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".agda", ".lagda"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Ulf-Norell", "designer"]]);

  plb.addLicenses(pl, ["license+bsd-like"]);

  plb.addParadigms(pl, ["para+functional"]);

  plb.addTypeSystems(pl, [
    "tsys+dependent",
    "tsys+inferred",
    "tsys+manifest",
    "tsys+nominative",
    "tsys+static",
    "tsys+strong",
  ]);

  plb.addPlatforms(pl, ["platf+cross-platform"]);

  plb.addImplementations(pl, ["pl+Haskell"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Coq", "pl+Epigram", "pl+Haskell", "pl+Idris"]);

  plb.addInfluenced(pl, ["pl+Epigram", "pl+Idris"]);

  plb.addReleases(pl, [
    {
      version: "1.0",
      date: "2007-01-01",
      kind: "first",
    },
    {
      version: "2.6.3",
      date: "2023-01-30",
      kind: "stable",
    },
  ]);
}
