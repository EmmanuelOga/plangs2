import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+.net", {
      name: ".NET",
      description:
        'The .NET platform (pronounced as "dot net") is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is developed by Microsoft employees and the open-source community through the .NET Foundation and is released under the MIT License. .NET is known for its cross-platform capabilities and support for multiple programming paradigms, making it suitable for building a wide range of applications from web and mobile to cloud and microservices.',
      keywords: [".net", "dotnet"],
      extensions: [".csproj", ".fsproj", ".sln", ".vbproj"],
      releases: [
        { version: "7.0", name: ".NET 7", date: "2022-09-08" },
        { version: "8.0", name: ".NET 8", date: "2023-09-14" },
        { version: "9.0", name: ".NET 9", date: "2024-09-12" },
      ],
      extWikipediaPath: ".NET",
      extHomeURL: "http://dotnet.microsoft.com/",
      created: "2016",
    })
    .relImplements.add(["pl+c-sharp", "pl+f-sharp", "pl+visual-basic"])
    .relInfluencedBy.add(["pl+java"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+concurrent", "para+functional", "para+multi", "para+oop"])
    .relPlatform.add(["plat+.net", "plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+wasm", "plat+windows", "plat+x86-64"])
    .relTag.add(["tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreters", "tag+shell", "tag+ui"])
    .relTypeSystem.add(["tsys+nominal", "tsys+polymorphic", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c++", "pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
