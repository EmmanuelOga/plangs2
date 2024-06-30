import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gforth").merge({
    name: "Gforth",
    websites: [{ kind: "wikipedia", title: "Gforth", href: "https://en.wikipedia.org/wiki/Gforth" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" }],
    releases: [
      { version: "0.7.3", date: "2014-01-01", kind: "stable" },
      { version: "0.7.9", date: "2020-01-01", kind: "preview" },
    ],
  });
}
