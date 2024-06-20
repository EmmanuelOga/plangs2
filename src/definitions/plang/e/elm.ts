import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Elm" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Elm";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Elm",
    "href": "https://en.wikipedia.org/wiki/Elm_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "elm-lang.org",
    "href": "https://elm-lang.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".elm"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Evan-Czaplicki","designer"]]);

   plb.addLicenses(pl, ["license+bsd-revised","license+permissive"]);

   plb.addParadigms(pl, ["para+functional"]);

   plb.addTypeSystems(pl, ["tsys+inferred","tsys+static","tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Windows","platf+macOS","platf+x86-64"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+F-Sharp",
  "pl+Haskell",
  "pl+OCaml",
  "pl+Redux",
  "pl+Rust",
  "pl+Standard-ML",
  "pl+Vue"
]);

   plb.addInfluenced(pl, ["pl+Gleam","pl+ML","pl+OCaml","pl+Rust","pl+Standard-ML"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2012-03-30",
    "kind": "first"
  },
  {
    "version": "0.19.1",
    "date": "2019-10-21",
    "kind": "stable"
  }
]);
}