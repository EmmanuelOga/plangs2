import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+harlequin", {
      name: "Harlequin",
      description:
        "Easy, fast, and beautiful database client for the terminal.",
      extHomeURL: "https://harlequin.sh/",
      keywords: ["client", "database", "terminal"],
    })
    .relWrittenWith.add("pl+python");
}
