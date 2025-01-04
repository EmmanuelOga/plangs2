import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+decision", {
    name: "Decision-making",
    description:
      "Tools designed to assist in making business and technical decisions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Decision-making_software",
    keywords: ["DSS", "decision support", "decision-making"],
  });
}
