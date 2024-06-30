import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hypertalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
    },
    { influences: ["pl+pascal"], paradigms: ["para+imperative", "para+event"] },
  );
}
