import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ec",
    {
      name: "eC",
      websites: [{ kind: "wikipedia", title: "eC", href: "https://en.wikipedia.org/wiki/EC_(programming_language)" }],
      releases: [{ version: "0.44.15", date: "2016-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c", "pl+cpp", "pl+python"],
      licenses: ["lic+bsd-3"],
      paradigms: ["para+multi", "para+imperative", "para+objects", "para+generic"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+nominative", "tsys+inferred"],
    },
  );
}
