import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+objective-c",
    {
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
    },
    {
      implementations: ["pl+clang", "pl+gcc"],
      influences: ["pl+c", "pl+smalltalk"],
      people: ["person+brad-cox"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
    },
  );
}
