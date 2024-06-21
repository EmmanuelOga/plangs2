import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+F-Sharp",
    "F#",
    {
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
    },
    {
      dialects: ["pl+ML"],
      influenced: [
        "pl+Idris",
        "pl+Standard-ML",
        "pl+C-Plus-Plus",
        "pl+Erlang",
        "pl+Flix",
        "pl+OCaml",
        "pl+ML",
        "pl+ArkTS",
        "pl+F-Star",
        "pl+LiveScript",
        "pl+Scala",
        "pl+Elm",
        "pl+TypeScript",
        "pl+Python",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Factor",
    "Factor",
    {
      name: "Factor",
      websites: [
        { kind: "wikipedia", title: "Factor", href: "https://en.wikipedia.org/wiki/Factor_(programming_language)" },
        { kind: "homepage", title: "factorcode.org", href: "http://factorcode.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/NewFactorLogo.png/200px-NewFactorLogo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "0.99", date: "2023-08-24", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+Forth", "pl+Joy", "pl+Self"],
      influences: ["pl+Joy", "pl+Forth", "pl+Lisp", "pl+Self"],
      licenses: ["lic+bsd"],
      paradigms: [
        "para+multi-paradigm",
        "para+concatenative",
        "para+stack-oriented",
        "para+functional",
        "para+objects",
      ],
      people: [["person+Slava-Pestov", "designer"]],
      platforms: ["platf+windows", "platf+macos", "platf+linux"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Fantom",
    "Fantom",
    {
      name: "Fantom",
      websites: [
        { kind: "wikipedia", title: "Fantom", href: "https://en.wikipedia.org/wiki/Fantom_(programming_language)" },
        { kind: "homepage", title: "www.fantom.org", href: "http://www.fantom.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fantom-logo.png" }],
      references: {
        first_appeared: [{ href: "http://fantom.org/sidewalk/topic/355", title: "Blog post about history of Fantom" }],
        stable_release: [{ href: "https://www.fantom.org/forum/topic/2892", title: "Fantom" }],
        license: [{ href: "http://fantom.org/doc/docIntro/Faq.html", title: "FAQ of Fandoc language website" }],
      },
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "1.0.79", date: "2023-07-17", kind: "stable" },
      ],
      extensions: [".fan", ".fwt", ".pod"],
    },
    {
      influenced: ["pl+Java", "pl+Scala"],
      influences: ["pl+C-Sharp", "pl+Java", "pl+Scala", "pl+Ruby", "pl+Erlang"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi-paradigm"],
      people: [
        ["person+Brian-Frank", "designer"],
        ["person+Andy-Frank", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+FAUST",
    "FAUST",
    {
      name: "FAUST",
      websites: [
        { kind: "wikipedia", title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)" },
        { kind: "homepage", title: "faust.grame.fr", href: "http://faust.grame.fr" },
      ],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "2.60.3", date: "2023-06-14", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/grame-cncm/faust/releases", title: "Releases · grame-cncm/faust · GitHub" },
        ],
      },
    },
    { licenses: ["lic+gpl"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Flix",
    "Flix",
    {
      name: "Flix",
      websites: [
        { kind: "wikipedia", title: "Flix", href: "https://en.wikipedia.org/wiki/Flix_(programming_language)" },
        { kind: "homepage", title: "flix.dev", href: "https://flix.dev/" },
      ],
      references: {
        license: [{ href: "https://github.com/flix/flix/blob/master/LICENSE.md", title: "Apache License 2.0" }],
      },
      extensions: [],
    },
    {
      influenced: ["pl+Scala"],
      influences: ["pl+F-Sharp", "pl+Go", "pl+Haskell", "pl+OCaml", "pl+Scala"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+logic"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Forth",
    "Forth",
    {
      name: "Forth",
      websites: [
        { kind: "wikipedia", title: "Forth", href: "https://en.wikipedia.org/wiki/Forth_(programming_language)" },
        { kind: "homepage", title: "forth-standard.org", href: "https://forth-standard.org" },
      ],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
    },
    {
      implementations: ["pl+Gforth"],
      influenced: ["pl+Lisp", "pl+RPL", "pl+STOIC", "pl+Joy", "pl+Befunge", "pl+Factor", "pl+Rebol"],
      influences: ["pl+Bitcoin-Script", "pl+Factor", "pl+Joy", "pl+RPL", "pl+Rebol", "pl+STOIC"],
      paradigms: ["para+concatenative", "para+stack-oriented", "para+imperative", "para+reflective"],
      people: [["person+Charles-H-Moore", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Fortran",
    "Fortran",
    {
      name: "Fortran",
      websites: [
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran" },
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran_95" },
        { kind: "homepage", title: "fortran-lang.org", href: "https://fortran-lang.org" },
      ],
      releases: [
        { version: "unknown", date: "1957-01-01", kind: "first" },
        { version: "unknown", date: "2023-11-17", kind: "stable" },
      ],
      extensions: [".f90", ".f", ".for"],
      references: {
        influenced: [
          {
            href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
            title: "Chapel spec (Acknowledgements)",
          },
        ],
      },
    },
    {
      implementations: [
        "pl+Absoft",
        "pl+Cray",
        "pl+GFortran",
        "pl+G95",
        "pl+IBM",
        "pl+Intel",
        "pl+Hitachi",
        "pl+Numerical-Algorithms-Group",
        "pl+Open-Watcom",
        "pl+PathScale",
        "pl+PGI",
        "pl+Silverfrost",
        "pl+Oracle-Solaris-Studio",
      ],
      influenced: [
        "pl+Coral-66",
        "pl+SISAL",
        "pl+Chapel",
        "pl+MATLAB-(programming-language)MATLAB-(software)",
        "pl+PL-SlashI",
        "pl+CMS-2",
        "pl+S",
        "pl+DIBOL",
        "pl+DOPE-(Dartmouth-Oversimplified-Programming-Experiment)",
        "pl+Ratfor",
        "pl+Speedcoding",
        "pl+Verilog",
        "pl+Fortress",
      ],
      influences: [
        "pl+Speedcoding",
        "pl+ALGOL-58",
        "pl+BASIC",
        "pl+C",
        "pl+Chapel",
        "pl+CMS-2",
        "pl+DOPE",
        "pl+Fortress",
        "pl+MATLAB",
        "pl+PL-SlashI",
        "pl+PACT-I",
        "pl+MUMPS",
        "pl+IDL",
        "pl+Ratfor",
      ],
      paradigms: [
        "para+multi-paradigm",
        "para+structured",
        "para+imperative",
        "para+objects",
        "para+generic",
        "para+array",
      ],
      people: [["person+John-Backus", "designer"]],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+manifest"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+FORTRAN",
    "FORTRAN",
    {
      name: "FORTRAN",
      websites: [
        { kind: "wikipedia", title: "FORTRAN", href: "https://en.wikipedia.org/wiki/FORTRAN" },
        { kind: "wikipedia", title: "FORTRAN", href: "https://en.wikipedia.org/wiki/Fortran" },
      ],
    },
    { influenced: ["pl+Wolfram-Language", "pl+Dartmouth-BASIC", "pl+ALGOL-58", "pl+C"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+FreeBASIC",
    "FreeBASIC",
    {
      name: "FreeBASIC",
      websites: [
        { kind: "wikipedia", title: "FreeBASIC", href: "https://en.wikipedia.org/wiki/FreeBASIC" },
        { kind: "homepage", title: "www.freebasic.net", href: "http://www.freebasic.net" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif" },
      ],
      references: { designed_by: [{ href: "https://www.freebasic.net/about.html", title: "freeBASIC about page" }] },
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "1.10.1", date: "2023-12-25", kind: "stable" },
      ],
    },
    {
      influenced: ["pl+QBasic"],
      influences: ["pl+QuickBASIC", "pl+C"],
      licenses: ["lic+gnu-gpl-2-plus", "lic+gnu-lgpl-2-plus"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+Andre-Victor", "designer"]],
      platforms: ["platf+dos", "platf+bsd", "platf+linux", "platf+windows"],
      typeSystems: ["tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Futhark",
    "Futhark",
    {
      name: "Futhark",
      websites: [
        { kind: "wikipedia", title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)" },
        { kind: "homepage", title: "futhark-lang.org", href: "http://futhark-lang.org" },
      ],
      references: { developer: [{ href: "https://futhark-lang.org/license.html", title: "License" }] },
      releases: [{ version: "unknown", date: "2014-01-01", kind: "first" }],
    },
    {
      influences: ["pl+APL", "pl+Haskell", "pl+NESL", "pl+Standard-ML"],
      licenses: ["lic+isc"],
      paradigms: ["para+array", "para+functional"],
      people: [
        ["person+Troels-Henriksen", "designer"],
        ["person+Cosmin-Oancea", "designer"],
        ["person+Martin-Elsman", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness", "tsys+dependent"],
    },
  );
}
