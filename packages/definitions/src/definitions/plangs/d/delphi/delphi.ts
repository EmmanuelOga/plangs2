import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+delphi", {
      name: "Delphi",
      description:
        "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, currently developed and maintained by Embarcadero Technologies.",
      websites: [
        { href: "https://www.embarcadero.com/products/delphi", title: "www.embarcadero.com/products/delphi", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Delphi_(software)", title: "Delphi", kind: "wikipedia" },
      ],
      releases: [{ version: "12.1", date: "2024-01-01" }],
      images: [{ kind: "screenshot", title: "Delphi", url: "/images/plangs/d/delphi/screenshot.png" }],
    })
    .addDialectOf(["pl+pascal"])
    .addImplements(["pl+pascal"])
    .addPlatforms(["plat+android", "plat+apple", "plat+linux", "plat+windows"])
    .addTags([
      "tag+asm",
      "tag+automation",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+rad",
      "tag+ui",
      "tag+uml",
      "tag+viz",
    ]);
}
