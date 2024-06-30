import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+gofer", {
    name: "Gofer",
    websites: [
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(software)" },
      { kind: "wikipedia", title: "Gofer", href: "https://en.wikipedia.org/wiki/Gofer_(programming_language)" },
    ],
  });
}
