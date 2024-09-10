import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+gforth", {
      name: "Gforth",
      description:
        "Gforth is a free and portable implementation of the Forth programming language for Unix-like systems, Microsoft Windows, and other operating systems. A primary goal of Gforth is to adhere to the ANS Forth standard. Gforth is free software as part of the GNU Project.",
      websites: [
        { href: "http://gnu.org/s/gforth/", title: "gnu.org/s/gforth/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Gforth", title: "Gforth", kind: "wikipedia" },
      ],
      releases: [
        { version: "0.7.3", date: "2014-01-01" },
        { version: "0.7.9", date: "2020-01-01" },
      ],
      images: [{ kind: "logo", title: "Gforth", url: "/images/plangs/g/gforth/logo.png" }],
    })
    .addImplements(["pl+forth"])
    .addLicenses(["lic+gnu-gpl"])
    .addPlatforms(["platf+dos", "platf+windows"])
    .addTags(["tag+interpreter"])
    .addWrittenIn(["pl+c", "pl+forth"]);
}