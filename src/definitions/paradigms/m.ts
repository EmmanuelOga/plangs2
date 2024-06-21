import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+macros", "macros", [
    {
      kind: "wikipedia",
      title: "general-purpose macro processor",
      href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
    },
    {
      kind: "wikipedia",
      title: "macro",
      href: "https://en.wikipedia.org/wiki/Macro_(computer_science)",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+markup", "markup", [
    { kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+message-passing", "message passing", [
    {
      kind: "wikipedia",
      title: "message passing",
      href: "https://en.wikipedia.org/wiki/Message_passing",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+meta", "meta", [
    { kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+modular", "modular", [
    {
      kind: "wikipedia",
      title: "modular",
      href: "https://en.wikipedia.org/wiki/Modular_programming",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+multi-paradigm", "multi-paradigm", [
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
    },
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm_programming_language",
    },
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm",
    },
    {
      kind: "wikipedia",
      title: "multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Multi-paradigm",
    },
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Programming_paradigm",
    },
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages",
    },
    {
      kind: "wikipedia",
      title: "Multiparadigm",
      href: "https://en.wikipedia.org/wiki/Multiparadigm_programming_language",
    },
    {
      kind: "wikipedia",
      title: "multiple dispatch",
      href: "https://en.wikipedia.org/wiki/Multiple_dispatch",
    },
    {
      kind: "wikipedia",
      title: "multistaged",
      href: "https://en.wikipedia.org/wiki/Multistaged_programming",
    },
    {
      kind: "wikipedia",
      title: "Multi-paradigm",
      href: "https://en.wikipedia.org/wiki/Programming_paradigm#Support_for_multiple_paradigms",
    },
  ]);
}
