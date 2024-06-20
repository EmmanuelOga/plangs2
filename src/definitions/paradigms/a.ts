import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+agent-based",
    "agent-based",
    [
  {
    "kind": "wikipedia",
    "title": "agent-oriented",
    "href": "https://en.wikipedia.org/wiki/Agent-oriented_programming"
  },
  {
    "kind": "wikipedia",
    "title": "agent-based",
    "href": "https://en.wikipedia.org/wiki/Computer_simulation#Types"
  },
  {
    "kind": "wikipedia",
    "title": "agent-based",
    "href": "https://en.wikipedia.org/wiki/Agent-based_model"
  }
]);

  lb.declare(
    "para+algebraic-types",
    "algebraic types",
    [{"kind":"wikipedia","title":"algebraic types","href":"https://en.wikipedia.org/wiki/Algebraic_types"}]);

  lb.declare(
    "para+algorithmic",
    "algorithmic",
    [{"kind":"wikipedia","title":"algorithmic","href":"https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1"}]);

  lb.declare(
    "para+array",
    "array",
    [{"kind":"wikipedia","title":"array","href":"https://en.wikipedia.org/wiki/Array_programming"}]);

  lb.declare(
    "para+aspect-oriented",
    "aspect-oriented",
    [{"kind":"wikipedia","title":"aspect-oriented","href":"https://en.wikipedia.org/wiki/Aspect-oriented_programming"}]);

  lb.declare(
    "para+assembly",
    "assembly",
    [{"kind":"wikipedia","title":"Assembly","href":"https://en.wikipedia.org/wiki/Assembly_language"}]);

}
