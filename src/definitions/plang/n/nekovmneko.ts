import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+NekoVMNeko" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "NekoVMNeko";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "NekoVMNeko",
      href: "https://en.wikipedia.org/wiki/Neko_(programming_language)",
    },
    {
      kind: "homepage",
      title: "nekovm.org/specs/syntax",
      href: "http://nekovm.org/specs/syntax",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [
    ["person+Motion-Twin", "designer"],
    ["person+Nicolas-Cannasse", "designer"],
  ]);

  plb.addLicenses(pl, ["license+mit"]);

  plb.addParadigms(pl, [
    "para+multi-paradigm",
    "para+objects",
    "para+prototypes",
    "para+scripting",
    "para+structured",
  ]);

  plb.addTypeSystems(pl, ["tsys+dynamic"]);

  plb.addPlatforms(pl, ["platf+linux", "platf+macos", "platf+windows"]);

  plb.addImplementations(pl, ["pl+OCaml"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, []);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2005-01-01",
      kind: "first",
    },
    {
      version: "2.3.0",
      date: "2019-10-24",
      kind: "stable",
    },
    {
      version: "unknown",
      date: "2005-01-01",
      kind: "first",
    },
  ]);
}
