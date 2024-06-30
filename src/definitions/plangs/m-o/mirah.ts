import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mirah").merge({
    name: "Mirah",
    websites: [
      { kind: "wikipedia", title: "Mirah", href: "https://en.wikipedia.org/wiki/Mirah_(programming_language)" },
      { kind: "homepage", title: "https://mirah.org/", href: "https://mirah.org/" },
    ],
    releases: [{ version: "0.2.1", date: "2016-01-01", kind: "stable" }],
  });
}