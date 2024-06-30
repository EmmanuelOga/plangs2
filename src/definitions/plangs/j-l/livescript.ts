import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+livescript").merge({
    name: "LiveScript",
    websites: [
      {
        kind: "wikipedia",
        title: "LiveScript",
        href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
      },
    ],
    releases: [{ version: "1.6.1", date: "2020-01-01", kind: "stable" }],
    extensions: [".ls"],
  });
}
