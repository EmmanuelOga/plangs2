import type { PlangsGraph } from '../../entities/plangs_graph';

export function define(g: PlangsGraph) {
   const lb = g.paradigmBuilder;

  lb.declare(
    "para+educational",
    "educational",
    [
  {
    "kind": "wikipedia",
    "title": "educational",
    "href": "https://en.wikipedia.org/wiki/Educational_programming_language"
  },
  {
    "kind": "wikipedia",
    "title": "educational",
    "href": "https://en.wikipedia.org/wiki/List_of_educational_programming_languages"
  }
]);

  lb.declare(
    "para+embedded",
    "embedded",
    [{"kind":"wikipedia","title":"embedded","href":"https://en.wikipedia.org/wiki/Embedded_system"}]);

  lb.declare(
    "para+esoteric",
    "esoteric",
    [{"kind":"wikipedia","title":"Esoteric","href":"https://en.wikipedia.org/wiki/Esoteric_programming_language"}]);

  lb.declare(
    "para+event-driven",
    "event-driven",
    [{"kind":"wikipedia","title":"Event-driven","href":"https://en.wikipedia.org/wiki/Event-driven_programming"}]);

  lb.declare(
    "para+exp-oriented",
    "exp-oriented",
    [{"kind":"wikipedia","title":"exp-oriented","href":"https://en.wikipedia.org/wiki/Expression-oriented_programming_language"}]);

  lb.declare(
    "para+expert-systems",
    "expert systems",
    [{"kind":"wikipedia","title":"expert systems","href":"https://en.wikipedia.org/wiki/Expert_systems"}]);

  lb.declare(
    "para+extensible",
    "extensible",
    [{"kind":"wikipedia","title":"extensible","href":"https://en.wikipedia.org/wiki/Extensible_programming"}]);

}
