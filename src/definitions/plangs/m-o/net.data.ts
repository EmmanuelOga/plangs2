import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+net.data",
    {
      name: "Net.Data",
      websites: [
        { kind: "wikipedia", title: "Net.Data", href: "https://en.wikipedia.org/wiki/Net.Data" },
        {
          kind: "homepage",
          title: "http://www-306.ibm.com/software/data/net.data/",
          href: "http://www-306.ibm.com/software/data/net.data/",
        },
      ],
    },
    { platforms: ["platf+unix", "platf+win", "platf+z-slashos"] },
  );
}
