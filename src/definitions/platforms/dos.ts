import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+dos", "MS-DOS", {
    websites: [
      { kind: "wikipedia", title: "DOS", href: "https://en.wikipedia.org/wiki/DOS" },
      { kind: "wikipedia", title: "MS-DOS", href: "https://en.wikipedia.org/wiki/MS-DOS" },
      { kind: "wikipedia", title: "Microsoft DOS", href: "https://en.wikipedia.org/wiki/Microsoft_DOS" },
      { kind: "wikipedia", title: "PC DOS", href: "https://en.wikipedia.org/wiki/PC_DOS" },
      { kind: "wikipedia", title: "iPadOS", href: "https://en.wikipedia.org/wiki/IPadOS" },
    ],
  });
}
