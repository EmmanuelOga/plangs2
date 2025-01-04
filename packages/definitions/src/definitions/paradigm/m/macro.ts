import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+macro", {
    name: "Macros",
    description:
      'Short for "macro instruction", a rule or pattern that specifies how a certain input should be mapped to a replacement output.',
    extHomeURL: "https://en.wikipedia.org/wiki/Macro_(computer_science)",
    keywords: ["macro", "macros"],
  });
}
