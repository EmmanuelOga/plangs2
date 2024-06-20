import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Logo" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Logo";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Logo",
    "href": "https://en.wikipedia.org/wiki/Logo_(programming_language)"
  },
  {
    "kind": "wikipedia",
    "title": "Logo",
    "href": "https://en.wikipedia.org/wiki/ObjectLOGO"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [
  [
    "person+Cynthia-Solomon",
    "designer"
  ],
  [
    "person+Seymour-Papert",
    "designer"
  ],
  [
    "person+Wally-Feurzeig",
    "designer"
  ]
]);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, [
  "para+educational",
  "para+functional",
  "para+imperative",
  "para+multi-paradigm",
  "para+reflective"
]);

   plb.addTypeSystems(pl, ["tsys+dynamic"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, ["pl+UCBLogo"]);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, [
  "pl+AgentSheets",
  "pl+Etoys",
  "pl+Lisp",
  "pl+Microsoft-Small-Basic",
  "pl+NetLogo",
  "pl+REBOL",
  "pl+Scratch",
  "pl+Smalltalk"
]);

   plb.addInfluenced(pl, [
  "pl+AgentCubes",
  "pl+AgentSheets",
  "pl+Etoys",
  "pl+Ezhil",
  "pl+Lisp",
  "pl+Microsoft-Small-Basic",
  "pl+NetLogo",
  "pl+Rebol",
  "pl+Scratch",
  "pl+Smalltalk",
  "pl+Snap-",
  "pl+Squeak",
  "pl+StarLogo",
  "pl+The-Kojo-Learning-Environment",
  "pl+TurtleStitch",
  "pl+VisualWorks"
]);

   plb.addReleases(pl, [{"version":"unknown","date":"1967-01-01","kind":"first"}]);
}