import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+raspberry", {
    name: "Raspberry Pi",
    description: "Low-cost, single-board computer designed to promote teaching of computer science in schools and developing countries.",
    extHomeURL: "https://en.wikipedia.org/wiki/Raspberry_Pi",
    keywords: ["pi", "raspberry pi", "single-board computer"],
  });
}
