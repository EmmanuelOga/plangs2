import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cpp",
    {
      name: "C++",
      websites: [{ kind: "wikipedia", title: "C++", href: "https://en.wikipedia.org/wiki/C%2B%2B" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" }],
      releases: [
        { version: "unknown", date: "1488-01-01", kind: "stable" },
        { version: "unknown", date: "2023-01-01", kind: "preview" },
      ],
      extensions: [".c++", ".h++"],
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+algol",
        "pl+bcpl",
        "pl+clu",
        "pl+f-sharp",
        "pl+ml",
        "pl+mesa",
        "pl+modula",
        "pl+simula",
        "pl+smalltalk",
      ],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+generic", "para+modular"],
      people: ["person+bjarne-stroustrup"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+nominative", "tsys+inferred"],
    },
  );

  lb.define(
    "pl+cpp11",
    {
      name: "C++11",
      websites: [{ kind: "wikipedia", title: "C++11", href: "https://en.wikipedia.org/wiki/C%2B%2B11" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp14",
    {
      name: "C++14",
      websites: [{ kind: "wikipedia", title: "C++14", href: "https://en.wikipedia.org/wiki/C%2B%2B14" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp17",
    {
      name: "C++17",
      websites: [{ kind: "wikipedia", title: "C++17", href: "https://en.wikipedia.org/wiki/C%2B%2B17" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cpp20",
    {
      name: "C++20",
      websites: [{ kind: "wikipedia", title: "C++20", href: "https://en.wikipedia.org/wiki/C%2B%2B20" }],
    },
    { influences: ["pl+d"] },
  );

  lb.define(
    "pl+cppbuilder",
    {
      name: "C++Builder",
      websites: [{ kind: "wikipedia", title: "C++Builder", href: "https://en.wikipedia.org/wiki/C%2B%2BBuilder" }],
      releases: [{ version: "12.1", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+delphi", "pl+cpp"],
      licenses: ["lic+trialware"],
      paradigms: ["para+objects", "para+functional", "para+strongly"],
      platforms: ["platf+x64", "platf+win"],
    },
  );

  lb.define(
    "pl+objective-cpp",
    {
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
    },
    {
      implementations: ["pl+clang", "pl+gcc"],
      influences: ["pl+cpp", "pl+c", "pl+smalltalk"],
      people: ["person+brad-cox"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
    },
  );
}
