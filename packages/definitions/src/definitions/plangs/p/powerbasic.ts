import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+powerbasic", {
      images: [{ title: "PowerBASIC", kind: "screenshot", url: "/images/plangs/p/powerbasic/main.png" }],
      name: "PowerBASIC",
      description:
        "PowerBASIC, formerly Turbo Basic, is the brand of several commercial compilers by PowerBASIC Inc. that compile a dialect of the BASIC programming language. There are both MS-DOS and Windows versions, and two kinds of the latter: Console and Windows. The MS-DOS version has a syntax similar to that of QBasic and QuickBASIC. The Windows versions use a BASIC syntax expanded to include many Windows functions, and the statements can be combined with calls to the Windows API.",
      websites: [
        { href: "https://www.powerbasic.com/", title: "www.powerbasic.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/PowerBASIC", title: "PowerBASIC", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "10.0", date: "2011-01-01" }],
    })
    .addImplements(["pl+basic"])
    .addPlatforms(["platf+dos", "platf+windows"]);
}
