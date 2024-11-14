import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+verilog", {
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
      description:
        "Verilog is a hardware description language (HDL) used to model electronic systems. It is widely used in the design and verification of digital circuits at the register-transfer level as well as for analog and mixed-signal circuits. Verilog supports both simulation of circuit behavior and synthesis of circuits into real-world implementations.",
      keywords: ["HDL", "digital circuits", "hardware description language", "simulation", "synthesis"],
      extensions: [".v", ".vh"],
      year: 1984,
      isMainstream: true,
      releases: [{ version: "IEEE 1800-2023", name: "Verilog-2023", date: "2023-12-06" }],
    })
    .addParadigms(["paradigm+compiled", "paradigm+dataflow", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
