import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+applescript",
    "AppleScript",
    {
      name: "AppleScript",
      websites: [
        { kind: "wikipedia", title: "AppleScript", href: "https://en.wikipedia.org/wiki/AppleScript" },
        {
          kind: "homepage",
          title: "developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide",
          href: "https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide",
        },
      ],
      references: {
        first_appeared: [{ href: "http://www.cs.utexas.edu/~wcook/Drafts/2006/ashopl.pdf", title: "AppleScript" }],
        stable_release: [
          {
            href: "https://www.theverge.com/2014/10/16/6978157/mac-os-x-yosemite-release-mac-app-store-october-16th",
            title: "OS X 10.10 Yosemite release date",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "2.8", date: "2014-10-16", kind: "stable" },
      ],
      extensions: [".scpt", ".scptd"],
    },
    {
      influences: ["pl+hypertalk", "pl+smalltalk"],
      licenses: ["lic+apple-public-source", "lic+proprietary"],
      paradigms: ["para+natural", "para+scripting"],
      platforms: ["platf+mac"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
