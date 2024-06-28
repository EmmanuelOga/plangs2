import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+glsl",
    "GLSL",
    { name: "GLSL", websites: [{ kind: "wikipedia", title: "GLSL", href: "https://en.wikipedia.org/wiki/GLSL" }] },
    { influences: ["pl+cg"] },
  );
}
