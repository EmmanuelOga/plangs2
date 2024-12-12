import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+visual-basic", {
      name: "Visual Basic",
      description:
        "Visual Basic is a multi-paradigm, object-oriented programming language developed by Microsoft, implemented on the .NET Framework and Mono. It was launched as the successor to the original Visual Basic language for developing Windows applications with a graphical user interface.",
      keywords: ["vb", "vb.net", "visual-basic"],
      extensions: [".vb"],
      releases: [{ version: "16.9", date: "2024-03-02" }],
      stackovTags: ["vb.net"],
      githubName: "Visual Basic .NET",
      languishRanking: 260,
      githubLangId: "389",
      githubColor: "#945db7",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Visual_Basic_.NET",
      extRedditPath: "visualbasic",
      extHomeURL: "https://docs.microsoft.com/dotnet/visual-basic/",
      created: "2002",
      isTranspiler: false,
      shortDesc: "Visual Basic is a multi-paradigm language developed by Microsoft for Windows applications.",
      githubStars: 19100,
      extGithubPath: "dotnet/roslyn",
    })
    .relImplements.add("pl+basic")
    .relInfluencedBy.add("pl+basic", "pl+haskell", "pl+visual-basic")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+event-driven", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+structured")
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+dos", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+rad",
      "tag+shell",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong", "tsys+weak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
