import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+GNU-Guile" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "GNU Guile";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "GNU Guile",
      href: "https://en.wikipedia.org/wiki/GNU_Guile",
    },
    {
      kind: "homepage",
      title: "gnu.org/software/guile",
      href: "https://gnu.org/software/guile",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, []);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [
    ["person+Aubrey-Jaffer", "designer"],
    ["person+Miles-Bader", "designer"],
    ["person+Tom-Lord", "designer"],
  ]);

  plb.addLicenses(pl, ["license+lgpl-3"]);

  plb.addParadigms(pl, []);

  plb.addTypeSystems(pl, []);

  plb.addPlatforms(pl, [
    "platf+aarch64",
    "platf+arm",
    "platf+bsd",
    "platf+cygwin",
    "platf+ia-32",
    "platf+linux",
    "platf+mingw",
    "platf+mips",
    "platf+windows",
    "platf+x86-64",
  ]);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, ["pl+Lisp", "pl+SCM", "pl+Scheme"]);

  plb.addInfluenced(pl, ["pl+SCM"]);

  plb.addReleases(pl, [
    {
      version: "unknown",
      date: "1993-01-01",
      kind: "first",
    },
    {
      version: "3.0.9",
      date: "2023-01-25",
      kind: "stable",
    },
  ]);
}
