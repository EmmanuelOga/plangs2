import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tea",
    {
      name: "Tea",
      websites: [
        { kind: "wikipedia", title: "Tea", href: "https://en.wikipedia.org/wiki/Tea_(programming_language)" },
        { kind: "repository", title: "Tea", href: "https://github.com/jorgefranconunes/tea" },
      ],
    },
    {
      influences: ["pl+java", "pl+scheme", "pl+tcl"],
      paradigms: ["para+class", "para+functional", "para+multi", "para+objects"],
    },
  );
}
