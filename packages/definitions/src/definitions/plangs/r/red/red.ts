import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+red", {
      name: "Red",
      description:
        "Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakočević, and is both an imperative and functional programming language. Its syntax and general usage overlaps that of the interpreted Rebol language.",
      firstAppeared: "2011-01-01",
      extensions: [".red", ".reds"],
      websites: [
        { href: "https://www.red-lang.org/", title: "www.red-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Red_(programming_language)", title: "Red", kind: "wikipedia" },
      ],
      releases: [{ version: "0.6.5", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Red", url: "/images/plangs/r/red/logo.png" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+lua", "pl+moonscript", "pl+rebol", "pl+scala"])
    .addLicenses(["license+boost", "license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+symbolic"])
    .addPlatforms(["plat+linux", "plat+windows"]);
}
