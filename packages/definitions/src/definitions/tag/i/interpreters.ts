import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+interpreters", {
    name: "Interpreter",
    description:
      "Software that directly executes instructions written in a programming language without requiring them to be compiled into machine code.",
    extHomeURL: "https://en.wikipedia.org/wiki/Interpreter_(computing)",
    keywords: ["interpreter", "programming language", "runtime execution"],
  });
}
