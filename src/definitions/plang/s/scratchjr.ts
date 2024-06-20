import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+ScratchJr" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "ScratchJr";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "ScratchJr",
      href: "https://en.wikipedia.org/wiki/ScratchJr",
    },
    {
      kind: "homepage",
      title: "www.scratchjr.org",
      href: "http://www.scratchjr.org",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, ["platf+android", "platf+chromeos", "platf+ios"]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, ["pl+Scratch"]);

  plb.addReleases(pl, [{ version: "unknown", date: "2014-01-01", kind: "first" }]);
}
