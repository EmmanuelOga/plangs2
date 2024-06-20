import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Zig" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Zig";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Zig_logo_2020.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Zig",
      href: "https://en.wikipedia.org/wiki/Zig_(programming_language)",
    },
    {
      kind: "homepage",
      title: "ziglang.org",
      href: "https://ziglang.org",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".zig", ".zir"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+Andrew-Kelley", "designer"]]);

  plb.addLicenses(pl, ["license+mit"]);

  plb.addParadigms(pl, [
    "para+concurrent",
    "para+functional",
    "para+imperative",
    "para+multi-paradigm",
  ]);

  plb.addTypeSystems(pl, [
    "tsys+generic",
    "tsys+inferred",
    "tsys+static",
    "tsys+strong",
    "tsys+structural",
  ]);

  plb.addPlatforms(pl, [
    "platf+aarch64",
    "platf+arm",
    "platf+bsd",
    "platf+cross-platform",
    "platf+ia-32",
    "platf+linux",
    "platf+mips",
    "platf+risc-v",
    "platf+web",
    "platf+windows",
    "platf+x86-64",
  ]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, []);

  plb.addInfluenced(pl, ["pl+C", "pl+Rust"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2016-02-08",
      kind: "first",
    },
    {
      version: "0.13.0",
      date: "2024-01-01",
      kind: "preview",
    },
  ]);
}
