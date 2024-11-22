import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+csound", {
      name: "Csound",
      description:
        "Csound is a domain-specific computer programming language designed for sound and music computing. It was originally written in C and is known for its flexibility and high-quality audio synthesis capabilities. Csound is widely used in computer music and audio processing, offering extensive support for audio synthesis through its modular architecture.",
      keywords: ["audio programming", "csound", "music computing"],
      extensions: [".csd", ".orc", ".sco"],
      releases: [{ version: "6.18.1", name: "Csound 6.18.1", date: "2022-11-24" }],
      stackovTags: ["csound"],
      githubName: "Csound",
      languishRanking: 363,
      githubLangId: "73",
      githubColor: "#1a1a1a",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Csound",
      extRedditPath: "csound",
      extGithubPath: "csound/csound",
      extHomeURL: "http://csound.com/",
      created: "1986",
    })
    .relLicenses.add(["license+lgpl"])
    .relParadigms.add(["paradigm+compiled", "paradigm+dsl", "paradigm+extensible", "paradigm+real-time"])
    .relPlatforms.add(["plat+android", "plat+cross", "plat+web"])
    .relTags.add(["tag+audio-dev", "tag+dsp", "tag+industrial", "tag+interpreters", "tag+midi", "tag+testing"])
    .relTsys.add(["tsys+strong"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
