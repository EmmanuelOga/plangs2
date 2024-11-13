import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+hcl", {
    name: "HCL",
    languishRanking: 53,
    websites: [
      { kind: "reddit", title: "HCL on Reddit", href: "https://reddit.com/r/Terraform" },
      { kind: "wikipedia", title: "HCL on Wikipedia", href: "https://en.wikipedia.org/wiki/Terraform_(software)" },
    ],
    stackovTags: ["Terraform"],
    githubName: "HCL",
    githubLangId: "144",
    githubColor: "#844FBA",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
