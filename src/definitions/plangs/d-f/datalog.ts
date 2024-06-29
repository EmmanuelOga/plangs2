import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+datalog",
    "Datalog",
    {
      name: "Datalog",
      websites: [{ kind: "wikipedia", title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
    },
    {
      dialects: ["pl+datomic", "pl+.ql", "pl+souffle"],
      influences: ["pl+prolog"],
      paradigms: ["para+logic", "para+dec"],
      typeSystems: ["tsys+weak"],
    },
  );
}
