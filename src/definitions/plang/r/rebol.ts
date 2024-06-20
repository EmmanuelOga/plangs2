import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Rebol" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Rebol";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Rebol",
      href: "https://en.wikipedia.org/wiki/Rebol",
    },
    {
      kind: "wikipedia",
      title: "Rebol",
      href: "https://en.wikipedia.org/wiki/REBOL",
    },
    {
      kind: "homepage",
      title: "www.rebol.com",
      href: "http://www.rebol.com",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".r", ".reb"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Carl-Sassenrath", "designer"]]);

  plb.addLicenses(pl, ["license+apache-2", "license+freely-redistributable-software"]);

  plb.addParadigms(pl, [
    "para+data-driven",
    "para+functional",
    "para+imperative",
    "para+language-oriented",
    "para+prototypes",
  ]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

  plb.addPlatforms(pl, ["platf+cross-platform"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Forth", "pl+JSON", "pl+Lisp", "pl+Logo", "pl+Red", "pl+Self"]);

  plb.addInfluenced(pl, ["pl+Forth", "pl+Lisp", "pl+Red", "pl+Self", "pl+UCBLogo"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1997-01-01",
      kind: "first",
    },
    {
      version: "2.7.8",
      date: "2011-01-01",
      kind: "stable",
    },
    {
      version: "2.101.0",
      date: "2012-01-01",
      kind: "preview",
    },
  ]);
}
