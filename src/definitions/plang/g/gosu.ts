import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Gosu" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Gosu";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [
  {
    "kind": "wikipedia",
    "title": "Gosu",
    "href": "https://en.wikipedia.org/wiki/Gosu_(programming_language)"
  },
  {
    "kind": "repository",
    "title": "gosu-lang.github.io",
    "href": "https://gosu-lang.github.io/"
  }
]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, [".gs",".gsp",".gst",".gsx"]);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, ["license+apache-2"]);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, ["tsys+static"]);

   plb.addPlatforms(pl, ["platf+Java-Virtual-Machine","platf+bytecode"]);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, ["pl+C-Sharp","pl+Java","pl+Kotlin"]);

   plb.addInfluenced(pl, ["pl+Kotlin"]);

   plb.addReleases(pl, [{"version":"1.17.10","date":"2024-01-01","kind":"stable"}]);
}