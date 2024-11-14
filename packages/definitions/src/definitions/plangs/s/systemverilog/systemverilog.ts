import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+systemverilog", {
      name: "SystemVerilog",
      languishRanking: 95,
      websites: [{ title: "SystemVerilog - Wikipedia", href: "https://en.wikipedia.org/wiki/SystemVerilog", kind: "wikipedia" }],
      stackovTags: ["system-verilog"],
      githubName: "SystemVerilog",
      githubLangId: "363",
      githubColor: "#DAE1C2",
      githubPopular: false,
      githubType: "programming",
      description:
        "SystemVerilog is a hardware description and verification language, standardized as IEEE 1800, used for modeling, designing, simulating, testing, and implementing electronic systems. It is based on Verilog and integrates verification capabilities from languages like OpenVera.",
      keywords: ["IEEE 1800", "OpenVera", "Verilog", "hardware description", "hardware verification"],
      extensions: [".sv", ".svh"],
      year: 2002,
      isMainstream: true,
      releases: [
        { version: "1800-2023", name: "IEEE 1800-2023", date: "2023-12-16" },
        { version: "1800-2017", name: "IEEE 1800-2017", date: "2017" },
        { version: "1800-2012", name: "IEEE 1800-2012", date: "2012" },
        { version: "1800-2009", name: "IEEE 1800-2009", date: "2009" },
        { version: "1800-2005", name: "IEEE 1800-2005", date: "2005" },
      ],
    })
    .addParadigms(["paradigm+oop", "paradigm+structured"])
    .addTags(["tag+testing"])
    .addTypeSystems(["tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
