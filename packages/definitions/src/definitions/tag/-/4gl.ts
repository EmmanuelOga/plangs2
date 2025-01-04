import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+4gl", {
    name: "4GL",
    description:
      "Fourth-generation programming languages designed to be more abstract and easier to use than third-generation languages.",
    extHomeURL: "https://en.wikipedia.org/wiki/4GL",
    keywords: ["4GL", "fourth-generation language", "high-level language"],
  });
}
