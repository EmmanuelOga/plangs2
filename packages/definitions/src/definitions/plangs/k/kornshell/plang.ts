import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+kornshell", {
      name: "KornShell",
      description:
        "KornShell (ksh) is a Unix shell which was developed by David Korn at Bell Labs in the early 1980s and announced at USENIX on July 14, 1983.  The initial development was based on Bourne shell source code.  Other early contributors were Bell Labs developers Mike Veach and Pat Sullivan, who wrote the Emacs and vi-style line editing modes' code, respectively. KornShell is backward-compatible with the Bourne shell and includes many features of the C shell, inspired by the requests of Bell Labs users.",
      websites: [
        { href: "http://kornshell.com/", title: "kornshell.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/KornShell", title: "KornShell", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "KornShell", url: "/images/plangs/k/kornshell/other.png" }],
    })
    .addLicenses(["lic+isc", "lic+lgpl", "lic+public-domain"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"])
    .addWrittenIn(["pl+c"]);
}
