import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+janet", {
      name: "Janet",
      description:
        "Janet is a dynamic and functional programming language, ideal for system scripting and embedding in C/C++ programs. With built-in libraries for networking, threading, and more, Janet offers a powerful set of features with a minimalist setup, making it portable and easy to embed.",
      keywords: ["dynamic", "embedded", "functional", "janet"],
      extensions: [".janet"],
      releases: [{ version: "1.17.0", name: "Janet 1.17.0", date: "2023-06-15" }],
      githubName: "Janet",
      githubLangId: "1028705371",
      githubColor: "#0886a5",
      githubPopular: false,
      githubType: "programming",
      extGithubPath: "janet-lang/janet",
      extRedditPath: "janetlang",
      extHomeURL: "https://janet-lang.org/",
      created: "2017",
    })
    .relInfluencedBy.add(["pl+scheme"])
    .relLicense.add(["license+mit"])
    .relParadigm.add(["para+extensible", "para+functional", "para+imperative", "para+scripting"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+cli", "tag+embedded", "tag+scripting"])
    .relTsys.add(["tsys+dynamic"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
