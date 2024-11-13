import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+powershell", {
    name: "PowerShell",
    languishRanking: 25,
    websites: [
      { kind: "reddit", title: "PowerShell on Reddit", href: "https://reddit.com/r/PowerShell" },
      { kind: "wikipedia", title: "PowerShell on Wikipedia", href: "https://en.wikipedia.org/wiki/PowerShell" },
    ],
    stackovTags: ["powershell"],
    githubName: "PowerShell",
    githubLangId: "293",
    githubColor: "#012456",
    githubPopular: true,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
