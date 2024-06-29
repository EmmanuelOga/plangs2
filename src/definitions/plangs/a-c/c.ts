import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c",
    "C",
    {
      name: "C",
      websites: [
        { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        {
          kind: "wikipedia",
          title: "C Programming Language",
          href: "https://en.wikipedia.org/wiki/C_Programming_Language",
        },
        { kind: "homepage", title: "www.iso.org/standard/74528.html", href: "https://www.iso.org/standard/74528.html" },
        {
          kind: "homepage",
          title: "www.open-std.org/jtc1/sc22/wg14/",
          href: "http://www.open-std.org/jtc1/sc22/wg14/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "2018-01-01", kind: "stable" },
        { version: "unknown", kind: "preview" },
        { version: "unknown", date: "2024-02-21", kind: "preview" },
      ],
      extensions: [".c", ".h"],
    },
    {
      dialects: [
        "pl+objective-cpp",
        "pl+cpp",
        "pl+carbon",
        "pl+cyclone",
        "pl+unified-parallel-c",
        "pl+split-c",
        "pl+cilk",
        "pl+c-star",
      ],
      implementations: [
        "pl+portable-c-compiler",
        "pl+gcc",
        "pl+clang",
        "pl+intel-cpp-compiler",
        "pl+cppbuilder",
        "pl+ms-visual-cpp",
        "pl+watcom-c-slashcpp",
      ],
      influences: ["pl+bcpl", "pl+fortran", "pl+algol", "pl+speedcoding", "pl+b", "pl+cpl", "pl+pl-slash"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+dennis-ritchie"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+c99",
    "C99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influences: ["pl+cpp"] },
  );
}
