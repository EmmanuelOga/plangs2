import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+autohotkey", {
    name: "AutoHotkey",
    languishRanking: 84,
    websites: [
      { kind: "reddit", title: "AutoHotkey on Reddit", href: "https://reddit.com/r/AutoHotkey" },
      { kind: "wikipedia", title: "AutoHotkey on Wikipedia", href: "https://en.wikipedia.org/wiki/AutoHotkey" },
    ],
    stackovTags: ["autohotkey"],
    githubName: "AutoHotkey",
    githubLangId: "26",
    githubColor: "#6594b9",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
