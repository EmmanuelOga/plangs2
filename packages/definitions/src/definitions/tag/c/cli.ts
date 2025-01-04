import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+cli", {
    name: "CLI",
    description:
      "Command Line Interface: Text-based input given to a computer to perform specific tasks.",
    extHomeURL: "https://en.wikipedia.org/wiki/Command_(computing)",
    keywords: ["CLI", "command-line interface"],
  });
}
