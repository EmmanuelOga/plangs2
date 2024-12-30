import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.learning
    .set("learn+nystrom-interpreters", {
      name: "Crafting Interpreters",
      description: "Ever wanted to make your own programming language or wondered how they are designed and built?  If so, this book is for you.",
      extHomeURL: "https://craftinginterpreters.com/",
      kinds: ["book"],
    })
    .relPlangs.add("pl+c", "pl+java")
    .relTags.add("tag+interpreters", "tag+languages");
}
