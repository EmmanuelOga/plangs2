import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+seed7",
    "Seed7",
    {
      name: "Seed7",
      websites: [{ kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" }],
      releases: [{ version: "unknown", date: "2023-05-29", kind: "stable" }],
    },
    {
      implementations: ["pl+open-source"],
      influences: ["pl+ada", "pl+algol", "pl+c", "pl+cpp", "pl+java", "pl+modula", "pl+pascal"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: [
        "para+multi",
        "para+extensible",
        "para+objects",
        "para+imperative",
        "para+structured",
        "para+generic",
        "para+reflective",
      ],
      platforms: ["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"],
    },
  );
}
