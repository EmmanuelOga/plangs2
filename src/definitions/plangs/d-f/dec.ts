import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+dec", {
    name: "DEC",
    websites: [
      { kind: "wikipedia", title: "SRC", href: "https://en.wikipedia.org/wiki/DEC_Systems_Research_Center" },
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
    ],
  });
}
