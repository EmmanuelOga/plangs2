import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+shell", {
    name: "Shell",
    description: "Command-line interface that interprets text commands to control the operating system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shell_(computing)",
    keywords: ["CLI", "command-line interface", "shell"],
  });
}
