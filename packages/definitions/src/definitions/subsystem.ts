import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.subsystem
    .set("sys+pgsql", {
      name: "PostgreSQL",
      keywords: ["database", "sql", "pgsql", "postgres", "postgresql"],
      description:
        "PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
      extHomeURL: "https://www.postgresql.org/",
    })
    .relWrittenWith.add("pl+c");
}
