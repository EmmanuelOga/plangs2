import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

// ???

  lb.declare(
    "para+unstructured",
    "unstructured",
    [{"kind":"wikipedia","title":"unstructured","href":"https://en.wikipedia.org/wiki/Unstructured_programming"}]);

}
