import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+free-pascal", {
      name: "Free Pascal",
      description:
        "Free Pascal Compiler (FPC) is a compiler for the closely related programming-language dialects Pascal and Object Pascal. It is free software released under the GNU General Public License, with exception clauses that allow static linking against its runtime libraries and packages for any purpose in combination with any other software license.",
      websites: [
        { href: "http://www.freepascal.org/", title: "www.freepascal.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Free_Pascal", title: "Free Pascal", kind: "wikipedia" },
      ],
      releases: [{ version: "3.2.2", date: "2021-01-01" }, { version: "3.3.1" }],
      images: [{ kind: "screenshot", title: "Free Pascal", url: "/images/plangs/f/free-pascal/screenshot.png" }],
    })
    .addImplements(["pl+pascal"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+ui"]);
}
