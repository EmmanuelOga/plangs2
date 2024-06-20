import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

// ???

  lb.declare(
    "para+general-purpose",
    "general-purpose",
    [{"kind":"wikipedia","title":"general-purpose","href":"https://en.wikipedia.org/wiki/General-purpose_programming_language"}]);

  lb.declare(
    "para+generic",
    "generic programming",
    [{"kind":"wikipedia","title":"generic","href":"https://en.wikipedia.org/wiki/Generic_programming"}]);

  lb.declare(
    "para+grid",
    "grid",
    [{"kind":"wikipedia","title":"grid","href":"https://en.wikipedia.org/wiki/Grid_computing"}]);

}
