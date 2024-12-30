import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+workflow", {
    name: "Workflow",
    description: "Tools that automate business workflows to improve efficiency and reduce manual tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Workflow_automation",
    keywords: ["business automation", "process automation", "workflow automation"],
  });
}
