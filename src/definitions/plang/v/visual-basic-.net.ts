import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Visual-Basic-.NET" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
   const pl = g.v_plang.declare(PL_V_Id);

   pl.name = "Visual Basic .NET";

   const plb = g.plangBuilder;

   plb.addImages(pl, []);

   plb.addWebsites(pl, [{"kind":"wikipedia","title":"Visual Basic .NET","href":"https://en.wikipedia.org/wiki/Visual_Basic_.NET"}]);

   plb.addScoping(pl, []);

   plb.addExtensions(pl, []);

   plb.addReferences(pl, {});

   plb.addPeople(pl, []);

   plb.addLicenses(pl, []);

   plb.addParadigms(pl, []);

   plb.addTypeSystems(pl, []);

   plb.addPlatforms(pl, []);

   plb.addImplementations(pl, []);

   plb.addDialects(pl, []);

   plb.addInfluences(pl, []);

   plb.addInfluenced(pl, ["pl+BASIC","pl+Microsoft-Small-Basic","pl+Visual-Basic"]);

   plb.addReleases(pl, []);
}