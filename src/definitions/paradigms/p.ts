import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+parallel",
    "parallel",
    [
  {
    "kind": "wikipedia",
    "title": "parallel",
    "href": "https://en.wikipedia.org/wiki/Parallel_programming"
  },
  {
    "kind": "wikipedia",
    "title": "parallel",
    "href": "https://en.wikipedia.org/wiki/Parallel_computing"
  },
  {
    "kind": "wikipedia",
    "title": "Parallel programming",
    "href": "https://en.wikipedia.org/wiki/Parallel_programming_model"
  }
]);

  lb.declare(
    "para+partitioned-global-address-space",
    "partitioned global address space",
    [{"kind":"wikipedia","title":"Partitioned global address space","href":"https://en.wikipedia.org/wiki/Partitioned_global_address_space"}]);

  lb.declare(
    "para+pattern-matching",
    "pattern-matching",
    [{"kind":"wikipedia","title":"Pattern-matching","href":"https://en.wikipedia.org/wiki/Pattern-matching"}]);

  lb.declare(
    "para+people-oriented",
    "people oriented programming",
    [{"kind":"wikipedia","title":"People Oriented Programming","href":"https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1"}]);

  lb.declare(
    "para+pipeline",
    "pipeline",
    [
  {
    "kind": "wikipedia",
    "title": "pipeline",
    "href": "https://en.wikipedia.org/wiki/Pipeline_(software)"
  },
  {
    "kind": "wikipedia",
    "title": "pipeline",
    "href": "https://en.wikipedia.org/wiki/Pipeline_programming"
  }
]);

  lb.declare(
    "para+process-oriented",
    "processing",
    [
  {
    "kind": "wikipedia",
    "title": "process-oriented",
    "href": "https://en.wikipedia.org/wiki/Process-oriented_programming"
  },
  {
    "kind": "wikipedia",
    "title": "rule processing",
    "href": "https://en.wikipedia.org/wiki/Production_system_(computer_science)"
  },
  {
    "kind": "wikipedia",
    "title": "processing",
    "href": "https://en.wikipedia.org/wiki/In-memory_processing"
  }
]);

  lb.declare(
    "para+prototypes",
    "prototype-based",
    [
  {
    "kind": "wikipedia",
    "title": "prototype-based",
    "href": "https://en.wikipedia.org/wiki/Prototype-based_programming"
  },
  {
    "kind": "wikipedia",
    "title": "prototype-based",
    "href": "https://en.wikipedia.org/wiki/Prototype-oriented_programming"
  }
]);

}
