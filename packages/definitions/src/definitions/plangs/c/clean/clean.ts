import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clean", {
      name: "Clean",
      description:
        "Clean is a general-purpose purely functional programming language. Originally called the Concurrent Clean System or the Clean System, it has been developed by a group of researchers from the Radboud University in Nijmegen since 1987. Although development of the language has slowed, some researchers are still working in the language. In 2018, a spin-off company was founded that uses Clean.",
      firstAppeared: "1987-01-01",
      extensions: [".abc", ".dcl", ".icl"],
      websites: [
        { href: "http://clean.cs.ru.nl/", title: "clean.cs.ru.nl", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Clean_(programming_language)", title: "Clean", kind: "wikipedia" },
      ],
      releases: [{ version: "3.1", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);
}
