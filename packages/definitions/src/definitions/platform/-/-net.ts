import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+.net", {
    name: ".NET",
    description: "Free and open-source software framework developed by Microsoft for building cross-platform applications.",
    extHomeURL: "https://en.wikipedia.org/wiki/.NET",
    keywords: [".net", "C#", "CLI", "CLR", "Common Language Runtime", "dotnet"],
  });
}
