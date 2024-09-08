import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+purebasic", {
      images: [{ kind: "other", title: "PureBasic" }],
      name: "PureBasic",
      description:
        "PureBasic is a commercially distributed procedural computer programming language and integrated development environment based on BASIC and developed by Fantaisie Software for Windows, Linux, and macOS. An Amiga version is available, although it has been discontinued and some parts of it are released as open-source. The first public release of PureBasic for Windows was on 17 December 2000. It has been continually updated ever since.",
      websites: [
        { href: "http://www.purebasic.com/", title: "www.purebasic.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/PureBasic", title: "PureBasic", kind: "wikipedia" },
      ],
      extensions: [".pb", ".pbf", ".pbi", ".pbp"],
      releases: [{ version: "6.11", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+basic"])
    .addParadigms(["para+imperative", "para+procedural", "para+structured"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+raspberry", "platf+windows"]);
}
