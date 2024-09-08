import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+freebasic", {
      images: [{ title: "FreeBASIC", kind: "logo", url: "/images/plangs/f/freebasic/main.gif" }],
      name: "FreeBASIC",
      description:
        "FreeBASIC is a free and open source multiplatform compiler and programming language based on BASIC licensed under the GNU GPL  for Microsoft Windows, protected-mode MS-DOS (DOS extender), Linux, FreeBSD and Xbox.  The Xbox version is no longer maintained.",
      websites: [
        { href: "http://www.freebasic.net/", title: "www.freebasic.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/FreeBASIC", title: "FreeBASIC", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "1.10.1", date: "2023-01-01" }],
    })
    .addImplements(["pl+basic"])
    .addInfluencedBy(["pl+c"])
    .addLicenses(["lic+gnu-gpl"])
    .addParadigms(["para+oop", "para+procedural"])
    .addPlatforms(["platf+bsd", "platf+dos", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+static"]);
}
