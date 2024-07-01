import type { PlangsGraph } from "../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+ios").merge({
    name: "iOS",
    websites: [
      { kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" },
      { kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS_(Apple)" },
    ],
  });

  /**/

  g.buildPlatform("platf+mac").merge({
    name: "macOS",
    websites: [
      { kind: "wikipedia", title: "MacOS", href: "https://en.wikipedia.org/wiki/MacOS" },
      { kind: "wikipedia", title: "Mac OS 8", href: "https://en.wikipedia.org/wiki/Mac_OS_8" },
      { kind: "wikipedia", title: "Mac OS 9", href: "https://en.wikipedia.org/wiki/Mac_OS_9" },
      { kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" },
      { kind: "wikipedia", title: "Mac OS", href: "https://en.wikipedia.org/wiki/Mac_OS" },
      { kind: "wikipedia", title: "Macintosh", href: "https://en.wikipedia.org/wiki/Macintosh" },
      { kind: "wikipedia", title: "Apple silicon", href: "https://en.wikipedia.org/wiki/Apple_silicon" },
      { kind: "wikipedia", title: "OS X", href: "https://en.wikipedia.org/wiki/OS_X" },
      { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(operating_system)" },
    ],
  });

  /**/

  g.buildPlatform("platf+tvos").merge({
    name: "tvOS",
    websites: [{ kind: "wikipedia", title: "tvOS", href: "https://en.wikipedia.org/wiki/TvOS" }],
  });

  /**/

  g.buildPlatform("platf+watchos").merge({
    name: "watchOS",
    websites: [{ kind: "wikipedia", title: "watchOS", href: "https://en.wikipedia.org/wiki/WatchOS" }],
  });

  /**/
}
