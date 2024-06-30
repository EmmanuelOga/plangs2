import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+excel", {
    name: "Excel macros",
    websites: [
      { kind: "wikipedia", title: "Excel functions", href: "https://en.wikipedia.org/wiki/Excel_function" },
      { kind: "wikipedia", title: "Excel macros", href: "https://en.wikipedia.org/wiki/Excel_macro" },
    ],
  });
}
