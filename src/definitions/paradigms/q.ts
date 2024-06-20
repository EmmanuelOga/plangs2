import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+query-language",
    "query language",
    [{"kind":"wikipedia","title":"Query language","href":"https://en.wikipedia.org/wiki/Query_language"}]);

}
