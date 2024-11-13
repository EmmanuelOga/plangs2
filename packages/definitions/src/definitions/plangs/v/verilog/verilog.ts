import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+verilog", {
    name: "Verilog",
    languishRanking: 76,
    websites: [
      { kind: "reddit", title: "Verilog on Reddit", href: "https://reddit.com/r/Verilog" },
      { kind: "wikipedia", title: "Verilog on Wikipedia", href: "https://en.wikipedia.org/wiki/Verilog" },
    ],
    stackovTags: ["verilog"],
    githubName: "Verilog",
    githubLangId: "387",
    githubColor: "#b2b7f8",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
