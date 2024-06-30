import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+net.data").merge({
    name: "Net.Data",
    websites: [
      { kind: "wikipedia", title: "Net.Data", href: "https://en.wikipedia.org/wiki/Net.Data" },
      {
        kind: "homepage",
        title: "http://www-306.ibm.com/software/data/net.data/",
        href: "http://www-306.ibm.com/software/data/net.data/",
      },
    ],
  });
}
