import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+Oberon", "Oberon", {
    name: "Oberon",
    websites: [
      {
        kind: "wikipedia",
        title: "Oberon",
        href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)",
      },
      { kind: "homepage", title: "projectoberon.net", href: "https://projectoberon.net" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
      },
    ],
    releases: [
      { version: "unknown", date: "1987-01-01", kind: "first" },
      { version: "unknown", date: "2020-03-06", kind: "stable" },
    ],
    paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
    typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    platforms: [
      "platf+arm",
      "platf+ia-32",
      "platf+x86-64",
      "platf+windows",
      "platf+linux",
      "platf+atari",
      "platf+amiga",
    ],
    dialects: ["pl+Oberon-2", "pl+Obliq", "pl+Active-Oberon"],
    influences: [
      "pl+Modula-2",
      "pl+Oberon-2",
      "pl+Active-Oberon",
      "pl+Component-Pascal",
      "pl+Zonnon",
      "pl+Go",
      "pl+V-(Vlang)",
      "pl+Nim",
    ],
    influenced: [
      "pl+Nim",
      "pl+Java",
      "pl+Component-Pascal",
      "pl+Modula-2",
      "pl+Oberon-2",
      "pl+Go",
      "pl+Object-Oberon",
      "pl+Obliq",
      "pl+Modula-3",
      "pl+Pascal",
      "pl+V",
      "pl+Zonnon",
      "pl+Active-Oberon",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Objective-C", "Objective-C", {
    name: "Objective-C",
    websites: [
      {
        kind: "wikipedia",
        title: "Objective-C",
        href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B",
      },
      {
        kind: "homepage",
        title: "developer.apple.com",
        href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
      },
      {
        kind: "wikipedia",
        title: "Objective-C",
        href: "https://en.wikipedia.org/wiki/Objective-C",
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
    people: [["person+Brad-Cox", "designer"]],
    typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
    platforms: ["platf+cross-platform"],
    implementations: ["pl+Clang", "pl+GCC"],
    influences: ["pl+C", "pl+Smalltalk", "pl+Groovy", "pl+Java", "pl+Nu", "pl+Swift"],
    influenced: ["pl+Java", "pl+Nu", "pl+Cobra", "pl+ArkTS", "pl+C", "pl+Logtalk", "pl+Smalltalk"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+OCaml", "OCaml", {
    name: "OCaml",
    websites: [
      { kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" },
      { kind: "homepage", title: "ocaml.org", href: "https://ocaml.org/" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" },
    ],
    references: {
      paradigms: [{ href: "https://ocaml.org/learn/tutorials/modules.html", title: "Modules" }],
      first_appeared: [
        {
          href: "https://sympa.inria.fr/sympa/arc/caml-list/1996-05/msg00003.html",
          title: "Objective Caml 1.00",
        },
      ],
      stable_release: [
        { href: "https://ocaml.org/releases/5.2.0", title: "OCaml 5.2.0 Release Notes" },
      ],
      influenced: [
        {
          href: "https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    },
    releases: [
      { version: "unknown", date: "1996-01-01", kind: "first" },
      { version: "5.2.0", date: "2024-01-01", kind: "stable" },
    ],
    extensions: [".ml", ".mli"],
    people: [
      ["person+Xavier-Leroy", "designer"],
      ["person+Damien-Doligez", "designer"],
    ],
    licenses: ["lic+lgpl-2.1"],
    paradigms: [
      "para+multi-paradigm",
      "para+functional",
      "para+imperative",
      "para+modular",
      "para+objects",
    ],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    platforms: [
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+risc-v",
      "platf+cross-platform",
      "platf+linux",
      "platf+unix",
      "platf+macos",
      "platf+windows",
    ],
    implementations: ["pl+C"],
    dialects: ["pl+Reason", "pl+ML", "pl+F-Star", "pl+ATS"],
    influences: [
      "pl+C",
      "pl+Caml",
      "pl+Modula-3",
      "pl+Pascal",
      "pl+Standard-ML",
      "pl+ATS",
      "pl+Coq",
      "pl+Elm",
      "pl+F-Sharp",
      "pl+F-Star",
      "pl+Haxe",
      "pl+Opa",
      "pl+Rust",
      "pl+Scala",
    ],
    influenced: [
      "pl+Haxe",
      "pl+Standard-ML",
      "pl+Boomerang",
      "pl+Caml",
      "pl+Flix",
      "pl+Reason",
      "pl+ML",
      "pl+F-Star",
      "pl+Modula-3",
      "pl+Scala",
      "pl+Opa",
      "pl+Rust",
      "pl+Elm",
      "pl+Hack",
      "pl+Gleam",
      "pl+ATS",
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+OpenACC", "OpenACC", {
    name: "OpenACC",
    websites: [
      { kind: "wikipedia", title: "OpenACC", href: "https://en.wikipedia.org/wiki/OpenACC" },
      { kind: "homepage", title: "www.openacc.org", href: "https://www.openacc.org/" },
    ],
    releases: [{ version: "3.2", date: "2021-01-01", kind: "stable" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+OpenMP", "OpenMP", {
    name: "OpenMP",
    websites: [
      { kind: "wikipedia", title: "OpenMP", href: "https://en.wikipedia.org/wiki/OpenMP" },
      { kind: "homepage", title: "openmp.org", href: "http://openmp.org" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
      },
    ],
    references: {
      original_authors: [
        {
          href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
          title: "About the OpenMP ARB and",
        },
      ],
      developers: [
        {
          href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
          title: "About the OpenMP ARB and",
        },
      ],
    },
    releases: [{ version: "5.2", date: "2021-01-01", kind: "stable" }],
    influenced: ["pl+CilkOpenCilkCilk-Plus"],
  });
}
