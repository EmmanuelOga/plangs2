import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+windows", {
    name: "Windows",
    description:
      "Series of operating systems developed by Microsoft, with versions for both personal computers and servers.",
    extHomeURL: "https://en.wikipedia.org/wiki/Microsoft_Windows",
    keywords: ["win32", "win64", "windows", "windows 10", "windows 11"],
  });
}
