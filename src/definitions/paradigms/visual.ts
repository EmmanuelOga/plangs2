import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+visual", "block structured", {
    websites: [
      { kind: "wikipedia", title: "Visual", href: "https://en.wikipedia.org/wiki/Visual_programming_language" },
      { kind: "wikipedia", title: "block structured", href: "https://en.wikipedia.org/wiki/Block_(programming)" },
    ],
  });
}
