import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cpp").merge({
    name: "C++",
    websites: [{ kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }],
    releases: [
      { version: "unknown", date: "1488-01-01", kind: "stable" },
      { version: "unknown", date: "2023-01-01", kind: "preview" },
    ],
    extensions: [".c++", ".h++"],
  });

  g.buildPlang("pl+cpp11").merge({
    name: "C++11",
    websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
  });

  g.buildPlang("pl+cpp14").merge({
    name: "C++14",
    websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
  });

  g.buildPlang("pl+cpp17").merge({
    name: "C++17",
    websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
  });

  g.buildPlang("pl+cpp20").merge({
    name: "C++20",
    websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
  });

  g.buildPlang("pl+cppbuilder").merge({
    name: "C++Builder",
    websites: [{ kind: "wikipedia", title: "C++Builder", href: "https://en.wikipedia.org/wiki/C%2B%2BBuilder" }],
    releases: [{ version: "12.1", date: "2024-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+objective-cpp").merge({
    name: "Objective-C",
    websites: [
      { kind: "wikipedia", title: "Objective-C++", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
      {
        kind: "homepage",
        title: "developer.apple.com",
        href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
      },
    ],
    releases: [{ version: "2.0", kind: "stable" }],
  });
}
