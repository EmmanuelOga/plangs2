import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+tk", {
      name: "Tk",
      description:
        "Tk is a cross-platform widget toolkit that provides a library of basic elements of GUI widgets for building a graphical user interface (GUI) in many programming languages. It is free and open-source software released under a BSD-style software license.",
      websites: [
        { href: "http://www.tcl.tk/", title: "tcl.tk", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Tk_(software)", title: "Tk", kind: "wikipedia" },
      ],
      releases: [{ version: "8.6.13", date: "2022-01-01" }],
      images: [{ kind: "other", title: "Tk", url: "/images/plangs/t/tk/other.png" }],
    })
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+c"]);
}
