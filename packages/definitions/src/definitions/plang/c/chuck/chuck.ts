import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+chuck", {
      name: "ChucK",
      description:
        "ChucK is a concurrent, strongly timed audio programming language for real-time synthesis, composition, and performance. It is used for creating complex audio synthesis programs and interactive controls, supporting real-time coding and deterministic concurrency.",
      keywords: ["audio programming", "chuck", "concurrent programming", "real-time synthesis"],
      extensions: [".ck"],
      releases: [
        { version: "1.5.4.1", name: "Chai", date: "2024-04-01" },
        { version: "1.5.2.4", name: "ChucK 1.5.2.4", date: "2024-01-01" },
      ],
      stackovTags: ["chuck"],
      githubName: "ChucK",
      githubLangId: "57",
      githubColor: "#3f8000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "ChucK",
      extHomeURL: "https://chuck.cs.princeton.edu/",
      created: "2002",
      isTranspiler: false,
      shortDesc: "ChucK is a concurrent, real-time audio programming language for synthesis and performance.",
      githubStars: 827,
      extGithubPath: "ccrma/chuck",
      ghRepoCreated: "2016-11-28",
    })
    .relInfluencedBy.add("pl+supercollider")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+concurrent", "para+interpreted", "para+multi", "para+real-time", "para+synchronous")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+audio-dev", "tag+interpreters")
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
