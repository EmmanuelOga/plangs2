import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs.set("pl+xproc", {
    name: "XProc",
    description: "XProc is a W3C Recommendation to define an XML transformation language to define XML Pipelines.",
    extensions: [".xpl"],
    websites: [{ href: "https://en.wikipedia.org/wiki/XProc", title: "XProc", kind: "wikipedia" }],
  });
}
