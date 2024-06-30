import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+supercollider",
    {
      name: "SuperCollider",
      websites: [{ kind: "wikipedia", title: "SuperCollider", href: "https://en.wikipedia.org/wiki/SuperCollider" }],
    },
    { influences: ["pl+j"] },
  );
}
