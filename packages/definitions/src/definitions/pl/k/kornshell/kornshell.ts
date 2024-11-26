import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+kornshell", {
      name: "KornShell",
      description:
        "KornShell (ksh) is a Unix shell developed by David Korn at Bell Labs in the early 1980s and first announced at USENIX in 1983. It was originally based on the Bourne shell and includes features from the C shell, following requests from Bell Labs users. KornShell is compatible with the Bourne shell and supports POSIX standard compliance. Key features include command line editing, job control, command history, associative arrays, arithmetic operations, and object-oriented programming structures. The shell has undergone numerous adaptations and licensing changes over time, and it remains widely used today across Unix-like systems.",
      keywords: ["kornshell", "ksh"],
      extensions: [".ksh", ".sh"],
      extWikipediaPath: "KornShell",
      extHomeURL: "http://kornshell.com/",
      created: "1983",
    })
    .relLicense.add(["lic+epl", "lic+isc", "lic+lgpl", "lic+public-domain"])
    .relParadigm.add(["para+interpreted", "para+oop", "para+procedural", "para+scripting", "para+structured"])
    .relPlatform.add(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .relTag.add(["tag+automation", "tag+cli", "tag+interpreters", "tag+scripting", "tag+shell"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+untyped"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
