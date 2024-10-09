import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+newspeak", {
      name: "Newspeak",
      description:
        "Newspeak is a programming language and platform in the tradition of Smalltalk and Self being developed by a team led by Gilad Bracha. The platform includes an integrated development environment (IDE), a graphical user interface (GUI) library, and standard libraries. Starting in 2006, Cadence Design Systems funded its development and employed the main contributors, but ended funding in January 2009.",
      keywords: ["newspeak"],
      websites: [
        { title: "newspeaklanguage.org", href: "http://newspeaklanguage.org/", kind: "homepage" },
        { title: "Newspeak", href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)", kind: "wikipedia" },
      ],
      firstAppeared: "2006-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+self", "pl+squeak"])
    .addInfluencedBy(["pl+self"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter", "tag+testing", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+optional"])
    .addWrittenIn(["pl+c++", "pl+javascript"]);
}
