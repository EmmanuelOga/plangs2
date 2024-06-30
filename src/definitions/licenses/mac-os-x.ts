import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+mac-os-x", "Mac", {
    websites: [{ kind: "wikipedia", title: "Mac", href: "https://en.wikipedia.org/wiki/Mac_OS_X" }],
  });
}
