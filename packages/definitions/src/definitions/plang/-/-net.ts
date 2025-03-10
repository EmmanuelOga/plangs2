import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+.net", {
      name: ".NET",
      description:
        "Free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is developed by Microsoft employees and the open-source community through the .NET Foundation and is released under the MIT License. .NET is known for its cross-platform capabilities and support for multiple programming paradigms, making it suitable for building a wide range of applications from web and mobile to cloud and microservices.",
      shortDesc:
        "Cross-platform, open-source framework known for supporting multiple programming paradigms.",
      created: "2016",
      extensions: [".csproj", ".fsproj", ".sln", ".vbproj"],
      extGithubPath: "microsoft/dotnet",
      extHomeURL: "http://dotnet.microsoft.com/",
      extWikipediaPath: ".NET",
      githubPopular: true,
      githubStars: 14500,
      isTranspiler: true,
      keywords: [".net", "dotnet"],
      releases: [
        { version: "7.0", name: ".NET 7", date: "2022-09-08" },
        { version: "8.0", name: ".NET 8", date: "2023-09-14" },
        { version: "9.0", name: ".NET 9", date: "2024-09-12" },
      ],
    })
    .relCompilesTo.add("pl+webassembly")
    .relImplements.add("pl+c-sharp", "pl+f-sharp", "pl+visual-basic")
    .relInfluencedBy.add("pl+java")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+multi",
      "para+oop",
      "para+parallel",
    )
    .relPlatforms.add(
      "plat+.net",
      "plat+android",
      "plat+apple",
      "plat+cross",
      "plat+linux",
      "plat+wasm",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+framework",
      "tag+gui",
      "tag+interpreters",
      "tag+shell",
    )
    .relTypeSystems.add(
      "tsys+nominal",
      "tsys+object",
      "tsys+polymorphic",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+c++", "pl+c-sharp");
}
