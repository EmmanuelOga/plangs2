import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Go" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Go";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Go",
    "href": "https://en.wikipedia.org/wiki/Go_(programming_language)"
  },
  {
    "kind": "homepage",
    "title": "go.dev",
    "href": "https://go.dev"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".go"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Ken-Thompson",
    "designer"
  ],
  [
    "person+Rob-Pike",
    "designer"
  ],
  [
    "person+Robert-Griesemer",
    "designer"
  ],
  [
    "person+The-Go-Authors",
    "designer"
  ]
]);

   plb.addLicenses(pl, ["license+3-clause-bsd","license+patent"]);

   plb.addParadigms(pl, [
  "para+concurrent",
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, [
  "tsys+inferred",
  "tsys+nominative",
  "tsys+static",
  "tsys+strong",
  "tsys+structural"
]);

   plb.addPlatforms(pl, [
  "platf+DragonFly-BSD",
  "platf+FreeBSD",
  "platf+Linux",
  "platf+NetBSD",
  "platf+OpenBSD",
  "platf+Plan-9",
  "platf+Solaris",
  "platf+Windows",
  "platf+macOS"
]);

   plb.addImplementations(pl, ["pl+Assembly-language","pl+C-Plus-Plus"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+APL",
  "pl+Active-Oberon",
  "pl+Alef",
  "pl+BCPL",
  "pl+C",
  "pl+Crystal",
  "pl+Limbo",
  "pl+Modula",
  "pl+Modula-2",
  "pl+Newsqueak",
  "pl+Oberon",
  "pl+Oberon-2",
  "pl+Pascal",
  "pl+Smalltalk",
  "pl+V--Vlang-",
  "pl+communicating-sequential-processes",
  "pl+occam"
]);

   plb.addInfluenced(pl, [
  "pl+Alef",
  "pl+BCPL",
  "pl+Ballerina",
  "pl+C",
  "pl+Crystal",
  "pl+D-programming-language",
  "pl+Erlang",
  "pl+Flix",
  "pl+Gleam",
  "pl+Limbo",
  "pl+Modula",
  "pl+Newsqueak",
  "pl+Oberon",
  "pl+Oberon-2",
  "pl+Pascal",
  "pl+Python",
  "pl+Smalltalk",
  "pl+V",
  "pl+occam"
]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2009-11-10",
    "kind": "first"
  },
  {
    "version": "1.22.4",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}