import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+jupyter-notebook", {
    name: "Jupyter Notebook",
    languishRanking: 16,
    websites: [
      { kind: "reddit", title: "Jupyter Notebook on Reddit", href: "https://reddit.com/r/IPython" },
      { kind: "wikipedia", title: "Jupyter Notebook on Wikipedia", href: "https://en.wikipedia.org/wiki/Project_Jupyter" },
    ],
    stackovTags: ["jupyter"],
    githubName: "Jupyter Notebook",
    githubLangId: "185",
    githubColor: "#DA5B0B",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
