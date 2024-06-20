import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Gambit" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Gambit";

  const plb = g.plangBuilder;

  plb.addImages(pl, []);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Gambit",
      href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)",
    },
    {
      kind: "homepage",
      title: "gambitscheme.org",
      href: "http://gambitscheme.org",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Marc-Feeley", "designer"]]);

  plb.addLicenses(pl, ["license+apache", "license+lgpl"]);

  plb.addParadigms(pl, ["para+functional", "para+imperative", "para+meta", "para+multi-paradigm"]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  plb.addPlatforms(pl, ["platf+cross-platform", "platf+ia-32", "platf+x86-64"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Gerbil-Scheme", "pl+Lisp", "pl+Scheme", "pl+Termite-Scheme"]);

  plb.addInfluenced(pl, ["pl+MultiLisp"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1988-01-01",
      kind: "first",
    },
    {
      version: "4.9.5",
      date: "2023-01-01",
      kind: "stable",
    },
  ]);
}
