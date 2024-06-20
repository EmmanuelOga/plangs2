import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Lean" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Lean";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Lean",
    "href": "https://en.wikipedia.org/wiki/Lean_(proof_assistant)"
  },
  {
    "kind": "homepage",
    "title": "lean-lang.org",
    "href": "https://lean-lang.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+apache-2"]);

   plb.addParadigms(pl, ["para+functional","para+imperative"]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Cross-platform"]);

   plb.addImplementations(pl, ["pl+C-Plus-Plus"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Coq","pl+Haskell","pl+ML"]);

   plb.addInfluenced(pl, ["pl+F-Star"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2013-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2024-04-03",
    "kind": "stable"
  },
  {
    "version": "unknown",
    "date": "2024-05-02",
    "kind": "preview"
  }
]);
}