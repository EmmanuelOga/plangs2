import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+midi", {
    name: "MIDI",
    description: "Musical Instrument Digital Interface (MIDI) protocol and software for controlling music hardware and software.",
    extHomeURL: "https://en.wikipedia.org/wiki/MIDI",
    keywords: ["MIDI", "digital audio", "music technology"],
  });
}
