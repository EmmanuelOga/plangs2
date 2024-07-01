import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+split-c")
    .merge({
      name: "Split-C",
      websites: [
        { kind: "wikipedia", title: "Split-C", href: "https://en.wikipedia.org/wiki/Split-C" },
        {
          kind: "homepage",
          title: "Split-C project website",
          href: "http://www.eecs.berkeley.edu/Research/Projects/CS/parallel/castle/split-c/",
        },
      ],
    })
    .addInfluences(["pl+c"])
    .addParadigms(["para+imperative", "para+structured", "para+parallel"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/
}
