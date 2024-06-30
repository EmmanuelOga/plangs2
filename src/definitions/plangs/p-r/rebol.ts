import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rebol").merge({
    name: "Rebol",
    websites: [{ kind: "wikipedia", title: "Rebol", href: "https://en.wikipedia.org/wiki/Rebol" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png" }],
    releases: [
      { version: "2.7.8", date: "2011-01-01", kind: "stable" },
      { version: "2.101.0", date: "2012-01-01", kind: "preview" },
    ],
  });
}
