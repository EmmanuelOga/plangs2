import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+orca", {
      name: "Orca",
      description:
        "Orca is an esoteric programming language designed to create procedural sequencers, facilitating real-time algorithmic music composition and experimentation. It functions as a livecoding environment capable of interfacing with audio/visual applications via MIDI, OSC, and UDP.",
      keywords: ["esoteric", "livecoding", "midi", "music", "orca", "osc", "udp"],
      extensions: [".orca"],
      releases: [{ version: "0.9.0", name: "Initial Release", date: "2019-05-01" }],
      extGithubPath: "hundredrabbits/Orca",
      extHomeURL: "https://100r.co/site/orca.html",
      created: "2019",
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+esoteric", "paradigm+visual"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+interpreters", "tag+midi", "tag+modular", "tag+scripting"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
