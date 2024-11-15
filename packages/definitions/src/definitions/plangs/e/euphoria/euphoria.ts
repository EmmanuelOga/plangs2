import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+euphoria", {
      name: "Euphoria",
      description:
        "Euphoria is a powerful yet easy-to-learn programming language that emphasizes simplicity and readability, making it suitable for a wide range of applications across Windows, Linux, macOS, and BSD. It was first released in 1993 as shareware and has evolved over time into an open-source community-driven project. Its design focuses on rapid development and performance, incorporating features like an interpreter, C translator, and simple syntax using English keywords.",
      keywords: ["euphoria", "open source", "programming language"],
      extensions: [".e", ".edb", ".ex", ".exw"],
      year: 1993,
      isMainstream: false,
      releases: [{ version: "4.1.0", name: "openEuphoria 4.1.0", date: "2021-03-01" }],
      githubName: "Euphoria",
      languishRanking: 387,
      githubLangId: "880693982",
      githubColor: "#FF790B",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Euphoria_(programming_language)",
      extHomeURL: "http://openeuphoria.org/",
    })
    .addInfluencedBy(["pl+basic"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+rad",
      "tag+ray-tracer",
      "tag+ui",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
