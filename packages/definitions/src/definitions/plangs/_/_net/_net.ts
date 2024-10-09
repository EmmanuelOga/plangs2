import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+.net", {
      name: ".NET",
      description:
        'The .NET platform (pronounced as "dot net") is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. The project is mainly developed by Microsoft employees by way of the .NET Foundation and is released under an MIT License.',
      keywords: ["dotnet", ".net"],
      websites: [
        { title: ".NET", href: "http://dotnet.microsoft.com/", kind: "homepage" },
        { title: ".NET", href: "https://en.wikipedia.org/wiki/.NET", kind: "wikipedia" },
      ],
      extensions: [".csproj", ".vbproj", ".fsproj", ".sln"],
      firstAppeared: "2002-02-13",
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "8.0.8", name: ".NET 8.0.8", date: "2024-01-01" },
        { version: "9.0.0", name: ".NET 9.0.0", date: "2024-01-01" },
        { version: "2022", name: ".NET 6", date: "2021-11-08" },
      ],
    })
    .addImplements(["pl+c-sharp", "pl+f-sharp", "pl+visual-basic"])
    .addInfluencedBy(["pl+java", "pl+smalltalk"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+.net", "plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreter", "tag+shell", "tag+ui"])
    .addTypeSystems(["tsys+polymorphic", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++", "pl+c-sharp"]);
}
