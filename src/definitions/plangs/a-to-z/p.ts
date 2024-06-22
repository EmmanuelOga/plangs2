import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+p4",
    "P4",
    {
      name: "P4",
      websites: [
        { kind: "wikipedia", title: "P4", href: "https://en.wikipedia.org/wiki/P4_(programming_language)" },
        { kind: "homepage", title: "p4.org", href: "https://p4.org" },
      ],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "1.2.2", date: "2021-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://p4.org/p4-spec/docs/P4-16-v1.2.2.html", title: "P4 Language and Related Specifications" },
        ],
      },
      extensions: [".p4"],
    },
    { licenses: ["lic+apache"], paradigms: ["para+compiled", "para+domain-specific", "para+imperative"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pari-slashgp",
    "PARI/GP",
    {
      name: "PARI/GP",
      websites: [
        { kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" },
        { kind: "homepage", title: "pari.math.u-bordeaux.fr", href: "http://pari.math.u-bordeaux.fr/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      references: {
        stable_release: [
          {
            href: "https://pari.math.u-bordeaux.fr/archives/pari-announce-24/msg00000.html",
            title: "pari-2.15.5 (STABLE) released",
          },
        ],
      },
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], people: [["person+henri-cohen", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+peachpie",
    "PeachPie",
    {
      name: "PeachPie",
      websites: [
        { kind: "wikipedia", title: "PeachPie", href: "https://en.wikipedia.org/wiki/PeachPie" },
        { kind: "homepage", title: "www.peachpie.io", href: "http://www.peachpie.io" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peachpie-logo.png/150px-Peachpie-logo.png",
        },
      ],
      references: {
        initial_release: [
          { href: "https://github.com/peachpiecompiler/peachpie/releases", title: "PeachPie Compiler pre-release" },
        ],
        written_in: [{ href: "https://github.com/peachpiecompiler/peachpie/releases", title: "PeachPie repository" }],
        license: [
          {
            href: "https://github.com/peachpiecompiler/peachpie/blob/master/LICENSE.txt",
            title: "iolevel/peachpie: License",
          },
        ],
      },
      releases: [{ version: "unknown", date: "2016-07-18", kind: "first" }],
    },
    { licenses: ["lic+apache-2"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pharo",
    "Pharo",
    {
      name: "Pharo",
      websites: [
        { kind: "wikipedia", title: "Pharo", href: "https://en.wikipedia.org/wiki/Pharo" },
        { kind: "homepage", title: "pharo.org", href: "http://pharo.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg" }],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "12.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://pharo.org/news/2024-04-26-pharo12-released.html",
            title: "https://pharo.org/news/2024-04-26-pharo12-released.html",
          },
        ],
        license: [{ href: "https://pharo.org/license", title: "Pharo license information" }],
      },
    },
    {
      dialects: ["pl+squeak"],
      implementations: ["pl+smalltalk"],
      influences: ["pl+smalltalk", "pl+squeak"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+objects"],
      platforms: ["platf+arm", "platf+ia-32", "platf+linux", "platf+macos", "platf+windows", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+picolisp",
    "PicoLisp",
    {
      name: "PicoLisp",
      websites: [
        { kind: "wikipedia", title: "Picolisp", href: "https://en.wikipedia.org/wiki/Picolisp" },
        { kind: "homepage", title: "picolisp.com", href: "http://picolisp.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
      extensions: [".l"],
      references: { dialects: [{ href: "https://software-lab.de/down.html", title: "PicoLisp Download" }] },
    },
    {
      dialects: ["pl+lisp"],
      implementations: ["pl+llvm"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+declarative",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+objects",
        "para+reflective",
      ],
      people: [["person+alexander-burger", "designer"]],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pl-slashpgsql",
    "PL/pgSQL",
    {
      name: "PL/pgSQL",
      websites: [
        { kind: "wikipedia", title: "PL/pgSQL", href: "https://en.wikipedia.org/wiki/PL/pgSQL" },
        {
          kind: "homepage",
          title: "www.postgresql.org/docs/current/static/plpgsql.html",
          href: "https://www.postgresql.org/docs/current/static/plpgsql.html",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }],
      releases: [{ version: "unknown", date: "1998-10-30", kind: "first" }],
    },
    { influenced: ["pl+ada"], influences: ["pl+ada", "pl+pl-slashsql"], people: [["person+jan-wieck", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+postscript",
    "PostScript",
    {
      name: "PostScript",
      websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" },
      ],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
      references: { influenced_by: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] },
      extensions: [],
    },
    {
      implementations: ["pl+ghostscript", "pl+trueimage"],
      influenced: ["pl+mesa[1]"],
      influences: ["pl+interpress", "pl+lisp", "pl+mesa", "pl+pdf"],
      paradigms: ["para+concatenative", "para+imperative", "para+multi-paradigm", "para+stack-oriented"],
      people: [
        ["person+bill-paxton", "designer"],
        ["person+chuck-geschke", "designer"],
        ["person+john-warnock", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pov-ray",
    "POV-Ray",
    {
      name: "POV-Ray",
      websites: [
        { kind: "wikipedia", title: "POV-Ray", href: "https://en.wikipedia.org/wiki/POV-Ray" },
        { kind: "homepage", title: "www.povray.org", href: "https://www.povray.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Povray_logo_sphere.png/120px-Povray_logo_sphere.png",
        },
      ],
      references: {
        initial_release: [
          {
            href: "http://www.povray.org/documentation/view/3.6.1/10/",
            title: "POV-Ray: Documentation: 1.1.5.3 A Historic 'Version History'",
          },
          { href: "http://www.povray.org/news/index.php#323", title: "POV-Ray: News" },
        ],
        stable_release: [{ href: "https://github.com/POV-Ray/povray/releases/tag/v3.7.0.0", title: "Release 3.7.0.0" }],
        preview_release: [
          {
            href: "https://github.com/POV-Ray/povray/releases/tag/v3.8.0-beta.2",
            title: "POV-Ray Beta Release v3.8.0-beta.2",
          },
        ],
        license: [{ href: "http://www.povray.org/povlegal.html", title: "POV-Ray License" }],
      },
      releases: [
        { version: "unknown", date: "1991-07-29", kind: "first" },
        { version: "3.7.0.0", date: "2013-01-01", kind: "stable" },
        { version: "3.8.0", date: "2021-08-09", kind: "preview" },
      ],
    },
    { licenses: ["lic+agpl-3"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+powerbasic",
    "PowerBASIC",
    {
      name: "PowerBASIC",
      websites: [
        { kind: "wikipedia", title: "PowerBASIC", href: "https://en.wikipedia.org/wiki/PowerBASIC" },
        { kind: "homepage", title: "www.powerbasic.com", href: "https://www.powerbasic.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PowerBasic-screen-shot.png/300px-PowerBasic-screen-shot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1989-01-01", kind: "first" },
        { version: "10.0", date: "2011-05-04", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://www.powerbasic.com/support/pbforums/showthread.php?t=047454",
            title: "Release of PowerBASIC 10.0 Compiler for Windows",
          },
        ],
      },
    },
    { influences: ["pl+turbo-basic"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+powershell",
    "PowerShell",
    {
      name: "PowerShell",
      websites: [
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/PowerShell" },
        { kind: "wikipedia", title: "PowerShell", href: "https://en.wikipedia.org/wiki/Windows_PowerShell" },
        { kind: "homepage", title: "microsoft.com/powershell", href: "https://microsoft.com/powershell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2006-11-14", kind: "first" },
        { version: "7.4.2", date: "2024-04-11", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/PowerShell/PowerShell/releases/tag/v7.4.2",
            title: "Release v7.4.2 Release of PowerShell · PowerShell/PowerShell",
          },
        ],
        license: [{ href: "https://github.com/PowerShell/PowerShell", title: "PowerShell for every system!" }],
        influenced_by: [
          {
            href: "https://blogs.msdn.microsoft.com/powershell/2008/05/25/powershell-and-wpf-wtf/",
            title: "PowerShell and WPF: WTF",
          },
        ],
      },
      extensions: [],
    },
    {
      implementations: ["pl+c-sharp"],
      influenced: ["pl+sql-(structured-query-language)", "pl+tcl"],
      influences: [
        "pl+c-sharp",
        "pl+chef",
        "pl+cl",
        "pl+dcl",
        "pl+ksh",
        "pl+perl",
        "pl+puppet",
        "pl+python",
        "pl+sql",
        "pl+tcl",
        "pl+tk",
      ],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+functional", "para+imperative", "para+objects", "para+pipeline", "para+reflective"],
      people: [["person+jeffrey-snover", "designer"]],
      platforms: ["platf+.net", "platf+centos", "platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+inferred", "tsys+safe", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+processing",
    "Processing",
    {
      name: "Processing",
      websites: [
        {
          kind: "wikipedia",
          title: "Processing",
          href: "https://en.wikipedia.org/wiki/Processing_(programming_language)",
        },
      ],
    },
    { influenced: ["pl+c", "pl+the-kojo-learning-environment"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+prolog",
    "Prolog",
    {
      name: "Prolog",
      websites: [
        { kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" },
        { kind: "homepage", title: "www.iso.org/standard/21413.html", href: "https://www.iso.org/standard/21413.html" },
        { kind: "homepage", title: "www.iso.org/standard/20775.html", href: "https://www.iso.org/standard/20775.html" },
      ],
      releases: [
        { version: "unknown", date: "1972-01-01", kind: "first" },
        { version: "unknown", date: "1995-01-01", kind: "stable" },
      ],
      extensions: [".pl", ".pro", ".P"],
    },
    {
      dialects: ["pl+datalog"],
      implementations: [
        "pl+b-prolog",
        "pl+ciao",
        "pl+eclipse",
        "pl+gnu-prolog",
        "pl+lpa-prolog",
        "pl+poplog",
        "pl+quintus-prolog",
        "pl+swi-prolog",
        "pl+xsb",
        "pl+yap",
      ],
      influenced: [
        "pl+alf",
        "pl+ciao",
        "pl+clojure",
        "pl+constraint-handling-rules-(chr)",
        "pl+curry",
        "pl+datalog",
        "pl+erlang",
        "pl+go-",
        "pl+logtalk",
        "pl+mdl",
        "pl+mercury",
        "pl+oz",
        "pl+planner",
        "pl+wolfram-language",
        "pl+xsb",
      ],
      influences: [
        "pl+chr",
        "pl+clojure",
        "pl+datalog",
        "pl+erlang",
        "pl+kl0",
        "pl+kl1",
        "pl+logtalk",
        "pl+mercury",
        "pl+oz",
        "pl+planner",
        "pl+strand",
        "pl+visual-prolog",
      ],
      paradigms: ["para+logic"],
      people: [["person+alain-colmerauer", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pure",
    "Pure",
    {
      name: "Pure",
      websites: [
        { kind: "wikipedia", title: "Pure", href: "https://en.wikipedia.org/wiki/Pure_(programming_language)" },
        { kind: "repository", title: "agraef.github.io/pure-lang/", href: "https://agraef.github.io/pure-lang/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "0.68", date: "2018-04-11", kind: "stable" },
      ],
    },
    {
      influences: ["pl+alice", "pl+haskell", "pl+lisp", "pl+matlab", "pl+q"],
      licenses: ["lic+gnu-lesser-gpl"],
      paradigms: ["para+declarative", "para+functional", "para+term-rewriting"],
      people: [["person+albert-graf", "designer"]],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+puredata",
    "PureData",
    {
      name: "PureData",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
    },
    { influenced: ["pl+lucid"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+purescript",
    "PureScript",
    {
      name: "PureScript",
      websites: [
        { kind: "wikipedia", title: "PureScript", href: "https://en.wikipedia.org/wiki/PureScript" },
        { kind: "homepage", title: "www.purescript.org", href: "https://www.purescript.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2013-01-01", kind: "first" },
        { version: "0.15.15", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        license: [
          { href: "https://github.com/purescript/purescript/blob/master/LICENSE", title: "purescript/purescript" },
        ],
      },
      extensions: [".purs"],
    },
    {
      influences: ["pl+haskell", "pl+javascript"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional"],
      people: [["person+phil-freeman", "designer"]],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pyomo",
    "Pyomo",
    {
      name: "Pyomo",
      websites: [
        { kind: "wikipedia", title: "Pyomo", href: "https://en.wikipedia.org/wiki/Pyomo" },
        { kind: "homepage", title: "www.pyomo.org", href: "https://www.pyomo.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Pyomo_Logo_Without_Text.png/121px-Pyomo_Logo_Without_Text.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "6.4.2", date: "2022-08-17", kind: "stable" },
      ],
      extensions: [".py"],
    },
    {
      influenced: ["pl+ampl"],
      influences: ["pl+ampl", "pl+general-algebraic-modeling-system", "pl+python"],
      licenses: ["lic+bsd"],
      people: [
        ["person+carl-laird", "designer"],
        ["person+david-woodruff", "designer"],
        ["person+gabriel-hackebeil", "designer"],
        ["person+jean-paul-watson", "designer"],
        ["person+john-siirola", "designer"],
        ["person+william-e-hart", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+macos", "platf+windows"],
    },
  );
}
