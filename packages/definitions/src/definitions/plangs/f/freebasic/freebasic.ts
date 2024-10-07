import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+freebasic", {
      name: "FreeBASIC",
      description:
        "FreeBASIC is a free and open source multiplatform compiler and programming language based on BASIC licensed under the GNU GPL  for Microsoft Windows, protected-mode MS-DOS (DOS extender), Linux, FreeBSD and Xbox.  The Xbox version is no longer maintained.",
      firstAppeared: "2004-01-01",
      websites: [
        { href: "http://www.freebasic.net/", title: "www.freebasic.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/FreeBASIC", title: "FreeBASIC", kind: "wikipedia" },
      ],
      releases: [{ version: "1.10.1", date: "2023-01-01" }],
    })
    .addImplements(["pl+basic"])
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter", "tag+ray-tracer", "tag+viz"])
    .addTypeSystems(["tsys+static"]);
}
