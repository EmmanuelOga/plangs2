import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+futhark",
    "Futhark",
    {
      name: "Futhark",
      websites: [
        { kind: "wikipedia", title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)" },
        { kind: "homepage", title: "futhark-lang.org", href: "http://futhark-lang.org" },
      ],
      references: { developer: [{ href: "https://futhark-lang.org/license.html", title: "License" }] },
      releases: [{ version: "unknown", date: "2014-01-01", kind: "first" }],
    },
    {
      influences: ["pl+apl", "pl+haskell", "pl+nesl", "pl+standard-ml"],
      licenses: ["lic+isc"],
      paradigms: ["para+array", "para+functional"],
      people: [
        ["person+cosmin-oancea", "designer"],
        ["person+martin-elsman", "designer"],
        ["person+troels-henriksen", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness"],
    },
  );

  /**/
}
