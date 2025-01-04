import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+bsd", {
    name: "BSD",
    description:
      "Family of Unix-like operating systems derived from the Berkeley Software Distribution, including FreeBSD, OpenBSD, and NetBSD.",
    extHomeURL: "https://en.wikipedia.org/wiki/BSD",
    keywords: ["bsd", "dragonflybsd", "freebsd", "netbsd", "openbsd"],
  });
}
