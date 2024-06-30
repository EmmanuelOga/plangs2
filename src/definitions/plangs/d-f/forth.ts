import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+forth",
    {
      name: "Forth",
      websites: [
        { kind: "wikipedia", title: "Forth", href: "https://en.wikipedia.org/wiki/Forth_(programming_language)" },
      ],
    },
    {
      implementations: ["pl+gforth"],
      paradigms: ["para+concatenative", "para+stack", "para+imperative", "para+reflective"],
      people: ["person+charles-h-moore"],
    },
  );
}
