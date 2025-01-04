import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+dsp", {
    name: "DSP",
    description:
      "Digital Signal Processing software for analyzing and manipulating signals, often used in audio and telecommunications.",
    extHomeURL: "https://en.wikipedia.org/wiki/Signal_processing",
    keywords: ["DSP", "data analysis", "signal processing"],
  });
}
