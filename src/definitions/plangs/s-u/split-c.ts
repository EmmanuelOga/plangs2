import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+split-c",
    {
      name: "Split-C",
      websites: [
        { kind: "wikipedia", title: "Split-C", href: "https://en.wikipedia.org/wiki/Split-C" },
        {
          kind: "homepage",
          title: "Split-C project website",
          href: "http://www.eecs.berkeley.edu/Research/Projects/CS/parallel/castle/split-c/",
        },
      ],
    },
    {
      influences: ["pl+c"],
      paradigms: ["para+imperative", "para+parallel", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+weak"],
    },
  );
}
