import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c99",
    "C99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influenced: ["pl+c-plus-plus", "pl+opencl"] },
  );

  /**/
}
