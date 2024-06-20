import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+AssemblyScript" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "AssemblyScript";

   const plb = g.plangBuilder;

   plb.addImages(pl, [{"kind":"logo","url":"https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg"}]);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "AssemblyScript",
    "href": "https://en.wikipedia.org/wiki/AssemblyScript"
  },
  {
    "kind": "homepage",
    "title": "www.assemblyscript.org",
    "href": "https://www.assemblyscript.org/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, [["person+Daniel-Wirtz","designer"],["person+Max-Graey","designer"]]);

   plb.addLicenses(pl, ["license+apache-2"]);

   plb.addParadigms(pl, [
  "para+functional",
  "para+generic",
  "para+imperative",
  "para+multi-paradigm",
  "para+objects"
]);

   plb.addTypeSystems(pl, ["tsys+static"]);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+JavaScript","pl+TypeScript","pl+WebAssembly"]);

   plb.addInfluenced(pl, ["pl+ArkTS","pl+JavaScript","pl+TypeScript"]);

   plb.addReleases(pl, [
  {
    "version": "unknown",
    "date": "2017-01-01",
    "kind": "first"
  },
  {
    "version": "0.27.27",
    "date": "2024-01-01",
    "kind": "stable"
  }
]);
}