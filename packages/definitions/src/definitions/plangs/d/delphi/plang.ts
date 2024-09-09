import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+delphi", {
      images: [{ kind: "screenshot", title: "Delphi", url: "/images/plangs/d/delphi/screenshot.png" }],
      name: "Delphi",
      description:
        "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, currently developed and maintained by Embarcadero Technologies.",
      websites: [
        { href: "https://www.embarcadero.com/products/delphi", title: "www.embarcadero.com/products/delphi", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Delphi_(software)", title: "Delphi", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "12.1", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+pascal"])
    .addImplements(["pl+pascal"])
    .addPlatforms(["platf+android", "platf+apple", "platf+linux", "platf+windows"])
    .addTags(["tag+compiler"]);
}
