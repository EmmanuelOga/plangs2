import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+stm32", "STM32", {
    websites: [{ kind: "wikipedia", title: "STM32", href: "https://en.wikipedia.org/wiki/STM32" }],
  });
}
