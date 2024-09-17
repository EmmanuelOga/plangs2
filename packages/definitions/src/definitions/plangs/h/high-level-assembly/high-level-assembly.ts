import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+high-level-assembly", {
      name: "High Level Assembly",
      description:
        "High-Level Assembly (HLA) is a language developed by Randall Hyde that allows the use of higher-level language constructs to aid both beginners and advanced assembly developers. It supports advanced data types and object-oriented programming. It uses a syntax loosely based on several high-level programming languages (HLLs), such as Pascal, Ada, Modula-2, and C++, to allow the creation of readable assembly language programs, and to allow HLL programmers to learn HLA as fast as possible.",
      websites: [
        { href: "http://plantation-productions.com/Webster", title: "plantation-productions.com/Webster", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/High_Level_Assembly", title: "High Level Assembly", kind: "wikipedia" },
      ],
      releases: [{ version: "2.16", date: "2011-01-01" }],
    })
    .addLicenses(["license+public-domain"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+4gl", "tag+app", "tag+asm", "tag+compiler", "tag+if", "tag+industrial", "tag+interpreter", "tag+viz"])
    .addWrittenIn(["pl+assembly"]);
}
