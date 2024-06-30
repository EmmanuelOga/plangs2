import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+multi").merge({
    name: "Multi-paradigm",
    websites: [
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm",
      },
      {
        kind: "wikipedia",
        title: "multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Multi-paradigm_programming_language",
      },
      { kind: "wikipedia", title: "Multi-paradigm", href: "https://en.wikipedia.org/wiki/Multi-paradigm" },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages",
      },
      { kind: "wikipedia", title: "Multi-paradigm", href: "https://en.wikipedia.org/wiki/Programming_paradigm" },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Support_for_multiple_paradigms",
      },
      {
        kind: "wikipedia",
        title: "Multiparadigm",
        href: "https://en.wikipedia.org/wiki/Multiparadigm_programming_language",
      },
      { kind: "wikipedia", title: "multiple dispatch", href: "https://en.wikipedia.org/wiki/Multiple_dispatch" },
      { kind: "wikipedia", title: "multistaged", href: "https://en.wikipedia.org/wiki/Multistaged_programming" },
      {
        kind: "wikipedia",
        title: "Multi-paradigm",
        href: "https://en.wikipedia.org/wiki/Programming_paradigm#Multi-paradigm_programming_language",
      },
    ],
  });
}
