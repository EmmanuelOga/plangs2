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
    { licenses: ["lic+gnu-gpl"], people: [["person+henri-cohen", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+pascal",
    "Pascal",
    {
      name: "Pascal",
      websites: [
        { kind: "wikipedia", title: "Pascal", href: "https://en.wikipedia.org/wiki/Pascal_(programming_language)" },
      ],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
      references: {
        influenced: [
          {
            href: "https://web.archive.org/web/20120627043929/http://java.sun.com/docs/white/delegates.html",
            title: 'About Microsoft\'s "Delegates"',
          },
          {
            href: "https://web.archive.org/web/20101229090912/http://www.fscript.org/prof/javapassport.pdf",
            title: "History of Java",
          },
          {
            href: "https://web.archive.org/web/20150716194245/http://queue.acm.org/detail.cfm?id=1017013",
            title: "A Conversation with James Gosling – ACM Queue",
          },
        ],
      },
    },
    {
      dialects: ["pl+ada", "pl+clarion", "pl+concurrent-pascal", "pl+object-pascal", "pl+planc"],
      implementations: [
        "pl+bsd",
        "pl+cdc-6000",
        "pl+embarcadero-delphi",
        "pl+free-pascal",
        "pl+gnu-pascal",
        "pl+ibm-system-slash370",
        "pl+icl-1900",
        "pl+pascal-p",
        "pl+pdp-10",
        "pl+pdp-11",
        "pl+vsi-pascal",
      ],
      influenced: [
        "pl+a-",
        "pl+ada",
        "pl+aldor",
        "pl+algol",
        "pl+algol-60",
        "pl+algol-w",
        "pl+c-slashal",
        "pl+charm",
        "pl+comal",
        "pl+component-pascal",
        "pl+concurrent-pascal",
        "pl+draco",
        "pl+emerald",
        "pl+euclid",
        "pl+go",
        "pl+hypertalk",
        "pl+karel-the-robot",
        "pl+kuka-robot-language",
        "pl+limbo",
        "pl+microsoft-power-fx",
        "pl+modula",
        "pl+modula-2",
        "pl+modula-2-plus",
        "pl+modula-3",
        "pl+object-pascal",
        "pl+ocaml",
        "pl+parasail",
        "pl+pascal-script",
        "pl+plus",
        "pl+seed7",
        "pl+simula",
        "pl+sisal",
        "pl+standard-ml",
        "pl+transaction-programming-language-(tal)",
        "pl+verilog",
        "pl+vhdl",
        "pl+wolfram-language",
        "pl+zonnon",
      ],
      influences: [
        "pl+-2",
        "pl+-3",
        "pl+ada",
        "pl+algol-w",
        "pl+c-sharp",
        "pl+c-slashal",
        "pl+component-pascal",
        "pl+go",
        "pl+java",
        "pl+modula",
        "pl+oberon",
        "pl+object-pascal",
        "pl+oxygene",
        "pl+power-fx",
        "pl+seed7",
        "pl+simula",
        "pl+standard-ml",
        "pl+structured-text",
        "pl+vhdl",
      ],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+niklaus-wirth", "designer"]],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
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
    "pl+perl",
    "Perl",
    {
      name: "Perl",
      websites: [
        { kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" },
        { kind: "homepage", title: "perl.org", href: "https://www.perl.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://web.archive.org/web/20130111100906/http://history.perl.org/PerlTimeline.html",
            title: "The Timeline of Perl and its Culture (v3.0_0505)",
          },
        ],
        stable_release: [
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2024/06/msg268252.html",
            title: "Perl v5.40.0 is now available",
          },
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2023/11/msg267400.html",
            title: "Perl 5.34.3, Perl 5.36.3 and Perl 5.38.2 are now available",
          },
        ],
        preview_release: [
          {
            href: "https://www.nntp.perl.org/group/perl.perl5.porters/2024/04/msg268159.html",
            title: "Release announcement for perl v5.39.10",
          },
        ],
        license: [
          { href: "https://web.archive.org/web/20110122175123/http://dev.perl.org/licenses/", title: "Perl Licensing" },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20170728023959/http://www.perl.com/pub/2007/12/06/soto-11.html",
            title: "Programming is Hard, Let's Go Scripting...",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1987-12-18", kind: "first" },
        { version: "5.40.0", date: "2024-06-09", kind: "stable" },
        { version: "5.39.10", date: "2024-04-27", kind: "preview" },
      ],
      extensions: [".plx", ".pls", ".pl", ".pm", ".xs", ".t", ".pod", ".cgi", ".psgi"],
    },
    {
      dialects: ["pl+raku"],
      implementations: ["pl+c"],
      influenced: [
        "pl+awk",
        "pl+beanshell",
        "pl+c",
        "pl+c-plus-plus",
        "pl+ecmascript",
        "pl+julia",
        "pl+lisp",
        "pl+newlisp",
        "pl+perl-data-language-(pdl)",
        "pl+php",
        "pl+powershell",
        "pl+python",
        "pl+qore",
        "pl+raku",
        "pl+ruby",
        "pl+sed",
      ],
      influences: ["pl+awk", "pl+basic", "pl+c", "pl+c-plus-plus", "pl+lisp", "pl+sed", "pl+unix-shell"],
      licenses: ["lic+artistic", "lic+gnu-gpl"],
      paradigms: ["para+multi-paradigm"],
      people: [["person+larry-wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
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
    "pl+php",
    "PHP",
    {
      name: "PHP",
      websites: [
        { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
        { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
      references: {
        first_appeared: [
          {
            href: "https://groups.google.com/group/comp.infosystems.www.authoring.cgi/msg/cc7d43454d64d133?pli=1",
            title: "Announce: Personal Home Page Tools (PHP Tools)",
          },
          {
            href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
        ],
        stable_release: [
          { href: "https://www.php.net/archive/2024.php#2024-06-06-2", title: "PHP: News Archive - 2024" },
        ],
        typing_discipline: [
          {
            href: "https://secure.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict",
            title: "PHP: Function arguments – Manual",
          },
        ],
        license: [{ href: "https://museum.php.net/php3/", title: "PHP: Release Archives (museum)" }],
        influenced_by: [
          { href: "https://www.php.net/manual/en/preface.php", title: "PHP: Preface – Manual" },
          {
            href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
          {
            href: "https://x.com/dstogov/status/672864802474229760",
            title:
              "It's not a secret that some #PHP7 optimization ideas came from HHVM, LuaJIT and V8. Thank you @HipHopVM @SaraMG. #php7thankyou",
          },
        ],
        founder: [
          {
            href: "https://www.howtogeek.com/devops/what-the-new-php-foundation-means-for-phps-future/",
            title: "What the New PHP Foundation Means for PHP's Future",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1995-06-08", kind: "first" },
        { version: "8.3.8", date: "2024-06-06", kind: "stable" },
      ],
      extensions: [".php", ".phar", ".phtml", ".pht", ".phps"],
    },
    {
      implementations: [
        "pl+c",
        "pl+c-plus-plus",
        "pl+hhvm",
        "pl+parrot",
        "pl+peachpie",
        "pl+quercus",
        "pl+zend-engine",
      ],
      influenced: ["pl+c", "pl+c-plus-plus", "pl+hack", "pl+haxe", "pl+java", "pl+smalltalk", "pl+tcl", "pl+umple"],
      influences: [
        "pl+asp",
        "pl+c",
        "pl+c-plus-plus",
        "pl+hack",
        "pl+java",
        "pl+javascript",
        "pl+jsp",
        "pl+perl",
        "pl+react-js",
        "pl+tcl",
      ],
      licenses: ["lic+gnu-gpl", "lic+php", "lic+zend"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+objects", "para+reflective"],
      people: [["person+rasmus-lerdorf", "designer"]],
      platforms: ["platf+macos", "platf+openvms", "platf+unix", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+weak"],
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

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+python",
    "Python",
    {
      name: "Python",
      websites: [
        { kind: "wikipedia", title: "Python", href: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { kind: "homepage", title: "python.org", href: "https://www.python.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" }],
      references: {
        paradigm: [
          {
            href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#what-is-python",
            title: "General Python FAQ – Python 3.9.2 documentation",
          },
        ],
        first_appeared: [
          {
            href: "https://web.archive.org/web/20210811171015/https://www.tuhs.org/Usenet/alt.sources/1991-February/001749.html",
            title: "Python 0.9.1 part 01/21",
          },
        ],
        typing_discipline: [
          {
            href: "https://web.archive.org/web/20210314173706/https://wiki.python.org/moin/Why%20is%20Python%20a%20dynamic%20language%20and%20also%20a%20strongly%20typed%20language",
            title: "Why is Python a dynamic language and also a strongly typed language",
          },
          {
            href: "https://web.archive.org/web/20200614153558/https://www.python.org/dev/peps/pep-0483/",
            title: "PEP 483 – The Theory of Type Hints",
          },
        ],
        os: [
          { href: "https://peps.python.org/pep-0011/", title: "PEP 11 – CPython platform support | peps.python.org" },
          {
            href: "https://peps.python.org/pep-0738/",
            title: "PEP 738 – Adding Android as a supported platform | peps.python.org",
          },
          {
            href: "https://web.archive.org/web/20201127015815/https://www.python.org/download/other/",
            title: "Download Python for Other Platforms",
          },
          {
            href: "https://web.archive.org/web/20220517151240/https://docs.python.org/3.7/library/test.html?highlight=android#test.support.is_android",
            title: "test – Regression tests package for Python – Python 3.7.13 documentation",
          },
          {
            href: "https://web.archive.org/web/20220517150826/https://docs.python.org/3/library/platform.html?highlight=android",
            title: "platform – Access to underlying platform's identifying data – Python 3.10.4 documentation",
          },
        ],
        filename_extensions: [
          {
            href: "https://web.archive.org/web/20181226141117/https://www.python.org/dev/peps/pep-0441/%20",
            title: "PEP 0441 – Improving Python ZIP Application Support",
          },
        ],
        dialects: [
          {
            href: "https://web.archive.org/web/20200615140534/https://docs.bazel.build/versions/master/skylark/language.html",
            title: "Starlark Language",
          },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20121024164224/http://docs.python.org/faq/general.html#why-was-python-created-in-the-first-place",
            title: "Why was Python created in the first place?",
          },
          {
            href: "https://web.archive.org/web/20191022155758/http://archive.adaic.com/standards/83lrm/html/lrm-11-03.html#11.3",
            title: "Ada 83 Reference Manual (raise statement)",
          },
          {
            href: "https://web.archive.org/web/20070501105422/http://www.amk.ca/python/writing/gvr-interview",
            title: "Interview with Guido van Rossum (July 1998)",
          },
          { href: "https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.38.2023", title: "10.1.1.38.2023" },
          {
            href: "https://web.archive.org/web/20121023030209/http://docs.python.org/tutorial/classes.html",
            title: "Classes",
          },
          {
            href: "https://web.archive.org/web/20191123043655/http://effbot.org/zone/call-by-object.htm",
            title: "Call By Object",
          },
          {
            href: "https://web.archive.org/web/20200820231854/https://www.python.org/download/releases/2.3/mro/",
            title: "The Python 2.3 Method Resolution Order",
          },
          {
            href: "https://web.archive.org/web/20121024163217/http://docs.python.org/howto/functional.html",
            title: "Functional Programming HOWTO",
          },
          {
            href: "https://web.archive.org/web/20200605012926/https://www.python.org/dev/peps/pep-0255/",
            title: "PEP 255 – Simple Generators",
          },
          {
            href: "https://web.archive.org/web/20160604080843/https://docs.python.org/3.2/tutorial/controlflow.html",
            title: "More Control Flow Tools",
          },
          {
            href: "https://web.archive.org/web/20180718132241/https://docs.python.org/3/library/re.html",
            title: "re – Regular expression operations – Python 3.10.6 documentation",
          },
        ],
        influenced: [
          { href: "https://web.archive.org/web/20200612100004/http://coffeescript.org/", title: "CoffeeScript" },
          {
            href: "https://web.archive.org/web/20200601133216/https://wiki.gnome.org/action/show/Projects/Genie",
            title: "The Genie Programming Language Tutorial",
          },
          {
            href: "https://web.archive.org/web/20181226141121/http://2ality.com/2013/02/javascript-influences.html%0A",
            title: "Perl and Python influences in JavaScript",
          },
          {
            href: "https://web.archive.org/web/20181226141123/http://speakingjs.com/es5/ch03.html%0A",
            title: "Chapter 3: The Nature of JavaScript; Influences",
          },
          {
            href: "https://web.archive.org/web/20200502144010/https://julialang.org/blog/2012/02/why-we-created-julia/",
            title: "Why We Created Julia",
          },
          {
            href: "https://web.archive.org/web/20230505064554/https://www.infoworld.com/article/3695588/mojo-language-marries-python-and-mlir-for-ai-development.html",
            title: "Mojo language marries Python and MLIR for AI development",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://ring-lang.sourceforge.net/doc1.6/introduction.html#ring-and-other-languages",
            title: "Ring and other languages",
          },
          {
            href: "https://archive.org/details/practicaljrubyon0000bini/page/3",
            title: "Practical JRuby on Rails Web 2.0 Projects: bringing Ruby on Rails to the Java platform",
          },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1991-02-20", kind: "first" },
        { version: "3.12.4", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".py", ".pyw", ".pyz", ".pyi", ".pyc", ".pyd"],
    },
    {
      dialects: ["pl+mojo"],
      implementations: [
        "pl+circuitpython",
        "pl+cpython",
        "pl+ironpython",
        "pl+jython",
        "pl+micropython",
        "pl+pypy",
        "pl+stackless-python",
      ],
      influenced: [
        "pl+abc",
        "pl+ada",
        "pl+apl",
        "pl+boo",
        "pl+c",
        "pl+c-plus-plus",
        "pl+clu",
        "pl+cobra",
        "pl+crystal",
        "pl+cython",
        "pl+d-programming-language",
        "pl+dylan",
        "pl+ec",
        "pl+ecmascript",
        "pl+ezhil",
        "pl+genie",
        "pl+godot-enginegdscript",
        "pl+groovy",
        "pl+haxe",
        "pl+icon",
        "pl+io",
        "pl+java",
        "pl+julia",
        "pl+kotlin",
        "pl+lisp",
        "pl+modula-3",
        "pl+nim",
        "pl+occam",
        "pl+powershell",
        "pl+pyomo",
        "pl+ring",
        "pl+ruby",
        "pl+scheme",
        "pl+smalltalk",
        "pl+solidity",
        "pl+squirrel",
        "pl+standard-ml",
        "pl+v",
        "pl+whiley",
      ],
      influences: [
        "pl+abc",
        "pl+ada",
        "pl+algol-68",
        "pl+apache-groovy",
        "pl+apl",
        "pl+boo",
        "pl+c",
        "pl+c-plus-plus",
        "pl+clu",
        "pl+cobra",
        "pl+coffeescript",
        "pl+d",
        "pl+dylan",
        "pl+f-sharp",
        "pl+gdscript",
        "pl+genie",
        "pl+go",
        "pl+haskell",
        "pl+icon",
        "pl+javascript",
        "pl+julia",
        "pl+lisp",
        "pl+modula-3",
        "pl+mojo",
        "pl+nim",
        "pl+perl",
        "pl+ring",
        "pl+ruby",
        "pl+standard-ml",
        "pl+swift",
      ],
      licenses: ["lic+python-software-foundation"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+multi-paradigm",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      people: [["person+guido-van-rossum", "designer"]],
      platforms: [
        "platf+android",
        "platf+bsd",
        "platf+ios",
        "platf+linux",
        "platf+macos",
        "platf+rpi",
        "platf+unix",
        "platf+web",
        "platf+windows",
      ],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"],
    },
  );
}
