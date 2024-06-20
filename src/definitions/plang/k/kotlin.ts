import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Kotlin" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Kotlin";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Kotlin",
      href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)",
    },
    {
      kind: "homepage",
      title: "kotlinlang.org",
      href: "https://kotlinlang.org/",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".kexe", ".klib", ".kt", ".kts"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, []);

  plb.addLicenses(pl, ["license+apache-2"]);

  plb.addParadigms(pl, [
    "para+concurrent",
    "para+declarative",
    "para+functional",
    "para+generic",
    "para+imperative",
    "para+multi-paradigm",
    "para+objects",
    "para+reflective",
    "para+visual",
  ]);

  plb.addTypeSystems(pl, ["tsys+inferred", "tsys+static", "tsys+strong"]);

  plb.addPlatforms(pl, [
    "platf+android",
    "platf+cross-platform",
    "platf+ios",
    "platf+jvm",
    "platf+linux",
    "platf+llvm",
    "platf+macos",
    "platf+tvos",
    "platf+watchos",
    "platf+web",
    "platf+windows",
  ]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, [
    "pl+C-Sharp",
    "pl+Eiffel",
    "pl+Gosu",
    "pl+Groovy",
    "pl+Java",
    "pl+JavaScript",
    "pl+ML",
    "pl+Python",
    "pl+Scala",
    "pl+V-(Vlang)",
  ]);

  plb.addInfluenced(pl, ["pl+Gosu", "pl+Groovy", "pl+Java", "pl+ML", "pl+Scala", "pl+V"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "2011-07-22",
      kind: "first",
    },
    {
      version: "2.0.0",
      date: "2024-01-01",
      kind: "stable",
    },
  ]);
}
