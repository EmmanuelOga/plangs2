import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jython", {
      name: "Jython",
      description:
        "Implementation of the Python programming language designed to run on the Java platform. It allows Python code to run on the JVM, providing seamless integration with Java libraries and classes.",
      shortDesc:
        "Python implementation for the Java platform, enabling Python code to run on the JVM.",
      created: "2001",
      extensions: [".py"],
      extGithubPath: "jython/jython",
      extHomeURL: "http://www.jython.org",
      extWikipediaPath: "Jython",
      githubStars: 1300,
      isTranspiler: false,
      keywords: ["jpython", "jvm", "jython"],
      releases: [{ version: "2.7.4", date: "2024-08-18" }],
    })
    .relImplements.add("pl+python")
    .relInfluencedBy.add("pl+java", "pl+python")
    .relLicenses.add("lic+apache", "lic+python")
    .relParadigms.add(
      "para+general-purpose",
      "para+interpreted",
      "para+oop",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+object")
    .relWrittenWith.add("pl+java");
}
