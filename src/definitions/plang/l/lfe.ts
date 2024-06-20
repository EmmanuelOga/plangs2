import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+LFE" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "LFE";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "LFE",
      href: "https://en.wikipedia.org/wiki/LFE_(programming_language)",
    },
    {
      kind: "homepage",
      title: "lfe.io",
      href: "http://lfe.io",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Robert-Virding", "designer"]]);

  plb.addLicenses(pl, ["license+apache"]);

  plb.addParadigms(pl, ["para+concurrent", "para+functional", "para+multi-paradigm"]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

  plb.addPlatforms(pl, ["platf+cross-platform"]);

  plb.addImplementations(pl, ["pl+Erlang"]);

  plb.addDialects(pl, ["pl+Lisp"]);

  plb.addInfluences(pl, [
    "pl+Clojure",
    "pl+Common-Lisp",
    "pl+Concurrent-Schemer",
    "pl+Elixir",
    "pl+Erlang",
    "pl+Hy",
    "pl+Joxa",
    "pl+Maclisp",
    "pl+Scheme",
  ]);

  plb.addInfluenced(pl, ["pl+Clojure", "pl+Elixir"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2008-01-01",
      kind: "first",
    },
    {
      version: "2.1.1",
      date: "2023-01-06",
      kind: "stable",
    },
  ]);
}
