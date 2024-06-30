import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+trac",
    {
      name: "TRAC",
      websites: [
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_(programming_language)" },
        { kind: "wikipedia", title: "TRAC", href: "https://en.wikipedia.org/wiki/TRAC_programming_language" },
      ],
    },
    { paradigms: ["para+macros"], people: ["person+calvin-mooers"] },
  );
}
