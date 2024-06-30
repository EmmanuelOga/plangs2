import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xod",
    {
      name: "XOD",
      websites: [{ kind: "wikipedia", title: "XOD", href: "https://en.wikipedia.org/wiki/XOD_(programming_language)" }],
      releases: [{ version: "0.38.0", date: "2021-01-01", kind: "stable" }],
    },
    {
      licenses: ["lic+gnu-affero-gpl"],
      paradigms: ["para+dataflow", "para+dec", "para+functional", "para+visual"],
      platforms: ["platf+arduino", "platf+rpi"],
    },
  );
}
