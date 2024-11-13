import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+vim-script", {
    name: "Vim script",
    languishRanking: 63,
    websites: [
      { kind: "reddit", title: "Vim Script on Reddit", href: "https://reddit.com/r/vim" },
      { kind: "wikipedia", title: "Vim Script on Wikipedia", href: "https://en.wikipedia.org/wiki/Vim_(text_editor)" },
    ],
    stackovTags: ["vim"],
    githubName: "Vim Script",
    githubLangId: "388",
    githubColor: "#199f4b",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
