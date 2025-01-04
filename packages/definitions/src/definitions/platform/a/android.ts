import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+android", {
    name: "Android",
    description:
      "Mobile operating system developed by Google, widely used in smartphones and other devices.",
    extHomeURL: "https://en.wikipedia.org/wiki/Android_(operating_system)",
    keywords: ["android"],
  });
}
