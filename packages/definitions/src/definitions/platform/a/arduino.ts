import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+arduino", {
    name: "Arduino",
    description:
      "Electronics platform based on easy-to-use hardware and software, popular for building embedded systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Arduino",
    keywords: ["arduino", "microcontroller"],
  });
}
