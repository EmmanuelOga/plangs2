import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+objective-c")
    .merge({
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
    })
    .addImplementations(["pl+clang", "pl+gcc"])
    .addInfluences(["pl+c", "pl+smalltalk"])
    .addPerson("person+brad-cox", { role: "designer" })
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+dynamic", "tsys+weak"]);

  /**/
}
