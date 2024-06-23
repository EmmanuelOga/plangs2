import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+turbo-pascal",
    "Turbo Pascal",
    {
      name: "Turbo Pascal",
      websites: [{ kind: "wikipedia", title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal" }],
    },
    { dialects: ["pl+object-pascal", "pl+pascal"] },
  );

  /**/
}
