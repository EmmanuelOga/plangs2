import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hypertalk",
    "HyperTalk",
    {
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    { influences: ["pl+pascal"], paradigms: ["para+event", "para+imperative"] },
  );
}
