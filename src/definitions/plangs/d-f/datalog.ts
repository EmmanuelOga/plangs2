import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+datalog",
    {
      name: "Datalog",
      websites: [{ kind: "wikipedia", title: "Datalog", href: "https://en.wikipedia.org/wiki/Datalog" }],
    },
    {
      dialects: ["pl+.ql", "pl+datomic", "pl+souffle"],
      influences: ["pl+prolog"],
      paradigms: ["para+dec", "para+logic"],
      typeSystems: ["tsys+weak"],
    },
  );
}
