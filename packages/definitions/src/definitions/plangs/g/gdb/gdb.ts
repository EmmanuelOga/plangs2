import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+gdb", {
    name: "GDB",
    languishRanking: 90,
    websites: [{ kind: "wikipedia", title: "GDB on Wikipedia", href: "https://en.wikipedia.org/wiki/GNU_Debugger" }],
    stackovTags: ["gdb"],
    githubName: "GDB",
    githubLangId: "122",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
