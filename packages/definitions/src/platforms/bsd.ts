import type { PlangsGraph } from "../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+bsd").merge({
    name: "FreeBSD",
    websites: [
      { kind: "wikipedia", title: "FreeBSD", href: "https://en.wikipedia.org/wiki/FreeBSD" },
      { kind: "wikipedia", title: "NetBSD", href: "https://en.wikipedia.org/wiki/NetBSD" },
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/Berkeley_Software_Distribution" },
      { kind: "wikipedia", title: "OpenBSD", href: "https://en.wikipedia.org/wiki/OpenBSD" },
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/BSD" },
      { kind: "wikipedia", title: "DragonFly BSD", href: "https://en.wikipedia.org/wiki/DragonFly_BSD" },
      { kind: "wikipedia", title: "DragonflyBSD", href: "https://en.wikipedia.org/wiki/DragonflyBSD" },
    ],
  });

  /**/
}
