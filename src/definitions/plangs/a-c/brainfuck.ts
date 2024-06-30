import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+brainfuck",
    {
      name: "Brainfuck",
      websites: [{ kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" }],
    },
    { influences: ["pl+p--", "pl+esoteric"], paradigms: ["para+esoteric", "para+imperative", "para+structured"] },
  );
}
