import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+.net", {
      name: ".NET",
      description:
        'The .NET platform (pronounced as "dot net") is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. The project is mainly developed by Microsoft employees by way of the .NET Foundation and is released under an MIT License.',
      websites: [
        { href: "http://dotnet.microsoft.com/", title: "dotnet.microsoft.com", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/.NET", title: ".NET", kind: "wikipedia" },
      ],
      releases: [
        { version: "8.0.8", date: "2024-01-01" },
        { version: "9.0.0", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+c-sharp"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreter", "tag+shell", "tag+ui"])
    .addWrittenIn(["pl+c++", "pl+c-sharp"]);
}
