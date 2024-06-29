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
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2023-05-29", kind: "stable" },
      ],
      extensions: [".sd7", ".s7i"],
    },
    {
      implementations: ["pl+open-source"],
      influences: ["pl+ada", "pl+java", "pl+cpp", "pl+modula", "pl+pascal", "pl+algol", "pl+c"],
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
      people: ["person+thomas-mertes"],
      platforms: ["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"],
    },
  );
}
