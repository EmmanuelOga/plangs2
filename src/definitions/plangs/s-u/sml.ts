import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sml",
    "Standard ML",
    {
      name: "Standard ML",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "repository", title: "smlfamily.github.io", href: "https://smlfamily.github.io/" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
        { kind: "homepage", title: "www.smlnj.org", href: "http://www.smlnj.org" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".sml", ".sml"],
    },
    {
      dialects: ["pl+alice", "pl+concurrent-ml", "pl+dependent-ml", "pl+mlton", "pl+sml"],
      implementations: ["pl+sml", "pl+mlton", "pl+poly-slashml", "pl+c"],
      influences: ["pl+ml", "pl+hope", "pl+pascal", "pl+sml"],
      licenses: ["lic+permissive"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+modular"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
