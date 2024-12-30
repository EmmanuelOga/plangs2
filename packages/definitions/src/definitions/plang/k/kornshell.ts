import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+kornshell", {
      name: "KornShell",
      description:
        "Unix-based shell developed by David Korn that combines features from the C shell and Bourne shell. It introduced command line editing, associative arrays, and floating-point arithmetic operations, and conforms to established POSIX standards.",
      shortDesc: "Unix-based shell that combines features from C and Bourne shells, supporting POSIX standards.",
      created: "1983",
      extensions: [".ksh", ".sh"],
      extGithubPath: "att/ast",
      extHomeURL: "http://kornshell.com/",
      extWikipediaPath: "KornShell",
      filenames: ["ksh"],
      githubStars: 561,
      isTranspiler: false,
      keywords: ["kornshell", "ksh", "unix-shell"],
    })
    .relDialectOf.add("pl+bash")
    .relInfluencedBy.add("pl+awk", "pl+bash")
    .relLicenses.add("lic+epl", "lic+isc", "lic+lgpl", "lic+public-domain")
    .relParadigms.add("para+interpreted", "para+oop", "para+procedural", "para+scripting", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+cli", "tag+interpreters", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped")
    .relWrittenWith.add("pl+c");
}
