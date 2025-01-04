import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+edu", {
    name: "Educational",
    description:
      "Educational software designed to facilitate learning and instruction.",
    extHomeURL: "https://en.wikipedia.org/wiki/Educational_software",
    keywords: ["e-learning", "education technology", "educational software"],
  });
}
