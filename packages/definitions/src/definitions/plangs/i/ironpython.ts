import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ironpython", {
      images: [],
      name: "IronPython",
      description:
        "IronPython is an implementation of the Python programming language targeting the .NET and Mono frameworks. The project is currently maintained by a group of volunteers at GitHub. It is free and open-source software, and can be implemented with Python Tools for Visual Studio, which is a free and open-source extension for Microsoft's Visual Studio IDE.",
      websites: [
        { href: "https://ironpython.net/", title: "ironpython.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/IronPython", title: "IronPython", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [
        { version: "3.4.1", date: "2023-01-01" },
        { version: "3.4.0", date: "2022-01-01" },
      ],
    })
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"])
    .addTags(["tag+interpreter"])
    .addWrittenIn(["pl+c-sharp"]);
}
