import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+ECMAScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "ECMAScript";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "ECMAScript",
    "href": "https://en.wikipedia.org/wiki/ECMAScript"
  },
  {
    "kind": "homepage",
    "title": "Standards",
    "href": "https://www.ecma-international.org/publications-and-standards/standards/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Brendan-Eich",
    "designer"
  ],
  [
    "person+Ecma-International",
    "designer"
  ]
]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, [
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+prototypes"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic","tsys+weak"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, [
  "pl+ActionScript",
  "pl+Google-Apps-Script",
  "pl+InScript",
  "pl+JScript",
  "pl+JavaScript",
  "pl+QtScript"
]);

   plb.addDialects(pl, ["pl+Haxe"]);

   plb.addInfluences(pl, [
  "pl+AWK",
  "pl+C",
  "pl+CoffeeScript",
  "pl+HyperTalk",
  "pl+Java",
  "pl+Perl",
  "pl+Python",
  "pl+Scheme",
  "pl+Self"
]);

   plb.addInfluenced(pl, ["pl+Haxe","pl+HyperTalk","pl+JScript-.NET","pl+Java"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "1997-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "1997-01-01",
    "kind": "first"
  },
  {
    "version": "unknown",
    "date": "2023-01-01",
    "kind": "other"
  }
]);
}