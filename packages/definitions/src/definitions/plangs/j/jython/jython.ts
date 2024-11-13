import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jython", {
      name: "Jython",
      description:
        "Jython is an implementation of the Python programming language designed to run on the Java platform. It allows Python code to run on the JVM, providing access to Java libraries and classes. It was initially called JPython until 1999.",
      keywords: ["jpython", "jython"],
      websites: [
        { title: "Home | Jython", href: "https://www.jython.org/", kind: "homepage" },
        { title: "Jython - Wikipedia", href: "https://en.wikipedia.org/wiki/Jython", kind: "wikipedia" },
      ],
      extensions: [".py"],
      year: 2001,
      isMainstream: false,
      releases: [{ version: "2.7.4", name: "Jython 2.7.4", date: "2024-08-18" }],
    })
    .addImplements(["pl+python"])
    .addLicenses(["license+apache", "license+python"])
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
