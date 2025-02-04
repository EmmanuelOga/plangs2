import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+euphoria", {
      name: "Euphoria",
      description:
        "Powerful yet easy-to-learn programming language that emphasizes simplicity and readability, making it suitable for a wide range of applications across Windows, Linux, macOS, and BSD. It was first released in 1993 as shareware and has evolved over time into an open-source community-driven project. Its design focuses on rapid development and performance, incorporating features like an interpreter, C translator, and simple syntax using English keywords.",
      shortDesc:
        "User-friendly language focusing on simplicity and readability, popular for various applications on multiple OS platforms.",
      created: "1993",
      extensions: [".e", ".edb", ".ex", ".exw"],
      extGithubPath: "OpenEuphoria/euphoria",
      extHomeURL: "http://openeuphoria.org/",
      extWikipediaPath: "Euphoria_(programming_language)",
      githubColor: "#FF790B",
      githubLangId: "880693982",
      githubName: "Euphoria",
      githubPopular: false,
      githubStars: 96,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["euphoria", "open source", "programming language"],
      languishRanking: 410,
      releases: [
        { version: "4.1.0", name: "openEuphoria 4.1.0", date: "2021-03-01" },
      ],
    })
    .relInfluencedBy.add("pl+basic")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+general-purpose",
      "para+imperative",
      "para+procedural",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+bsd",
      "plat+cross",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+gui",
      "tag+interpreters",
      "tag+low-code",
      "tag+modeling",
      "tag+rad",
      "tag+ray-tracer",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+static");
}
