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
      dialects: ["pl+alice", "pl+mlton", "pl+sml", "pl+concurrent-ml", "pl+dependent-ml"],
      implementations: ["pl+sml", "pl+c", "pl+mlton", "pl+poly-slashml"],
      influences: ["pl+ml", "pl+sml", "pl+hope", "pl+pascal"],
      licenses: ["lic+permissive"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular"],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+inferred"],
    },
  );
}
