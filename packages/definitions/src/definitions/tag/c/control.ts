import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+control", {
    name: "Control",
    description:
      "Instrument Control Software is used to control scientific and industrial instruments and processes.",
    extHomeURL: "https://en.wikipedia.org/wiki/Instrument_control",
    keywords: ["automation", "instrument control", "measurement"],
  });
}
