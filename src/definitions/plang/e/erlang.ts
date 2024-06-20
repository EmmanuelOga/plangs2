import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Erlang" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Erlang";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Erlang",
    "href": "https://en.wikipedia.org/wiki/Erlang_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "www.erlang.org",
    "href": "https://www.erlang.org"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".erl",".hrl"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Joe-Armstrong","designer"]]);

   plb.addLicenses(pl, ["license+apache-2"]);

   plb.addParadigms(pl, [
  "para+concurrent",
  "para+functional",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+strong"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, ["pl+LFE"]);

   plb.addInfluences(pl, [
  "pl+Akka",
  "pl+Clojure",
  "pl+Dart",
  "pl+Elixir",
  "pl+F-Sharp",
  "pl+Go",
  "pl+Lisp",
  "pl+Opa",
  "pl+Oz",
  "pl+PLEX",
  "pl+Prolog",
  "pl+Reia",
  "pl+Rust",
  "pl+Scala",
  "pl+Smalltalk"
]);

   plb.addInfluenced(pl, [
  "pl+Clojure",
  "pl+Dart",
  "pl+Elixir",
  "pl+Fantom",
  "pl+Gleam",
  "pl+LFE",
  "pl+ML",
  "pl+Opa",
  "pl+Oz",
  "pl+Plex",
  "pl+Prolog",
  "pl+Rust",
  "pl+Scala",
  "pl+Smalltalk"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1986-01-01",
    "kind": "first"
  },
  {
    "version": "26.2.5",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}