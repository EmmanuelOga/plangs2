import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+audio-dev", {
    name: "Audio",
    description:
      "Languages and environments designed for programming and synthesizing sound.",
    extHomeURL: "https://en.wikipedia.org/wiki/Audio_programming_language",
    keywords: ["audio", "audio processing", "sound", "synthesis"],
  });
}
