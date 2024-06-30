import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+imperative", {
    name: "Imperative",
    websites: [
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_programming" },
      { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming_language" },
      { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_language" },
    ],
  });
}
