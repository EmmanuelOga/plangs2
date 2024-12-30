import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+strong", {
    name: "Strong",
    description: "Enforces strict type rules, ensuring that variables cannot be implicitly cast or used in an unintended way.",
    extHomeURL: "https://en.wikipedia.org/wiki/Strong_typing",
    keywords: ["strong", "strongly-typed"],
  });
}
