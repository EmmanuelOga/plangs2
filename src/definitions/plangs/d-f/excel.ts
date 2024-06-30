import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+excel").merge({
    name: "Excel macros",
    websites: [
      { kind: "wikipedia", title: "Excel functions", href: "https://en.wikipedia.org/wiki/Excel_function" },
      { kind: "wikipedia", title: "Excel macros", href: "https://en.wikipedia.org/wiki/Excel_macro" },
    ],
  });

  /**/
}
