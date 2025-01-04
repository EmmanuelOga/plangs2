import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+industrial", {
    name: "Industrial Control",
    description:
      "Systems and software used to control and monitor industrial processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Industrial_control_system",
    keywords: ["SCADA", "automation", "control", "industrial"],
  });
}
