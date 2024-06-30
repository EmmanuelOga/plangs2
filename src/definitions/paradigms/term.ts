import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+term", {
    name: "term-rewriting",
    websites: [
      { kind: "wikipedia", title: "term rewriting", href: "https://en.wikipedia.org/wiki/Term_rewriting" },
      { kind: "wikipedia", title: "term-rewriting", href: "https://en.wikipedia.org/wiki/Term-rewriting" },
    ],
  });
}
