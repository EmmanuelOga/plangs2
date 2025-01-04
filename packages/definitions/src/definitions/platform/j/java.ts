import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+java", {
    name: "Java",
    description:
      "High-level, class-based, object-oriented programming language and computing platform.",
    extHomeURL: "https://en.wikipedia.org/wiki/Java_(software_platform)",
    keywords: ["java", "java development kit", "java-se", "jdk", "jre"],
  });
}
