import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+standalone-program", "standalone programs", {
    websites: [
      { kind: "wikipedia", title: "standalone programs", href: "https://en.wikipedia.org/wiki/Standalone_program" },
    ],
  });

  /**/
}
