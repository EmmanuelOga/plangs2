import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+osx", {
    name: "OSX",
    description:
      "macOS, originally Mac OS X, previously shortened as OS X, is a Unix-based operating system developed and marketed by Apple since 2001. It is the primary operating system for Apple's Mac computers.",
    shortDesc: "The primary operating system for Apple's Mac computers.",
    created: "2001-03-24",
    extHomeURL: "https://www.apple.com/macos/",
    extWikipediaPath: "MacOS",
  });
}
