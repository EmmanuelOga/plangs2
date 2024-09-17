import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+powerbasic", {
      name: "PowerBASIC",
      description:
        "PowerBASIC, formerly Turbo Basic, is the brand of several commercial compilers by PowerBASIC Inc. that compile a dialect of the BASIC programming language. There are both MS-DOS and Windows versions, and two kinds of the latter: Console and Windows. The MS-DOS version has a syntax similar to that of QBasic and QuickBASIC. The Windows versions use a BASIC syntax expanded to include many Windows functions, and the statements can be combined with calls to the Windows API.",
      firstAppeared: "1989-01-01",
      websites: [
        { href: "https://www.powerbasic.com/", title: "www.powerbasic.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/PowerBASIC", title: "PowerBASIC", kind: "wikipedia" },
      ],
      releases: [{ version: "10.0", date: "2011-01-01" }],
      images: [{ kind: "screenshot", title: "PowerBASIC", url: "/images/plangs/p/powerbasic/screenshot.png" }],
    })
    .addImplements(["pl+basic"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+editor",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+testing",
      "tag+ui",
    ]);
}
