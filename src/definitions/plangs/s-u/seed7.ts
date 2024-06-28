import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+seed7",
    "Seed7",
    {
      name: "Seed7",
      websites: [
        { kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" },
        { kind: "homepage", title: "seed7.sourceforge.net", href: "https://seed7.sourceforge.net/" },
      ],
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "unknown", date: "2023-05-29", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://sourceforge.net/p/seed7/news/2023/05/new-seed7-release-2023-05-29/",
            title: "New Seed7 Release 2023-05-29",
          },
        ],
      },
      extensions: [".sd7", ".s7i"],
    },
    {
      implementations: ["pl+open-source"],
      influences: ["pl+ada", "pl+algol-68", "pl+c", "pl+cpp", "pl+java", "pl+modula-2", "pl+pascal"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+extensible",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      people: [["person+thomas-mertes", "designer"]],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
