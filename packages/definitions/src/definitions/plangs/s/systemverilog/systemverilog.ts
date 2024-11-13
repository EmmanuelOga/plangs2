import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+systemverilog", {
    name: "SystemVerilog",
    languishRanking: 95,
    websites: [
      { kind: "reddit", title: "SystemVerilog on Reddit", href: "https://reddit.com/r/systemverilog" },
      { kind: "wikipedia", title: "SystemVerilog on Wikipedia", href: "https://en.wikipedia.org/wiki/SystemVerilog" },
    ],
    stackovTags: ["system-verilog"],
    githubName: "SystemVerilog",
    githubLangId: "363",
    githubColor: "#DAE1C2",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
