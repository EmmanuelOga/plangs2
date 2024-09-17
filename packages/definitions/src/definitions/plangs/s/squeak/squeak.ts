import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+squeak", {
      name: "Squeak",
      description:
        "Squeak is an object-oriented, class-based, and reflective programming language. It was derived from Smalltalk-80 by a group that included some of Smalltalk-80's original developers, initially at Apple Computer, then at Walt Disney Imagineering, where it was intended for use in internal Disney projects. The group later was supported by HP Labs, SAP, and most recently, Y Combinator.",
      firstAppeared: "1996-01-01",
      extensions: [".changes", ".image", ".sources", ".st"],
      websites: [
        { href: "http://www.squeak.org/", title: "www.squeak.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Squeak", title: "Squeak", kind: "wikipedia" },
      ],
      images: [{ kind: "other", title: "Squeak", url: "/images/plangs/s/squeak/other.png" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+self", "pl+simula"])
    .addLicenses(["license+apache", "license+mit"])
    .addParadigms(["paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+windows"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+dynamic"]);
}
