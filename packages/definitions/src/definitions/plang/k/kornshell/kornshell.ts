import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+kornshell", {
      name: "KornShell",
      description:
        "KornShell (ksh) is a Unix-based shell developed by David Korn that combines features from the C shell and Bourne shell. It introduced command line editing, associative arrays, and floating-point arithmetic operations, and conforms to established POSIX standards.",
      keywords: ["kornshell", "ksh", "unix-shell"],
      extensions: [".ksh", ".sh"],
      extWikipediaPath: "KornShell",
      extHomeURL: "http://kornshell.com/",
      created: "1983",
      filenames: ["ksh"],
      isTranspiler: false,
      shortDesc: "KornShell is a Unix-based shell that combines features from C and Bourne shells, supporting POSIX standards.",
      extGithubPath: "att/ast",
      githubStars: 561,
    })
    .relDialectOf.add("pl+bash")
    .relInfluencedBy.add("pl+awk", "pl+bash")
    .relLicenses.add("lic+epl", "lic+isc", "lic+lgpl", "lic+public-domain")
    .relParadigms.add("para+interpreted", "para+oop", "para+procedural", "para+scripting", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+cli", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
