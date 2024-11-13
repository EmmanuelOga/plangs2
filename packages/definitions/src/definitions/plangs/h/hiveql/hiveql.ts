import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+hiveql", {
    name: "HiveQL",
    languishRanking: 91,
    websites: [{ kind: "wikipedia", title: "HiveQL on Wikipedia", href: "https://en.wikipedia.org/wiki/Apache_Hive" }],
    stackovTags: ["hive", "hiveql"],
    githubName: "HiveQL",
    githubLangId: "931814087",
    githubColor: "#dce200",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
