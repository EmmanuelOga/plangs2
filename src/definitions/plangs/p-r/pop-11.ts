import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pop-11",
    "POP-11",
    {
      name: "POP-11",
      websites: [{ kind: "wikipedia", title: "POP-11", href: "https://en.wikipedia.org/wiki/POP-11" }],
      releases: [{ version: "unknown", date: "2020-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+pop-2"],
      licenses: ["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"],
      paradigms: ["para+multi", "para+structured", "para+reflective", "para+imperative", "para+functional", "para+dec"],
      people: ["person+robin-popplestone"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+cross-platform",
        "platf+openvms",
        "platf+unix",
        "platf+linux",
        "platf+mac",
        "platf+win",
      ],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
