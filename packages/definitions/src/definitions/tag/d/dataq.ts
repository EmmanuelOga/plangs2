import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+dataq", {
    name: "Acquisition",
    description:
      "Data Acquisition tools and systems, designed to gather and analyze data from various sources.",
    extHomeURL: "https://en.wikipedia.org/wiki/Data_acquisition",
    keywords: ["DAQ", "acquisition", "data collection"],
  });
}
