import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jython", {
      name: "Jython",
      description:
        "Jython is an implementation of the Python programming language designed to run on the Java platform. It was known as JPython until 1999.",
      keywords: ["jython", "jpython"],
      websites: [
        { title: "www.jython.org", href: "https://www.jython.org/", kind: "homepage" },
        { title: "Jython", href: "https://en.wikipedia.org/wiki/Jython", kind: "wikipedia" },
      ],
      extensions: [".py"],
      year: 2000,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.7.4", name: "Jython 2.7.4", date: "2024-01-01" }],
    })
    .addImplements(["pl+python"])
    .addLicenses(["license+python"])
    .addParadigms(["paradigm+interpreted", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
