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
        { version: "unknown", kind: "stable" },
        { version: "4.9.5", date: "2023-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+lisp", "pl+scheme", "pl+multilisp"],
      licenses: ["lic+lgpl", "lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+meta"],
      people: ["person+marc-feeley"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );
}
