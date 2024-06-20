import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+V", "V", {
    name: "V",
    websites: [
      {
        kind: "wikipedia",
        title: "V",
        href: "https://en.wikipedia.org/wiki/V_(programming_language)",
      },
      { kind: "homepage", title: "vlang.io", href: "http://vlang.io" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg" },
    ],
    references: {
      designed_by: [{ href: "https://github.com/medvednikov", title: "Creator of V" }],
      first_appeared: [
        { href: "https://github.com/vlang/v/releases/tag/v0.0.12", title: "First public release" },
      ],
      stable_release: [
        { href: "https://github.com/vlang/v/releases/tag/0.4.5", title: "Release 0.4.5" },
      ],
    },
    releases: [
      { version: "unknown", date: "2019-06-20", kind: "first" },
      { version: "0.4.5", date: "2024-01-01", kind: "stable" },
    ],
    extensions: [".v", ".vsh"],
    people: [["person+Alexander-Medvednikov", "designer"]],
    licenses: ["lic+mit"],
    paradigms: [
      "para+multi-paradigm",
      "para+functional",
      "para+imperative",
      "para+structured",
      "para+concurrent",
    ],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    platforms: ["platf+x86-64", "platf+linux", "platf+macos", "platf+windows", "platf+bsd"],
    influences: ["pl+Go", "pl+Kotlin", "pl+Oberon", "pl+Python", "pl+Rust", "pl+Swift"],
    influenced: ["pl+Rust"],
  });

  lb.define("pl+Vala", "Vala", {
    name: "Vala",
    websites: [
      {
        kind: "wikipedia",
        title: "Vala",
        href: "https://en.wikipedia.org/wiki/Vala_(programming_language)",
      },
      { kind: "homepage", title: "vala.dev", href: "https://vala.dev" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg" },
    ],
    releases: [
      { version: "unknown", date: "2006-01-01", kind: "first" },
      { version: "0.57.0", date: "2023-01-01", kind: "stable" },
    ],
    extensions: [".vala", ".vapi"],
    people: [
      ["person+Jurg-Billeter", "designer"],
      ["person+Raffaele-Sandrini", "designer"],
      ["person+Rico-Tzschichholz", "designer"],
    ],
    licenses: ["lic+lgpl-2.1-plus"],
    paradigms: ["para+multi-paradigm", "para+imperative", "para+structured", "para+objects"],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred", "tsys+structural"],
    platforms: ["platf+cross-platform", "platf+glib"],
    influences: ["pl+C", "pl+C-Plus-Plus", "pl+C-Sharp", "pl+D", "pl+Java", "pl+Boo"],
    influenced: ["pl+Java", "pl+C", "pl+Boo", "pl+D-programming-language"],
  });

  lb.define("pl+Verilog", "Verilog", {
    name: "Verilog",
    websites: [
      { kind: "wikipedia", title: "Verilog", href: "https://en.wikipedia.org/wiki/Verilog" },
      {
        kind: "homepage",
        title: "https://ieeexplore.ieee.org/document/10458102",
        href: "https://ieeexplore.ieee.org/document/10458102",
      },
    ],
    releases: [
      { version: "unknown", date: "1984-01-01", kind: "first" },
      { version: "unknown", date: "2023-12-06", kind: "stable" },
    ],
    extensions: [".v"],
    people: [
      ["person+Prabhu-Goel", "designer"],
      ["person+Phil-Moorby", "designer"],
    ],
    paradigms: ["para+structured"],
    typeSystems: ["tsys+static", "tsys+weak"],
    influences: ["pl+Pascal", "pl+Ada", "pl+C", "pl+Fortran", "pl+SystemVerilog"],
    influenced: ["pl+SystemVerilog", "pl+C"],
  });

  lb.define("pl+Verse", "Verse", {
    name: "Verse",
    websites: [
      {
        kind: "wikipedia",
        title: "Verse",
        href: "https://en.wikipedia.org/wiki/Verse_(programming_language)",
      },
      {
        kind: "homepage",
        title: "dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
        href: "https://dev.epicgames.com/documentation/en-us/uefn/verse-language-reference",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Verse_Programming_Language_Logo.jpeg/160px-Verse_Programming_Language_Logo.jpeg",
      },
    ],
    releases: [{ version: "unknown", date: "2023-01-01", kind: "first" }],
    people: [
      ["person+Simon-Peyton-Jones", "designer"],
      ["person+Tim-Sweeney", "designer"],
      ["person+Lennart-Augustsson", "designer"],
      ["person+Guy-Steele", "designer"],
    ],
    paradigms: ["para+objects"],
    typeSystems: ["tsys+strong"],
    implementations: ["pl+UEFN", "pl+Visual-Studio-Code"],
    influences: [
      "pl+Functional-logic-programming",
      "pl+Object-oriented-programming",
      "pl+Lambda-calculus",
    ],
  });

  lb.define("pl+VHDL", "VHDL", {
    name: "VHDL",
    websites: [
      { kind: "wikipedia", title: "VHDL", href: "https://en.wikipedia.org/wiki/VHDL" },
      { kind: "homepage", title: "IEEE VASG", href: "https://opensource.ieee.org/vasg" },
    ],
    releases: [
      { version: "unknown", date: "1980-01-01", kind: "first" },
      { version: "unknown", date: "2019-12-23", kind: "stable" },
    ],
    extensions: [".vhd"],
    references: {
      influenced_by: [
        {
          href: "https://books.google.com/books?id=IxZqlbYMJCIC&q=Ada",
          title: "The VHDL Handbook",
        },
      ],
    },
    paradigms: ["para+concurrent", "para+reactive", "para+dataflow"],
    typeSystems: ["tsys+strong"],
    influences: ["pl+Ada", "pl+Pascal"],
    influenced: ["pl+Ada", "pl+SystemVerilog", "pl+Pascal"],
  });

  lb.define("pl+Visual-Basic", "Visual Basic", {
    name: "Visual Basic",
    websites: [
      {
        kind: "wikipedia",
        title: "Visual Basic",
        href: "https://en.wikipedia.org/wiki/Visual_Basic",
      },
      {
        kind: "wikipedia",
        title: "Visual Basic",
        href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)",
      },
      {
        kind: "homepage",
        title:
          "learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
        href: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
      },
    ],
    releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    paradigms: ["para+objects", "para+event-driven"],
    typeSystems: ["tsys+static", "tsys+strong"],
    platforms: ["platf+windows", "platf+dos"],
    implementations: ["pl+Microsoft-Visual-Studio"],
    influences: [
      "pl+BASIC",
      "pl+Microsoft-BASIC",
      "pl+QBasic",
      "pl+Visual-Basic-.NET",
      "pl+Visual-Basic-for-Applications",
      "pl+Windows-Forms",
      "pl+Gambas",
      "pl+Xojo",
      "pl+Basic4ppc",
      "pl+Basic4android",
      "pl+NS-Basic",
    ],
    influenced: ["pl+B4x", "pl+Visual-Basic-for-Applications", "pl+Gambas", "pl+BASIC"],
  });

  lb.define("pl+Visual-Basic-.NET", "Visual Basic .NET", {
    name: "Visual Basic .NET",
    websites: [
      {
        kind: "wikipedia",
        title: "Visual Basic .NET",
        href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET",
      },
    ],
    influenced: ["pl+Visual-Basic", "pl+Microsoft-Small-Basic", "pl+BASIC"],
  });

  lb.define("pl+Visual-C-Plus-Plus", "Visual C++", {
    name: "Visual C++",
    websites: [
      {
        kind: "wikipedia",
        title: "Visual C++",
        href: "https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B",
      },
      {
        kind: "homepage",
        title: "docs.microsoft.com/en-us/cpp/",
        href: "https://docs.microsoft.com/en-us/cpp/",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg",
      },
    ],
    releases: [{ version: "14.40.33810", date: "3381-01-01", kind: "stable" }],
    references: {
      written_in: [
        {
          href: "https://archive.today/20120530/http://www.lextrait.com/Vincent/implementations.html",
          title: "The Programming Languages Beacon, v10.0",
        },
      ],
    },
    licenses: ["lic+trialware", "lic+freeware"],
    platforms: ["platf+ia-32", "platf+x86-64", "platf+arm"],
  });
}
