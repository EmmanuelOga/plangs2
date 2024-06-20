import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+natural-language",
    "natural-language",
    [
  {
    "kind": "wikipedia",
    "title": "Natural language programming",
    "href": "https://en.wikipedia.org/wiki/Natural_language_programming"
  },
  {
    "kind": "wikipedia",
    "title": "natural-language",
    "href": "https://en.wikipedia.org/wiki/Natural-language_programming"
  }
]);

  lb.declare(
    "para+non-structured",
    "non-structured",
    [{"kind":"wikipedia","title":"non-structured","href":"https://en.wikipedia.org/wiki/Non-structured_programming"}]);

  lb.declare(
    "para+nondeterministic",
    "nondeterministic",
    [{"kind":"wikipedia","title":"nondeterministic","href":"https://en.wikipedia.org/wiki/Nondeterministic_programming"}]);

  lb.declare(
    "para+numerical-control",
    "numerical control",
    [{"kind":"wikipedia","title":"Numerical control","href":"https://en.wikipedia.org/wiki/Numerical_control"}]);

}
