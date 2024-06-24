import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+korn-shell",
    "Korn Shell",
    {
      name: "Korn Shell",
      websites: [{ kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" }],
    },
    { influences: ["pl+awk"] },
  );

  /**/
}
