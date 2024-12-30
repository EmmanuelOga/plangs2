import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+rad", {
    name: "RAD",
    description: "Rapid Application Development, a methodology focused on rapid prototyping and iterative development.",
    extHomeURL: "https://en.wikipedia.org/wiki/Rapid_Application_Development",
    keywords: ["RAD", "rapid development", "software development methodology"],
  });
}
