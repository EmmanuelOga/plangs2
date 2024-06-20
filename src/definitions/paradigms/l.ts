import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+language-oriented",
    "language oriented programming",
    [{"kind":"wikipedia","title":"language oriented programming","href":"https://en.wikipedia.org/wiki/Language_oriented_programming"}]);

  lb.declare(
    "para+lazy",
    "lazy",
    [{"kind":"wikipedia","title":"lazy","href":"https://en.wikipedia.org/wiki/Lazy_evaluation"}]);

  lb.declare(
    "para+literate",
    "literate",
    [{"kind":"wikipedia","title":"Literate","href":"https://en.wikipedia.org/wiki/Literate_programming"}]);

  lb.declare(
    "para+logic",
    "logic",
    [
  {
    "kind": "wikipedia",
    "title": "logic",
    "href": "https://en.wikipedia.org/wiki/Logic_programming"
  },
  {
    "kind": "wikipedia",
    "title": "Logic Programming",
    "href": "https://en.wikipedia.org/wiki/Logic_Programming"
  }
]);

  lb.declare(
    "para+low-code",
    "low-code",
    [{"kind":"wikipedia","title":"Low-code","href":"https://en.wikipedia.org/wiki/Low-code_development_platform"}]);

}
