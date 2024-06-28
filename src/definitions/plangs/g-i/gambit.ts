import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gambit",
    "Gambit",
    {
      name: "Gambit",
      websites: [
        { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
        { kind: "homepage", title: "gambitscheme.org", href: "http://gambitscheme.org" },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "4.9.5", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://gambitscheme.org/latest/", title: "Gambit Scheme - Gambit 4.9.4" }],
      },
    },
    {
      influences: ["pl+lisp", "pl+multilisp", "pl+scheme"],
      licenses: ["lic+apache", "lic+lgpl"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [["person+marc-feeley", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
