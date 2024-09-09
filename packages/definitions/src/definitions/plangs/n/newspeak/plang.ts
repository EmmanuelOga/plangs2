import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+newspeak", {
      name: "Newspeak",
      description:
        "Newspeak is a programming language and platform in the tradition of Smalltalk and Self being developed by a team led by Gilad Bracha. The platform includes an integrated development environment (IDE), a graphical user interface (GUI) library, and standard libraries. Starting in 2006, Cadence Design Systems funded its development and employed the main contributors, but ended funding in January 2009.",
      firstAppeared: "2006-01-01",
      websites: [
        { href: "http://newspeaklanguage.org/", title: "newspeaklanguage.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Newspeak_(programming_language)", title: "Newspeak", kind: "wikipedia" },
      ],
    })
    .addDialectOf(["pl+self", "pl+squeak"])
    .addInfluencedBy(["pl+self"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+oop"])
    .addPlatforms(["platf+android", "platf+apple", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+dynamic", "tsys+optional"])
    .addWrittenIn(["pl+c++", "pl+javascript"]);
}
