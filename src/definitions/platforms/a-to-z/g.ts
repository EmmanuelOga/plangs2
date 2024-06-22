import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+glib", "GLib", {
    websites: [{ kind: "wikipedia", title: "GLib", href: "https://en.wikipedia.org/wiki/GLib" }],
  });

  /**/

  lb.define("platf+gnu", "GNU", {
    websites: [{ kind: "wikipedia", title: "GNU", href: "https://en.wikipedia.org/wiki/GNU" }],
  });

  /**/
}
