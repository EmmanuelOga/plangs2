import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+curry",
    "Curry",
    {
      name: "Curry",
      websites: [
        { kind: "wikipedia", title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)" },
        {
          kind: "homepage",
          title: "curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
          href: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
        },
      ],
      releases: [
        { version: "unknown", date: "1995-01-01", kind: "first" },
        { version: "3.6.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://www.informatik.uni-kiel.de/~pakcs/download.html",
            title: "Current release:PAKCS Version 3.6.0 (10/11/23)",
          },
        ],
      },
    },
    {
      implementations: ["pl+c", "pl+haskell", "pl+prolog"],
      influences: ["pl+haskell", "pl+prolog"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+logic"],
      people: [
        ["person+michael-hanus", "designer"],
        ["person+sergio-antoy", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+x86-64"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
