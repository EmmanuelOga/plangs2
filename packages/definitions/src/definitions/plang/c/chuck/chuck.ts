import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+chuck", {
      name: "ChucK",
      description:
        "ChucK is a concurrent, strongly timed audio programming language for real-time synthesis, composition, and performance. It is used for creating complex audio synthesis programs and interactive controls, supporting real-time coding and deterministic concurrency.",
      shortDesc: "ChucK is a concurrent, real-time audio programming language for synthesis and performance.",
      created: "2002",
      extensions: [".ck"],
      extGithubPath: "ccrma/chuck",
      extHomeURL: "https://chuck.cs.princeton.edu/",
      extWikipediaPath: "ChucK",
      githubColor: "#3f8000",
      githubLangId: "57",
      githubName: "ChucK",
      githubPopular: false,
      githubStars: 827,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["audio programming", "chuck", "concurrent programming", "real-time synthesis"],
      releases: [
        { version: "1.5.4.1", name: "Chai", date: "2024-04-01" },
        { version: "1.5.2.4", name: "ChucK 1.5.2.4", date: "2024-01-01" },
      ],
      stackovTags: ["chuck"],
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
