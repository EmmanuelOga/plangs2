import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ironpython", {
      name: "IronPython",
      description:
        "IronPython is an implementation of the Python programming language targeting the .NET and Mono frameworks. It is integrated with the .NET Framework and is well-suited for embedding into applications written in .NET languages. The project is maintained by a group of volunteers on GitHub and is open-source software.",
      keywords: [".net", "ironpython", "mono", "python"],
      websites: [
        { title: "ironpython.net", href: "https://ironpython.net/", kind: "homepage" },
        { title: "IronPython", href: "https://en.wikipedia.org/wiki/IronPython", kind: "wikipedia" },
      ],
      extensions: [".py", ".pyi"],
      year: 2006,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "3.4.1", name: "3.4.1", date: "2023-01-01" },
        { version: "3.4.0", name: "3.4.0", date: "2022-01-01" },
      ],
    })
    .addImplements(["pl+python"])
    .addInfluencedBy(["pl+.net", "pl+c-sharp"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+.net", "plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
