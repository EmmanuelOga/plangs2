import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+ios", "iOS", {
    websites: [
      { kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" },
      { kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/Apple_iOS" },
    ],
  });

  lb.define("platf+mac", "macOS", {
    websites: [
      { kind: "wikipedia", title: "macOS", href: "https://en.wikipedia.org/wiki/MacOS" },
      {
        kind: "wikipedia",
        title: "Mac operating systems",
        href: "https://en.wikipedia.org/wiki/Mac_operating_systems",
      },
      { kind: "wikipedia", title: "Mac OS X", href: "https://en.wikipedia.org/wiki/Mac_OS_X" },
      { kind: "wikipedia", title: "Mac OS", href: "https://en.wikipedia.org/wiki/Mac_OS" },
      { kind: "wikipedia", title: "OS X", href: "https://en.wikipedia.org/wiki/OS_X" },
      { kind: "wikipedia", title: "Mac OS 8", href: "https://en.wikipedia.org/wiki/Mac_OS_8" },
      { kind: "wikipedia", title: "Mac OS 9", href: "https://en.wikipedia.org/wiki/Mac_OS_9" },
      { kind: "wikipedia", title: "Apple silicon", href: "https://en.wikipedia.org/wiki/Apple_silicon" },
      { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(operating_system)" },
      { kind: "wikipedia", title: "Macintosh", href: "https://en.wikipedia.org/wiki/Macintosh" },
      { kind: "wikipedia", title: "macOS 10.12", href: "https://en.wikipedia.org/wiki/MacOS_10.12" },
    ],
  });

  lb.define("platf+tvos", "tvOS", {
    websites: [{ kind: "wikipedia", title: "tvOS", href: "https://en.wikipedia.org/wiki/TvOS" }],
  });

  lb.define("platf+watchos", "watchOS", {
    websites: [{ kind: "wikipedia", title: "watchOS", href: "https://en.wikipedia.org/wiki/WatchOS" }],
  });
}
