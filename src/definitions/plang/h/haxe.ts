import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Haxe" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Haxe";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Haxe",
      href: "https://en.wikipedia.org/wiki/Haxe",
    },
    {
      kind: "homepage",
      title: "haxe.org",
      href: "https://haxe.org",
    },
  ]);

  plb.addScoping(pl, ["lexical"]);

  plb.addExtensions(pl, [".hx", ".hxml"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+gpl", "license+mit"]);

  plb.addParadigms(pl, ["para+functional", "para+generic", "para+multi-paradigm", "para+objects"]);

  plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+nominative", "tsys+static"]);

  plb.addPlatforms(pl, [
    "platf+aarch64",
    "platf+android",
    "platf+arm",
    "platf+ia-32",
    "platf+ios",
    "platf+linux",
    "platf+macos",
    "platf+mips",
    "platf+windows",
    "platf+x86-64",
  ]);

  plb.addImplementations(pl, ["pl+OCaml"]);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, [
    "pl+ActionScript",
    "pl+C-Plus-Plus",
    "pl+C-Sharp",
    "pl+ECMAScript",
    "pl+Java",
    "pl+JavaScript",
    "pl+Lua",
    "pl+NekoVM",
    "pl+OCaml",
    "pl+PHP",
    "pl+Python",
  ]);

  plb.addInfluenced(pl, ["pl+ActionScript", "pl+Java", "pl+JavaScript", "pl+OCaml"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2005-11-14",
      kind: "first",
    },
    {
      version: "4.3.4",
      date: "2024-01-01",
      kind: "stable",
    },
  ]);
}
