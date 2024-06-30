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
      influences: ["pl+lisp", "pl+multilisp", "pl+scheme"],
      licenses: ["lic+apache", "lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
