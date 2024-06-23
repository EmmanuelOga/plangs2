import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+powerbasic",
    "PowerBASIC",
    {
      name: "PowerBASIC",
      websites: [
        { kind: "wikipedia", title: "PowerBASIC", href: "https://en.wikipedia.org/wiki/PowerBASIC" },
        { kind: "homepage", title: "www.powerbasic.com", href: "https://www.powerbasic.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PowerBasic-screen-shot.png/300px-PowerBasic-screen-shot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "10.0", date: "2011-05-04", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://www.powerbasic.com/support/pbforums/showthread.php?t=047454",
            title: "Release of PowerBASIC 10.0 Compiler for Windows",
          },
        ],
      },
    },
    { influences: ["pl+turbo-basic"] },
  );

  /**/
}
