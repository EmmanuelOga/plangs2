import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+f-sharp",
    "F#",
    {
      name: "F#",
      websites: [
        { kind: "wikipedia", title: "F#", href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)" },
      ],
    },
    {
      dialects: ["pl+ml"],
      influenced: [
        "pl+idris",
        "pl+standard-ml",
        "pl+c-plus-plus",
        "pl+erlang",
        "pl+flix",
        "pl+ocaml",
        "pl+ml",
        "pl+arkts",
        "pl+f-star",
        "pl+livescript",
        "pl+scala",
        "pl+elm",
        "pl+typescript",
        "pl+python",
      ],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+factor",
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
      influenced: ["pl+forth", "pl+joy", "pl+self"],
      influences: ["pl+joy", "pl+forth", "pl+lisp", "pl+self"],
      licenses: ["lic+bsd"],
      paradigms: [
        "para+multi-paradigm",
        "para+concatenative",
        "para+stack-oriented",
        "para+functional",
        "para+objects",
      ],
      people: [["person+slava-pestov", "designer"]],
      platforms: ["platf+windows", "platf+macos", "platf+linux"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+fantom",
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
      influenced: ["pl+java", "pl+scala"],
      influences: ["pl+c-sharp", "pl+java", "pl+scala", "pl+ruby", "pl+erlang"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi-paradigm"],
      people: [
        ["person+brian-frank", "designer"],
        ["person+andy-frank", "designer"],
      ],
      typeSystems: ["tsys+static", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+faust",
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
    "pl+flix",
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
      influenced: ["pl+scala"],
      influences: ["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"],
      licenses: ["lic+apache-2"],
      paradigms: ["para+multi-paradigm", "para+functional", "para+imperative", "para+logic"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+forth",
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
      implementations: ["pl+gforth"],
      influenced: ["pl+lisp", "pl+rpl", "pl+stoic", "pl+joy", "pl+befunge", "pl+factor", "pl+rebol"],
      influences: ["pl+bitcoin-script", "pl+factor", "pl+joy", "pl+rpl", "pl+rebol", "pl+stoic"],
      paradigms: ["para+concatenative", "para+stack-oriented", "para+imperative", "para+reflective"],
      people: [["person+charles-h-moore", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+fortran",
    "Fortran",
    {
      name: "Fortran",
      websites: [
        { kind: "wikipedia", title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran" },
        { kind: "wikipedia", title: "FORTRAN", href: "https://en.wikipedia.org/wiki/FORTRAN" },
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
        "pl+absoft",
        "pl+cray",
        "pl+gfortran",
        "pl+g95",
        "pl+ibm",
        "pl+intel",
        "pl+hitachi",
        "pl+numerical-algorithms-group",
        "pl+open-watcom",
        "pl+pathscale",
        "pl+pgi",
        "pl+silverfrost",
        "pl+oracle-solaris-studio",
      ],
      influenced: [
        "pl+coral-66",
        "pl+sisal",
        "pl+wolfram-language",
        "pl+dartmouth-basic",
        "pl+chapel",
        "pl+matlab-(programming-language)matlab-(software)",
        "pl+pl-slashi",
        "pl+cms-2",
        "pl+s",
        "pl+algol-58",
        "pl+dibol",
        "pl+dope-(dartmouth-oversimplified-programming-experiment)",
        "pl+ratfor",
        "pl+speedcoding",
        "pl+c",
        "pl+verilog",
        "pl+fortress",
      ],
      influences: [
        "pl+speedcoding",
        "pl+algol-58",
        "pl+basic",
        "pl+c",
        "pl+chapel",
        "pl+cms-2",
        "pl+dope",
        "pl+fortress",
        "pl+matlab",
        "pl+pl-slashi",
        "pl+pact-i",
        "pl+mumps",
        "pl+idl",
        "pl+ratfor",
      ],
      paradigms: [
        "para+multi-paradigm",
        "para+structured",
        "para+imperative",
        "para+objects",
        "para+generic",
        "para+array",
      ],
      people: [["person+john-backus", "designer"]],
      typeSystems: ["tsys+strong", "tsys+static", "tsys+manifest"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+freebasic",
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
      influenced: ["pl+qbasic"],
      influences: ["pl+quickbasic", "pl+c"],
      licenses: ["lic+gnu-gpl-2-plus", "lic+gnu-lgpl-2-plus"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+andre-victor", "designer"]],
      platforms: ["platf+dos", "platf+bsd", "platf+linux", "platf+windows"],
      typeSystems: ["tsys+static"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+futhark",
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
      influences: ["pl+apl", "pl+haskell", "pl+nesl", "pl+standard-ml"],
      licenses: ["lic+isc"],
      paradigms: ["para+array", "para+functional"],
      people: [
        ["person+troels-henriksen", "designer"],
        ["person+cosmin-oancea", "designer"],
        ["person+martin-elsman", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness", "tsys+dependent"],
    },
  );
}
