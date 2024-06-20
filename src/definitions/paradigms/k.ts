import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+knowledge-representation",
    "knowledge representation",
    [{"kind":"wikipedia","title":"knowledge representation","href":"https://en.wikipedia.org/wiki/Knowledge_representation"}]);

}
