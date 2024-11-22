import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jython", {
      name: "Jython",
      description:
        "Jython is an implementation of the Python programming language designed to run on the Java platform. It allows Python code to run on the JVM, providing access to Java libraries and classes. It was initially called JPython until 1999.",
      keywords: ["jpython", "jython"],
      extensions: [".py"],
      releases: [{ version: "2.7.4", name: "Jython 2.7.4", date: "2024-08-18" }],
      extWikipediaPath: "Jython",
      extHomeURL: "https://www.jython.org/",
      created: "2001",
    })
    .relImplements.add(["pl+python"])
    .relLicenses.add(["license+apache", "license+python"])
    .relParadigms.add(["paradigm+interpreted", "paradigm+oop", "paradigm+scripting"])
    .relPlatforms.add(["plat+cross", "plat+java"])
    .relTags.add(["tag+interpreters"])
    .relTsys.add(["tsys+duck", "tsys+dynamic"])
    .relWrittenIn.add(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
