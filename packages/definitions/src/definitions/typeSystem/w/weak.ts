import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+weak", {
    name: "Weak",
    description:
      "Allows for more flexible type conversions, where variables can be implicitly cast between types, sometimes leading to unexpected results.",
    extHomeURL: "https://en.wikipedia.org/wiki/Weak_typing",
    keywords: ["weak"],
  });
}
