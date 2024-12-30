import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+wavelet", {
    name: "Wavelet",
    description: "Mathematical technique used for analyzing waveforms and signals, often in signal processing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Wavelet",
    keywords: ["mathematics", "signal processing", "wavelet analysis"],
  });
}
