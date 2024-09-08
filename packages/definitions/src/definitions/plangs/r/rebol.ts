import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+rebol", {
      images: [],
      name: "Rebol",
      description:
        "Rebol (/ˈrɛbəl/ REB-əl; historically REBOL) is a cross-platform data exchange language and a multi-paradigm dynamic programming language designed by Carl Sassenrath for network communications and distributed computing.  It introduces the concept of dialecting: small, optimized, domain-specific languages for code and data, which is also the most notable property of the language according to its designer Carl Sassenrath:",
      websites: [
        { href: "http://www.rebol.com/", title: "www.rebol.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Rebol", title: "Rebol", kind: "wikipedia" },
      ],
      extensions: [".r", ".reb"],
      releases: [
        { version: "2.7.8", date: "2011-01-01" },
        { version: "2.101.0", date: "2012-01-01" },
      ],
    })
    .addInfluencedBy(["pl+forth", "pl+lisp", "pl+self"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+data-exchange", "para+functional", "para+imperative", "para+language-oriented", "para+prototype"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
