import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.subsystem
    .set("sys+pgsql", {
      name: "PostgreSQL",
      description:
        "A powerful relational database system with a strong reputation for reliability, feature robustness, and performance.",
      extHomeURL: "https://www.postgresql.org/",
      keywords: ["database", "pgsql", "postgres", "postgresql", "sql"],
    })
    .relWrittenWith.add("pl+c");
}
