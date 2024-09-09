import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+g95", {
      name: "G95",
      description:
        "G95 is a free, portable, open-source Fortran 95 compiler. It implements the Fortran 95 standard, part of the Fortran 2003 standard, as well as some old and new extensions including features for the Fortran 2008 standard like coarray Fortran. It also supports the F programming language subset.",
      websites: [
        { href: "http://g95.org/", title: "g95.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/G95", title: "G95", kind: "wikipedia" },
      ],
      releases: [{ version: "0.93", date: "2012-01-01" }],
    })
    .addImplements(["pl+fortran"])
    .addLicenses(["lic+gnu-gpl"])
    .addTags(["tag+compiler"])
    .addWrittenIn(["pl+c"]);
}
