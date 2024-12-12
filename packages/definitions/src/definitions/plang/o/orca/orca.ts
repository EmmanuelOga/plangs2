import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+orca", {
      name: "Orca",
      description:
        "Orca is an esoteric programming language designed to create procedural sequencers, facilitating real-time algorithmic music composition and experimentation. It functions as a livecoding environment capable of interfacing with audio/visual applications via MIDI, OSC, and UDP.",
      keywords: ["esoteric", "livecoding", "midi", "orca", "osc", "udp"],
      extensions: [".orca"],
      releases: [{ version: "0.9.0", name: "Initial Release", date: "2019-05-01" }],
      extGithubPath: "hundredrabbits/Orca",
      extHomeURL: "https://100r.co/site/orca.html",
      created: "2019",
      isTranspiler: false,
      shortDesc: "Orca is an esoteric language for creating procedural sequencers for music and visual applications.",
      githubStars: 4600,
      ghRepoCreated: "2018-11-08",
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+esoteric", "para+visual")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+audio-dev", "tag+interpreters", "tag+midi", "tag+modular", "tag+scripting")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
