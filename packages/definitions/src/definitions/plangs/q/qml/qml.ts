import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+qml", {
    name: "QML",
    languishRanking: 62,
    websites: [
      { kind: "reddit", title: "QML on Reddit", href: "https://reddit.com/r/QtFramework" },
      { kind: "wikipedia", title: "QML on Wikipedia", href: "https://en.wikipedia.org/wiki/QML" },
    ],
    stackovTags: ["qml"],
    githubName: "QML",
    githubLangId: "305",
    githubColor: "#44a51c",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
