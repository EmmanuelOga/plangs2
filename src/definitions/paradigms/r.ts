import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

// ???

  lb.declare(
    "para+reactive",
    "reactive",
    [{"kind":"wikipedia","title":"reactive","href":"https://en.wikipedia.org/wiki/Reactive_programming"}]);

  lb.declare(
    "para+real-time",
    "real-time",
    [{"kind":"wikipedia","title":"real-time","href":"https://en.wikipedia.org/wiki/Real-time_computing"}]);

  lb.declare(
    "para+reflective",
    "Reflective",
    [
  {
    "kind": "wikipedia",
    "title": "reflective",
    "href": "https://en.wikipedia.org/wiki/Reflective_programming"
  },
  {
    "kind": "wikipedia",
    "title": "reflective",
    "href": "https://en.wikipedia.org/wiki/Reflection_(computer_programming)"
  },
  {
    "kind": "wikipedia",
    "title": "Reflective",
    "href": "https://en.wikipedia.org/wiki/Reflection_(computer_science)"
  }
]);

  lb.declare(
    "para+reversible",
    "reversible",
    [{"kind":"wikipedia","title":"reversible","href":"https://en.wikipedia.org/wiki/Reversible_computing"}]);

}
