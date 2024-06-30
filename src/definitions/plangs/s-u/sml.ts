import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sml",
    {
      name: "SML/NJ",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
      ],
      releases: [
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+alice", "pl+concurrent-ml", "pl+dependent-ml", "pl+mlton", "pl+sml"],
      implementations: ["pl+c", "pl+mlton", "pl+poly-slashml", "pl+sml"],
      influences: ["pl+hope", "pl+ml", "pl+pascal", "pl+sml"],
      licenses: ["lic+permissive"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
