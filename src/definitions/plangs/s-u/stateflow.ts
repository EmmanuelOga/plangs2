import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+stateflow").merge({
    name: "Stateflow",
    websites: [
      { kind: "wikipedia", title: "Stateflow", href: "https://en.wikipedia.org/wiki/Stateflow" },
      {
        kind: "homepage",
        title: "Stateflow product page",
        href: "http://www.mathworks.com/products/stateflow?s_cid=wiki_stateflow_2",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Automatic_Transmission_Logic.png/220px-Automatic_Transmission_Logic.png",
      },
    ],
    releases: [{ version: "unknown", date: "2018-01-01", kind: "stable" }],
  });
}
