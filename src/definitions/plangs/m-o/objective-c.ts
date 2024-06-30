import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+objective-c").merge({
    name: "Objective-C",
    websites: [
      { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C" },
      {
        kind: "homepage",
        title: "developer.apple.com",
        href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
      },
    ],
    releases: [{ version: "2.0", kind: "stable" }],
  });
}
