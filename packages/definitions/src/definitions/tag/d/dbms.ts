import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+dbms", {
    name: "DBMS",
    description: "Database management system.",
    extHomeURL: "https://en.wikipedia.org/wiki/Database_management_system",
    keywords: ["data storage", "database", "dbms", "gdbms", "rdbmds", "relational database"],
  });
}
