import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+multimedia", {
    name: "Multimedia",
    description: "Software for creating and manipulating multimedia content, including audio, video, and graphics.",
    extHomeURL: "https://en.wikipedia.org/wiki/Multimedia",
    keywords: ["audio-visual", "interactive media", "multimedia"],
  });
}
