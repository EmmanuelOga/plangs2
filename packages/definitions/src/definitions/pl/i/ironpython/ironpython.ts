import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ironpython", {
      name: "IronPython",
      description:
        "IronPython is an open-source implementation of the Python programming language, targeting the .NET and Mono frameworks. It is tightly integrated with .NET, enabling the use of .NET libraries in Python code and vice versa. IronPython is ideal for developers looking to leverage .NET's ecosystem while writing Python scripts. It is currently maintained by volunteers on GitHub and is open-source under the Apache License 2.0.",
      keywords: [".net", "clr", "dlr", "ironpython", "mono", "python"],
      extensions: [".py", ".pyi"],
      releases: [
        { version: "3.4.1", name: "3.4.1", date: "2023-07-12" },
        { version: "3.4.0", name: "3.4.0", date: "2022-12-12" },
        { version: "2.7.12", name: "2.7.12", date: "2022-01-21" },
      ],
      extWikipediaPath: "IronPython",
      extHomeURL: "https://ironpython.net/",
      created: "2006",
    })
    .relImplement.add(["pl+python"])
    .relInfluence.add(["pl+.net", "pl+c-sharp"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+imperative", "para+multi", "para+oop", "para+scripting"])
    .relPlatform.add(["plat+.net", "plat+apple", "plat+linux", "plat+windows"])
    .relTag.add(["tag+app", "tag+cli", "tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting", "tag+shell"])
    .relTypeSystem.add(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
