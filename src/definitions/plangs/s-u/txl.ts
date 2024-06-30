import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+txl",
    {
      name: "TXL",
      websites: [{ kind: "wikipedia", title: "TXL", href: "https://en.wikipedia.org/wiki/TXL_(programming_language)" }],
    },
    { people: ["person+james-cordy"], paradigms: ["para+pattern", "para+term"] },
  );
}
