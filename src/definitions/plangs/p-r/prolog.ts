import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+prolog",
    {
      name: "Prolog",
      websites: [{ kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" }],
      releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
      extensions: [".P", ".pl", ".pro"],
    },
    {
      dialects: ["pl+datalog"],
      implementations: [
        "pl+b-prolog",
        "pl+ciao",
        "pl+eclipse",
        "pl+gnu-prolog",
        "pl+poplog",
        "pl+quintus-prolog",
        "pl+swi-prolog",
        "pl+xsb",
        "pl+yap",
      ],
      influences: ["pl+mdl", "pl+planner"],
      paradigms: ["para+logic"],
      people: ["person+alain-colmerauer"],
    },
  );
}
