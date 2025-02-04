import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+csound", {
      name: "Csound",
      description:
        "Domain-specific computer programming language designed for sound and music computing. It was originally written in C and is known for its flexibility and high-quality audio synthesis capabilities. Csound is widely used in computer music and audio processing, offering extensive support for audio synthesis through its modular architecture.",
      shortDesc:
        "Flexible, high-quality, domain-specific programming language for sound and music computing.",
      created: "1986",
      extensions: [".csd", ".orc", ".sco"],
      extGithubPath: "csound/csound",
      extHomeURL: "https://csound.com",
      extRedditPath: "csound",
      extWikipediaPath: "Csound",
      githubColor: "#1a1a1a",
      githubLangId: "73",
      githubName: "Csound",
      githubPopular: false,
      githubStars: 1200,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["audio programming", "csound", "music computing"],
      releases: [
        { version: "6.18.1", name: "Csound 6.18.1", date: "2022-11-24" },
      ],
      stackovTags: ["csound"],
    })
    .relLicenses.add("lic+lgpl")
    .relParadigms.add(
      "para+compiled",
      "para+dsl",
      "para+extensible",
      "para+real-time",
    )
    .relPlatforms.add("plat+android", "plat+cross", "plat+web")
    .relTags.add(
      "tag+audio-dev",
      "tag+dsp",
      "tag+industrial",
      "tag+interpreters",
      "tag+midi",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+c");
}
