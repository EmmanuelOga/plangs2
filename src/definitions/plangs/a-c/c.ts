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
        { version: "unknown", date: "2024-02-21", kind: "preview" },
      ],
      references: {
        preview_release: [
          {
            href: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3221.htm",
            title: "N3221 - Editor's Report, Post January 2024 Strasbourg France Meeting",
          },
        ],
        influenced: [
          {
            href: "https://web.archive.org/web/20131106064022/http://cs.anu.edu.au/courses/ENGN3213/lectures/lecture6_VERILOG_2010.pdf",
            title: "Verilog HDL (and C)",
          },
        ],
      },
      extensions: [".c", ".h"],
    },
    {
      dialects: [
        "pl+c-star",
        "pl+carbon",
        "pl+cilk",
        "pl+cpp",
        "pl+cyclone",
        "pl+objective-cpp",
        "pl+split-c",
        "pl+unified-parallel-c",
      ],
      implementations: [
        "pl+clang",
        "pl+cppbuilder",
        "pl+gcc",
        "pl+intel-cpp-compiler",
        "pl+ms-visual-cpp",
        "pl+portable-c-compiler",
        "pl+watcom-c-slashcpp",
      ],
      influences: [
        "pl+algol",
        "pl+algol-60",
        "pl+algol-68",
        "pl+b",
        "pl+bcpl",
        "pl+cpl",
        "pl+fortran",
        "pl+fortran-95",
        "pl+pl-slashi",
        "pl+speedcoding",
      ],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [["person+dennis-ritchie", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+c99",
    "C99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influences: ["pl+cpp"] },
  );
}
