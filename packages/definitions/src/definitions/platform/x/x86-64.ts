import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+x86-64", {
    name: "x86-64",
    description: "x86-64 is the 64-bit architecture for x86 processors, developed by AMD and used in modern processors from both Intel and AMD.",
    extHomeURL: "https://en.wikipedia.org/wiki/x86-64",
    keywords: ["amd64", "x64", "x86-64"],
  });
}
