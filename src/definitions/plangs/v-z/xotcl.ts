import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+xotcl").merge({
    name: "XOTcl",
    websites: [
      { kind: "wikipedia", title: "XOTcl", href: "https://en.wikipedia.org/wiki/XOTcl" },
      { kind: "homepage", title: "media.wu-wien.ac.at", href: "http://media.wu-wien.ac.at/" },
    ],
    releases: [{ version: "1.6.8", date: "2014-01-01", kind: "stable" }],
  });
}