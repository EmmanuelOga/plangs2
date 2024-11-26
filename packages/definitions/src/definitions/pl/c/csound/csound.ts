import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relLicense.add(["lic+lgpl"])
    .relParadigm.add(["para+compiled", "para+dsl", "para+extensible", "para+real-time"])
    .relPlatform.add(["plat+android", "plat+cross", "plat+web"])
    .relTag.add(["tag+audio-dev", "tag+dsp", "tag+industrial", "tag+interpreters", "tag+midi", "tag+testing"])
    .relTypeSystem.add(["tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
