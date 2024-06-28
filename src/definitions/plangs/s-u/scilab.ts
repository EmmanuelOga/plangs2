import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scilab",
    "Scilab",
    {
      name: "Scilab",
      websites: [{ kind: "wikipedia", title: "Scilab", href: "https://en.wikipedia.org/wiki/Scilab" }],
    },
    { influences: ["pl+matlab"] },
  );
}
