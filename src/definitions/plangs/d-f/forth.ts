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
      people: ["person+charles-h-moore"],
      paradigms: ["para+concatenative", "para+imperative", "para+reflective", "para+stack"],
    },
  );
}
