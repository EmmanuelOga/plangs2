import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+educational", "educational", [
    {
      kind: "wikipedia",
      title: "educational",
      href: "https://en.wikipedia.org/wiki/Educational_programming_language",
    },
    {
      kind: "wikipedia",
      title: "educational",
      href: "https://en.wikipedia.org/wiki/List_of_educational_programming_languages",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+embedded", "embedded", [
    { kind: "wikipedia", title: "embedded", href: "https://en.wikipedia.org/wiki/Embedded_system" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+esoteric", "Esoteric", [
    {
      kind: "wikipedia",
      title: "Esoteric",
      href: "https://en.wikipedia.org/wiki/Esoteric_programming_language",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+event-driven", "event-driven", [
    {
      kind: "wikipedia",
      title: "Event-driven",
      href: "https://en.wikipedia.org/wiki/Event-driven_programming",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+exp-oriented", "exp-oriented", [
    {
      kind: "wikipedia",
      title: "exp-oriented",
      href: "https://en.wikipedia.org/wiki/Expression-oriented_programming_language",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+expert-systems", "expert systems", [
    {
      kind: "wikipedia",
      title: "expert systems",
      href: "https://en.wikipedia.org/wiki/Expert_systems",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+extensible", "extensible", [
    {
      kind: "wikipedia",
      title: "extensible",
      href: "https://en.wikipedia.org/wiki/Extensible_programming",
    },
  ]);
}
