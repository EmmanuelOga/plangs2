import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Futhark" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Futhark";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Futhark",
      href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)",
    },
    {
      kind: "homepage",
      title: "futhark-lang.org",
      href: "http://futhark-lang.org",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [
    ["person+Cosmin-Oancea", "designer"],
    ["person+Martin-Elsman", "designer"],
    ["person+Troels-Henriksen", "designer"],
  ]);

  plb.addLicenses(pl, ["license+isc"]);

  plb.addParadigms(pl, ["para+array", "para+functional"]);

  plb.addTypeSystems(pl, [
    "tsys+dependent",
    "tsys+inferred",
    "tsys+static",
    "tsys+strong",
    "tsys+uniqueness",
  ]);

  plb.addPlatforms(pl, ["platf+cross-platform"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+APL", "pl+Haskell", "pl+NESL", "pl+Standard-ML"]);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [{ version: "unknown", date: "2014-01-01", kind: "first" }]);
}
