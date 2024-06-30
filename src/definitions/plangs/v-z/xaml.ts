import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+xaml", {
    name: "XAML",
    websites: [{ kind: "wikipedia", title: "XAML", href: "https://en.wikipedia.org/wiki/XAML" }],
  });
}
