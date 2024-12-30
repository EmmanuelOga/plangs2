import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+low-code", {
    name: "Low Code",
    description: "Development platforms that enable users to create applications with minimal hand-coding.",
    extHomeURL: "https://en.wikipedia.org/wiki/Low-code_development_platform",
    keywords: ["development platform", "low code", "rapid development"],
  });
}
