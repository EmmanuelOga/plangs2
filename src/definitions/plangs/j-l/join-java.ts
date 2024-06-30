import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+join-java",
    {
      name: "Join Java",
      websites: [
        { kind: "wikipedia", title: "Join Java", href: "https://en.wikipedia.org/wiki/Join_Java" },
        { kind: "homepage", title: "joinjava.unisa.edu.au", href: "http://joinjava.unisa.edu.au/" },
      ],
    },
    { influences: ["pl+java"], paradigms: ["para+imperative", "para+reflective"] },
  );
}
