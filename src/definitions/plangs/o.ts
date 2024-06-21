import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+oberon",
    "Oberon",
    {
      name: "Oberon",
      websites: [
        { kind: "wikipedia", title: "Oberon", href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)" },
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
    },
    {
      dialects: ["pl+oberon-2", "pl+obliq", "pl+active-oberon"],
      influenced: [
        "pl+nim",
        "pl+java",
        "pl+component-pascal",
        "pl+modula-2",
        "pl+oberon-2",
        "pl+go",
        "pl+object-oberon",
        "pl+obliq",
        "pl+modula-3",
        "pl+pascal",
        "pl+v",
        "pl+zonnon",
        "pl+active-oberon",
      ],
      influences: [
        "pl+modula-2",
        "pl+oberon-2",
        "pl+active-oberon",
        "pl+component-pascal",
        "pl+zonnon",
        "pl+go",
        "pl+v-(vlang)",
        "pl+nim",
      ],
      paradigms: ["para+imperative", "para+structured", "para+modular", "para+objects"],
      platforms: [
        "platf+arm",
        "platf+ia-32",
        "platf+x86-64",
        "platf+windows",
        "platf+linux",
        "platf+atari",
        "platf+amiga",
      ],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+objective-c",
    "Objective-C",
    {
      name: "Objective-C",
      websites: [
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C%2B%2B" },
        {
          kind: "homepage",
          title: "developer.apple.com",
          href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
        },
        { kind: "wikipedia", title: "Objective-C", href: "https://en.wikipedia.org/wiki/Objective-C" },
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
      implementations: ["pl+clang", "pl+gcc"],
      influenced: ["pl+java", "pl+nu", "pl+cobra", "pl+arkts", "pl+c", "pl+logtalk", "pl+smalltalk"],
      influences: ["pl+c", "pl+smalltalk", "pl+groovy", "pl+java", "pl+nu", "pl+swift"],
      people: [["person+brad-cox", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+ocaml",
    "OCaml",
    {
      name: "OCaml",
      websites: [
        { kind: "wikipedia", title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml" },
        { kind: "homepage", title: "ocaml.org", href: "https://ocaml.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg" }],
      references: {
        paradigms: [{ href: "https://ocaml.org/learn/tutorials/modules.html", title: "Modules" }],
        first_appeared: [
          { href: "https://sympa.inria.fr/sympa/arc/caml-list/1996-05/msg00003.html", title: "Objective Caml 1.00" },
        ],
        stable_release: [{ href: "https://ocaml.org/releases/5.2.0", title: "OCaml 5.2.0 Release Notes" }],
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "5.2.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".ml", ".mli"],
    },
    {
      dialects: ["pl+reason", "pl+ml", "pl+f-star", "pl+ats"],
      implementations: ["pl+c"],
      influenced: [
        "pl+haxe",
        "pl+standard-ml",
        "pl+boomerang",
        "pl+caml",
        "pl+flix",
        "pl+reason",
        "pl+ml",
        "pl+f-star",
        "pl+modula-3",
        "pl+scala",
        "pl+opa",
        "pl+rust",
        "pl+elm",
        "pl+hack",
        "pl+gleam",
        "pl+ats",
      ],
      influences: [
        "pl+c",
        "pl+caml",
        "pl+modula-3",
        "pl+pascal",
        "pl+standard-ml",
        "pl+ats",
        "pl+coq",
        "pl+elm",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haxe",
        "pl+opa",
        "pl+rust",
        "pl+scala",
      ],
      licenses: ["lic+lgpl-2.1"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+modular", "para+objects"],
      people: [
        ["person+xavier-leroy", "designer"],
        ["person+damien-doligez", "designer"],
      ],
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
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define("pl+openacc", "OpenACC", {
    name: "OpenACC",
    websites: [
      { kind: "wikipedia", title: "OpenACC", href: "https://en.wikipedia.org/wiki/OpenACC" },
      { kind: "homepage", title: "www.openacc.org", href: "https://www.openacc.org/" },
    ],
    releases: [{ version: "3.2", date: "2021-01-01", kind: "stable" }],
  });

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+openmp",
    "OpenMP",
    {
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
    },
    { influenced: ["pl+cilkopencilkcilk-plus"] },
  );
}
