import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+free-pascal", {
      images: [{ title: "Free Pascal", kind: "screenshot", url: "/images/plangs/f/free-pascal/main.png" }],
      name: "Free Pascal",
      description:
        "Free Pascal Compiler (FPC) is a compiler for the closely related programming-language dialects Pascal and Object Pascal. It is free software released under the GNU General Public License, with exception clauses that allow static linking against its runtime libraries and packages for any purpose in combination with any other software license.",
      websites: [
        { href: "http://www.freepascal.org/", title: "www.freepascal.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Free_Pascal", title: "Free Pascal", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "3.2.2", date: "2021-01-01" }, { version: "3.3.1" }],
    })
    .addImplements(["pl+pascal"])
    .addPlatforms(["platf+cross", "platf+embedded"])
    .addTags(["tag+compiler"]);
}
