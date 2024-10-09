import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+kornshell", {
      name: "KornShell",
      description:
        "KornShell (ksh) is a Unix shell which was developed by David Korn at Bell Labs in the early 1980s and announced at USENIX on July 14, 1983. The initial development was based on Bourne shell source code. Other early contributors were Bell Labs developers Mike Veach and Pat Sullivan, who wrote the Emacs and vi-style line editing modes' code, respectively. KornShell is backward-compatible with the Bourne shell and includes many features of the C shell, inspired by the requests of Bell Labs users.",
      keywords: ["kornshell", "ksh"],
      websites: [
        { title: "kornshell.com", href: "http://kornshell.com/", kind: "homepage" },
        { title: "KornShell", href: "https://en.wikipedia.org/wiki/KornShell", kind: "wikipedia" },
      ],
      extensions: [".ksh", ".sh"],
      firstAppeared: "1983-07-14",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+bourne-shell", "pl+c-shell"])
    .addLicenses(["license+isc", "license+lgpl", "license+public-domain"])
    .addParadigms(["paradigm+interpreted", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+cli", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+untyped"])
    .addWrittenIn(["pl+c"]);
}
