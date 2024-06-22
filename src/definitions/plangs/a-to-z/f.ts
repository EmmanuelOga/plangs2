import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
        "pl+arkts",
        "pl+c-plus-plus",
        "pl+elm",
        "pl+erlang",
        "pl+f-star",
        "pl+flix",
        "pl+idris",
        "pl+livescript",
        "pl+ml",
        "pl+ocaml",
        "pl+python",
        "pl+scala",
        "pl+standard-ml",
        "pl+typescript",
      ],
    },
  );

  /**/

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
      influences: ["pl+forth", "pl+joy", "pl+lisp", "pl+self"],
      licenses: ["lic+bsd"],
      paradigms: [
        "para+concatenative",
        "para+functional",
        "para+multi-paradigm",
        "para+objects",
        "para+stack-oriented",
      ],
      people: [["person+slava-pestov", "designer"]],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+c-sharp", "pl+erlang", "pl+java", "pl+ruby", "pl+scala"],
      licenses: ["lic+academic-free"],
      paradigms: ["para+multi-paradigm"],
      people: [
        ["person+andy-frank", "designer"],
        ["person+brian-frank", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );

  /**/

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

  /**/

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
      paradigms: ["para+functional", "para+imperative", "para+logic", "para+multi-paradigm"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );

  /**/

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
      influenced: ["pl+befunge", "pl+factor", "pl+joy", "pl+lisp", "pl+rebol", "pl+rpl", "pl+stoic"],
      influences: ["pl+bitcoin-script", "pl+factor", "pl+joy", "pl+rebol", "pl+rpl", "pl+stoic"],
      paradigms: ["para+concatenative", "para+imperative", "para+reflective", "para+stack-oriented"],
      people: [["person+charles-h-moore", "designer"]],
    },
  );

  /**/

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
        "pl+g95",
        "pl+gfortran",
        "pl+hitachi",
        "pl+ibm",
        "pl+intel",
        "pl+numerical-algorithms-group",
        "pl+open-watcom",
        "pl+oracle-solaris-studio",
        "pl+pathscale",
        "pl+pgi",
        "pl+silverfrost",
      ],
      influenced: [
        "pl+algol-58",
        "pl+c",
        "pl+chapel",
        "pl+cms-2",
        "pl+coral-66",
        "pl+dartmouth-basic",
        "pl+dibol",
        "pl+dope-(dartmouth-oversimplified-programming-experiment)",
        "pl+fortress",
        "pl+matlab-(programming-language)matlab-(software)",
        "pl+pl-slashi",
        "pl+ratfor",
        "pl+s",
        "pl+sisal",
        "pl+speedcoding",
        "pl+verilog",
        "pl+wolfram-language",
      ],
      influences: [
        "pl+algol-58",
        "pl+basic",
        "pl+c",
        "pl+chapel",
        "pl+cms-2",
        "pl+dope",
        "pl+fortress",
        "pl+idl",
        "pl+matlab",
        "pl+mumps",
        "pl+pact-i",
        "pl+pl-slashi",
        "pl+ratfor",
        "pl+speedcoding",
      ],
      paradigms: [
        "para+array",
        "para+generic",
        "para+imperative",
        "para+multi-paradigm",
        "para+objects",
        "para+structured",
      ],
      people: [["person+john-backus", "designer"]],
      typeSystems: ["tsys+manifest", "tsys+static", "tsys+strong"],
    },
  );

  /**/

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
      influences: ["pl+c", "pl+quickbasic"],
      licenses: ["lic+gnu-lgpl-2-plus", "lic+gpl-2-plus"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+andre-victor", "designer"]],
      platforms: ["platf+bsd", "platf+dos", "platf+linux", "platf+windows"],
      typeSystems: ["tsys+static"],
    },
  );

  /**/

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
        ["person+cosmin-oancea", "designer"],
        ["person+martin-elsman", "designer"],
        ["person+troels-henriksen", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness"],
    },
  );

  /**/
}
