import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Elixir" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Elixir";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Elixir",
    "href": "https://en.wikipedia.org/wiki/Elixir_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "elixir-lang.org",
    "href": "https://elixir-lang.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".ex",".exs"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Jose-Valim","designer"]]);

   plb.addLicenses(pl, ["license+apache-2"]);

   plb.addParadigms(pl, [
  "para+concurrent",
  "para+distributed",
  "para+functional",
  "para+multi-paradigm",
  "para+process-oriented"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+strong"]);

   plb.addPlatforms(pl, ["platf+Erlang"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+Clojure","pl+Erlang","pl+Gleam","pl+LFE","pl+Ruby"]);

   plb.addInfluenced(pl, ["pl+Clojure","pl+Erlang","pl+Gleam","pl+LFE","pl+Lisp","pl+Ruby"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2012-01-01",
    "kind": "first"
  },
  {
    "version": "1.16.3",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}