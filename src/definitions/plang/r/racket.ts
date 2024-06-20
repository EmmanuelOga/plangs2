import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Racket" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Racket";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Racket",
      href: "https://en.wikipedia.org/wiki/Racket_(programming_language)",
    },
    {
      kind: "homepage",
      title: "racket-lang.org",
      href: "https://racket-lang.org/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".rkt"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+apache-2", "license+mit"]);

  plb.addParadigms(pl, [
    "para+functional",
    "para+imperative",
    "para+logic",
    "para+meta",
    "para+modular",
    "para+multi-paradigm",
    "para+objects",
    "para+reflective",
  ]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+static", "tsys+strong"]);

  plb.addPlatforms(pl, ["platf+arm", "platf+cross-platform", "platf+mips", "platf+x86"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, ["pl+Lisp"]);

  plb.addInfluences(pl, ["pl+Clojure", "pl+Eiffel", "pl+Rust", "pl+Scheme", "pl+Scheme-(R6RS)"]);

  plb.addInfluenced(pl, ["pl+Clojure", "pl+Eiffel", "pl+Scheme"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1995-01-28",
      kind: "first",
    },
    {
      version: "8.13",
      date: "2024-01-01",
      kind: "stable",
    },
  ]);
}
