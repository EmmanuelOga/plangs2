import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+objective-c-plus-plus",
    "Objective-C++",
    {
      name: "Objective-C++",
      websites: [
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1984-01-01", kind: "first" },
        { version: "2.0", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://web.archive.org/web/20160720034718/https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtVersionsPlatforms.html",
            title: "Runtime Versions and Platforms",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
      extensions: [".h", ".m", ".mm", ".M"],
    },
    {
      implementations: ["pl+clang", "pl+gnu-compiler-collection"],
      influenced: ["pl+c-plus-plus"],
      influences: ["pl+c", "pl+groovy", "pl+java", "pl+nu", "pl+smalltalk", "pl+swift"],
      people: [["person+brad-cox", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+weak"],
    },
  );

  /**/
}
