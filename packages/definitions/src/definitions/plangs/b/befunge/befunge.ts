import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+befunge", {
      name: "Befunge",
      description:
        'Befunge is a two-dimensional stack-based, reflective, esoteric programming language. It differs from conventional languages in that programs are arranged on a two-dimensional grid. "Arrow" instructions direct the control flow to the left, right, up or down, and loops are constructed by sending the control flow in a cycle. It has been described as "a cross between Forth and Lemmings".',
      keywords: ["befunge"],
      websites: [
        { title: "catseye.tc/node/Befunge-93.html", href: "http://catseye.tc/node/Befunge-93.html", kind: "homepage" },
        { title: "Befunge", href: "https://en.wikipedia.org/wiki/Befunge", kind: "wikipedia" },
      ],
      extensions: [".befunge"],
      firstAppeared: "1993-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+forth"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+esoteric", "paradigm+stack-oriented"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+untyped"]);
}
