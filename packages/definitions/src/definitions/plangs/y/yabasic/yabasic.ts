import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+yabasic", {
      name: "Yabasic",
      description:
        "Yabasic (Yet Another BASIC) is a free, open-source BASIC interpreter for Microsoft Windows and Unix platforms. Yabasic was originally developed by Marc-Oliver Ihm, who released the last stable version 2.77.3 in 2016. From version 2.77.1, the project has adopted the MIT License as well as the source code being moved to GitHub to encourage others to participate in its development.",
      websites: [
        { href: "http://www.yabasic.de/", title: "www.yabasic.de", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Yabasic", title: "Yabasic", kind: "wikipedia" },
      ],
      releases: [{ version: "2.90.4", date: "2023-01-01" }],
      images: [{ kind: "other", title: "Yabasic", url: "/images/plangs/y/yabasic/other.png" }],
    })
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+windows"]);
}
