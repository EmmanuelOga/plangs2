import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+janet", {
      name: "Janet",
      description:
        "Janet is a versatile and lightweight programming language, designed to be embedded or used as a standalone script with a focus on functional and imperative programming paradigms. Ideal for scripting and embedding in C/C++ programs, Janet provides a rich ecosystem for networked applications and real-time data processing with minimal overhead.",
      keywords: ["dynamic", "embedded", "functional", "janet", "scripting"],
      extensions: [".janet"],
      releases: [{ version: "1.37.1", date: "2024-12-05" }],
      githubName: "Janet",
      githubLangId: "1028705371",
      githubColor: "#0886a5",
      githubPopular: false,
      githubType: "programming",
      extGithubPath: "janet-lang/janet",
      extRedditPath: "janetlang",
      extHomeURL: "https://janet-lang.org/",
      created: "2017",
      isTranspiler: false,
      shortDesc:
        "Janet is a versatile, lightweight programming language, ideal for embedded scripting in C/C++ with functional and imperative paradigms.",
      githubStars: 3600,
      ghRepoCreated: "2012-12-12",
    })
    .relInfluencedBy.add("pl+scheme")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+extensible", "para+functional", "para+imperative", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+cli", "tag+embedded", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
