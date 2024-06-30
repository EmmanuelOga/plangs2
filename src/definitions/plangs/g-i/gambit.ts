import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gambit",
    {
      name: "Gambit",
      websites: [
        { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
      ],
      releases: [{ version: "4.9.5", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+lisp", "pl+scheme", "pl+multilisp"],
      licenses: ["lic+lgpl", "lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
