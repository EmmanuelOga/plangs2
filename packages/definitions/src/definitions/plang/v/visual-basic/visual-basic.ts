import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+visual-basic", {
      name: "Visual Basic",
      description:
        "Multi-paradigm, object-oriented programming language developed by Microsoft, implemented on the .NET Framework and Mono. It was launched as the successor to the original Visual Basic language for developing Windows applications with a graphical user interface.",
      shortDesc: "Multi-paradigm language developed by Microsoft for Windows applications.",
      created: "2002",
      extensions: [".vb"],
      extGithubPath: "dotnet/roslyn",
      extHomeURL: "https://docs.microsoft.com/dotnet/visual-basic/",
      extRedditPath: "visualbasic",
      extWikipediaPath: "Visual_Basic_.NET",
      githubColor: "#945db7",
      githubLangId: "389",
      githubName: "Visual Basic .NET",
      githubPopular: false,
      githubStars: 19100,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["vb", "vb.net", "visual-basic"],
      languishRanking: 260,
      releases: [{ version: "16.9", date: "2024-03-02" }],
      stackovTags: ["vb.net"],
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
