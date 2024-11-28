import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+visual-basic", {
      name: "Visual Basic",
      description:
        "Visual Basic (VB), originally called Visual Basic .NET (VB.NET), is a multi-paradigm, object-oriented programming language, implemented on .NET, Mono, and the .NET Framework. Microsoft launched VB.NET in 2002 as the successor to its original Visual Basic language, the last version of which was Visual Basic 6.0. Along with C# and F#, it is one of the three main languages targeting the .NET ecosystem. Microsoft's integrated development environment for Visual Basic is Visual Studio, and it is often used in conjunction with the Windows Forms GUI library to create desktop applications for Windows.",
      keywords: ["vb", "vb.net", "visual basic", "visualbasic"],
      extensions: [".vb"],
      releases: [{ version: "17.9.2", name: "Visual Basic 17.9.2", date: "2024-02-27" }],
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
      created: "2001",
    })
    .relImplements.add(["pl+basic"])
    .relInfluencedBy.add(["pl+basic", "pl+haskell", "pl+visual-basic"])
    .relLicenses.add(["lic+apache"])
    .relParadigms.add(["para+declarative", "para+event-driven", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+structured"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+bsd", "plat+dos", "plat+linux", "plat+windows"])
    .relTags.add([
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+rad",
      "tag+shell",
      "tag+testing",
      "tag+ui",
    ])
    .relTypeSystems.add(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
