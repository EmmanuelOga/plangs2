import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jython", {
      name: "Jython",
      description:
        "Jython is an implementation of the Python programming language designed to run on the Java platform. It allows Python code to run on the JVM, providing seamless integration with Java libraries and classes.",
      keywords: ["jpython", "jvm", "jython"],
      extensions: [".py"],
      releases: [{ version: "2.7.4", date: "2024-08-18" }],
      extWikipediaPath: "Jython",
      extHomeURL: "http://www.jython.org",
      created: "2001",
      isTranspiler: false,
      shortDesc: "Jython is a Python implementation for the Java platform, enabling Python code to run on the JVM.",
      githubStars: 1300,
      extGithubPath: "jython/jython",
      ghRepoCreated: "2011-02-17",
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+java", "pl+python")
    .relLicenses.add("lic+apache", "lic+python")
    .relParadigms.add("para+interpreted", "para+oop", "para+scripting")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic")
    .relWrittenWith.add("pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
