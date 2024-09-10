import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rebol", {
      name: "Rebol",
      description:
        "Rebol (/ˈrɛbəl/ REB-əl; historically REBOL) is a cross-platform data exchange language and a multi-paradigm dynamic programming language designed by Carl Sassenrath for network communications and distributed computing.  It introduces the concept of dialecting: small, optimized, domain-specific languages for code and data, which is also the most notable property of the language according to its designer Carl Sassenrath:",
      firstAppeared: "1997-01-01",
      extensions: [".r", ".reb"],
      websites: [
        { href: "http://www.rebol.com/", title: "www.rebol.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Rebol", title: "Rebol", kind: "wikipedia" },
      ],
      releases: [
        { version: "2.7.8", date: "2011-01-01" },
        { version: "2.101.0", date: "2012-01-01" },
      ],
    })
    .addInfluencedBy(["pl+forth", "pl+lisp", "pl+self"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+data-exchange", "paradigm+functional", "paradigm+imperative", "paradigm+language-oriented", "paradigm+prototype"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
