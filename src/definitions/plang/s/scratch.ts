import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Scratch" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Scratch";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Scratchlogo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Scratch",
      href: "https://en.wikipedia.org/wiki/Scratch_(programming_language)",
    },
    {
      kind: "homepage",
      title: "scratch.mit.edu",
      href: "https://scratch.mit.edu/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".sb", ".sb2", ".sb3"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+bsd-3-clause", "license+gpl-2"]);

  plb.addParadigms(pl, ["para+event-driven", "para+visual"]);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, [
    "platf+android",
    "platf+dos",
    "platf+ios",
    "platf+linux",
    "platf+macos",
    "platf+web",
    "platf+windows",
  ]);

  plb.addImplementations(pl, ["pl+ActionScript", "pl+HTML5", "pl+JavaScript", "pl+Squeak"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, [
    "pl+AgentCubes",
    "pl+AgentSheets",
    "pl+Catrobat",
    "pl+Etoys",
    "pl+HyperCard",
    "pl+Logo",
    "pl+ScratchJr",
    "pl+Smalltalk",
    "pl+Snap-",
    "pl+StarLogo",
    "pl+Turtlestitch",
    "pl+mBlock",
  ]);

  plb.addInfluenced(pl, [
    "pl+AgentCubes",
    "pl+AgentSheets",
    "pl+Etoys",
    "pl+Logo",
    "pl+Smalltalk",
    "pl+Snap-",
    "pl+Squeak",
    "pl+TurtleStitch",
    "pl+UCBLogo",
  ]);

  plb.addReleases(pl, [
    {
      version: "0.1",
      date: "2003-10-11",
      kind: "first",
    },
    {
      version: "3.0",
      date: "2019-01-02",
      kind: "stable",
    },
  ]);
}
