import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+optimj",
    {
      name: "OptimJ",
      websites: [
        { kind: "wikipedia", title: "OptimJ", href: "https://en.wikipedia.org/wiki/OptimJ" },
        { kind: "homepage", title: "www.Ateji.com", href: "http://www.ateji.com/" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+objects"] },
  );
}
