import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+colorforth", {
      name: "colorForth",
      description:
        "colorForth is a programming language from the Forth language's creator, Charles H. Moore, developed in the 1990s. The language combines elements of Moore's earlier Forth systems and adds color as a way of indicating how words should be interpreted. Program text is tokenized as it is edited; the compiler operates on the tokenized form, so there is less work at compile time.",
      keywords: ["colorforth", "color forth"],
      websites: [
        { title: "colorForth", href: "https://colorforth.github.io/", kind: "homepage" },
        { title: "colorForth", href: "https://en.wikipedia.org/wiki/ColorForth", kind: "wikipedia" },
      ],
      year: 1990,
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+forth"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+procedural", "paradigm+stack-oriented"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"]);
}
