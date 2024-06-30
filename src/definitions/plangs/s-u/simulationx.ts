import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+simulationx").merge({
    name: "SimulationX",
    websites: [
      { kind: "wikipedia", title: "SimulationX", href: "https://en.wikipedia.org/wiki/SimulationX" },
      { kind: "homepage", title: "SimulationX product page", href: "http://www.simulationx.com" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SimulationX_by_ESI_color_rgb.png/120px-SimulationX_by_ESI_color_rgb.png",
      },
    ],
    releases: [{ version: "4.3", date: "2022-01-01", kind: "stable" }],
  });
}
