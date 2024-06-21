import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+P4",
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
    "pl+PARI-SlashGP",
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
    { licenses: ["lic+gnu-gpl"], people: [["person+Henri-Cohen", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Pascal",
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
      dialects: ["pl+Ada", "pl+Object-Pascal", "pl+Clarion", "pl+Concurrent-Pascal", "pl+PLANC"],
      implementations: [
        "pl+BSD",
        "pl+CDC-6000",
        "pl+Embarcadero-Delphi",
        "pl+ICL-1900",
        "pl+Pascal-P",
        "pl+PDP-11",
        "pl+PDP-10",
        "pl+IBM-System-Slash370",
        "pl+VSI-Pascal",
        "pl+Free-Pascal",
        "pl+GNU-Pascal",
      ],
      influenced: [
        "pl+COMAL",
        "pl+SISAL",
        "pl+Wolfram-Language",
        "pl+Ada",
        "pl+Object-Pascal",
        "pl+Plus",
        "pl+Pascal-Script",
        "pl+Modula",
        "pl+Standard-ML",
        "pl+HyperTalk",
        "pl+Emerald",
        "pl+Component-Pascal",
        "pl+Modula-2",
        "pl+Concurrent-Pascal",
        "pl+VHDL",
        "pl+Go",
        "pl+ALGOL",
        "pl+OCaml",
        "pl+Charm",
        "pl+Simula",
        "pl+ALGOL-W",
        "pl+Modula-3",
        "pl+ParaSail",
        "pl+Transaction-Programming-Language-(TAL)",
        "pl+Aldor",
        "pl+Modula-2-Plus",
        "pl+Karel-the-Robot",
        "pl+Draco",
        "pl+A-",
        "pl+ALGOL-60",
        "pl+Seed7",
        "pl+KUKA-Robot-Language",
        "pl+Limbo",
        "pl+Microsoft-Power-Fx",
        "pl+Zonnon",
        "pl+Verilog",
        "pl+C-SlashAL",
        "pl+Euclid",
      ],
      influences: [
        "pl+ALGOL-W",
        "pl+Simula",
        "pl+Ada",
        "pl+C-SlashAL",
        "pl+C-Sharp",
        "pl+Component-Pascal",
        "pl+Go",
        "pl+Java",
        "pl+Modula",
        "pl+-2",
        "pl+-3",
        "pl+Oberon",
        "pl+Object-Pascal",
        "pl+Oxygene",
        "pl+Power-Fx",
        "pl+Seed7",
        "pl+Standard-ML",
        "pl+VHDL",
        "pl+Structured-text",
      ],
      paradigms: ["para+imperative", "para+structured"],
      people: [["person+Niklaus-Wirth", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PeachPie",
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
    "pl+Perl",
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
      dialects: ["pl+Raku"],
      implementations: ["pl+C"],
      influenced: [
        "pl+Qore",
        "pl+Lisp",
        "pl+C-Plus-Plus",
        "pl+BeanShell",
        "pl+Ruby",
        "pl+newLISP",
        "pl+ECMAScript",
        "pl+Julia",
        "pl+PHP",
        "pl+AWK",
        "pl+Perl-Data-Language-(PDL)",
        "pl+sed",
        "pl+C",
        "pl+Raku",
        "pl+PowerShell",
        "pl+Python",
      ],
      influences: ["pl+AWK", "pl+BASIC", "pl+C", "pl+C-Plus-Plus", "pl+Lisp", "pl+sed", "pl+Unix-shell"],
      licenses: ["lic+artistic", "lic+gnu-gpl"],
      paradigms: ["para+multi-paradigm"],
      people: [["person+Larry-Wall", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Pharo",
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
      dialects: ["pl+Squeak"],
      implementations: ["pl+Smalltalk"],
      influences: ["pl+Smalltalk", "pl+Squeak"],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+objects"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64", "platf+windows", "platf+linux", "platf+macos"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PHP",
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
        "pl+C",
        "pl+C-Plus-Plus",
        "pl+Zend-Engine",
        "pl+HHVM",
        "pl+PeachPie",
        "pl+Quercus",
        "pl+Parrot",
      ],
      influenced: ["pl+Haxe", "pl+Java", "pl+Umple", "pl+C-Plus-Plus", "pl+C", "pl+Hack", "pl+Tcl", "pl+Smalltalk"],
      influences: [
        "pl+Perl",
        "pl+C",
        "pl+C-Plus-Plus",
        "pl+Java",
        "pl+Tcl",
        "pl+JavaScript",
        "pl+Hack",
        "pl+JSP",
        "pl+ASP",
        "pl+React-JS",
      ],
      licenses: ["lic+gnu-gpl", "lic+php", "lic+zend"],
      paradigms: ["para+multi-paradigm", "para+imperative", "para+functional", "para+objects", "para+reflective"],
      people: [["person+Rasmus-Lerdorf", "designer"]],
      platforms: ["platf+unix", "platf+windows", "platf+macos", "platf+openvms"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Picolisp",
    "Picolisp",
    {
      name: "Picolisp",
      websites: [{ kind: "wikipedia", title: "Picolisp", href: "https://en.wikipedia.org/wiki/Picolisp" }],
    },
    { dialects: ["pl+Lisp"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PicoLisp",
    "PicoLisp",
    {
      name: "PicoLisp",
      websites: [
        { kind: "wikipedia", title: "PicoLisp", href: "https://en.wikipedia.org/wiki/Picolisp" },
        { kind: "homepage", title: "picolisp.com", href: "http://picolisp.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
      releases: [{ version: "unknown", date: "1988-01-01", kind: "first" }],
      extensions: [".l"],
      references: { dialects: [{ href: "https://software-lab.de/down.html", title: "PicoLisp Download" }] },
    },
    {
      implementations: ["pl+LLVM"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+objects",
        "para+declarative",
        "para+reflective",
        "para+meta",
      ],
      people: [["person+Alexander-Burger", "designer"]],
      platforms: ["platf+posix"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PL-SlashpgSQL",
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
    { influenced: ["pl+Ada"], influences: ["pl+PL-SlashSQL", "pl+Ada"], people: [["person+Jan-Wieck", "designer"]] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PostScript",
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
      implementations: ["pl+TrueImage", "pl+Ghostscript"],
      influenced: ["pl+Mesa[1]"],
      influences: ["pl+Mesa", "pl+Interpress", "pl+Lisp", "pl+PDF"],
      paradigms: ["para+multi-paradigm", "para+concatenative", "para+stack-oriented", "para+imperative"],
      people: [
        ["person+John-Warnock", "designer"],
        ["person+Chuck-Geschke", "designer"],
        ["person+Bill-Paxton", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+POV-Ray",
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
    "pl+PowerBASIC",
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
    { influences: ["pl+Turbo-Basic"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PowerShell",
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
      implementations: ["pl+C-Sharp"],
      influenced: ["pl+SQL-(Structured-Query-Language)", "pl+Tcl"],
      influences: [
        "pl+Python",
        "pl+Ksh",
        "pl+Perl",
        "pl+C-Sharp",
        "pl+CL",
        "pl+DCL",
        "pl+SQL",
        "pl+Tcl",
        "pl+Tk",
        "pl+Chef",
        "pl+Puppet",
      ],
      licenses: ["lic+mit", "lic+proprietary"],
      paradigms: ["para+imperative", "para+pipeline", "para+objects", "para+functional", "para+reflective"],
      people: [["person+Jeffrey-Snover", "designer"]],
      platforms: ["platf+.net", "platf+windows", "platf+macos", "platf+linux", "platf+centos"],
      typeSystems: ["tsys+strong", "tsys+safe", "tsys+inferred", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Processing",
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
    { influenced: ["pl+The-Kojo-Learning-Environment", "pl+C"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Prolog",
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
      dialects: ["pl+Datalog"],
      implementations: [
        "pl+B-Prolog",
        "pl+Ciao",
        "pl+ECLiPSe",
        "pl+GNU-Prolog",
        "pl+LPA-Prolog",
        "pl+Poplog",
        "pl+Quintus-Prolog",
        "pl+SWI-Prolog",
        "pl+XSB",
        "pl+YAP",
      ],
      influenced: [
        "pl+Wolfram-Language",
        "pl+Go-",
        "pl+Constraint-Handling-Rules-(CHR)",
        "pl+MDL",
        "pl+Clojure",
        "pl+Erlang",
        "pl+Ciao",
        "pl+Mercury",
        "pl+Oz",
        "pl+XSB",
        "pl+Planner",
        "pl+Datalog",
        "pl+Curry",
        "pl+ALF",
        "pl+Logtalk",
      ],
      influences: [
        "pl+Planner",
        "pl+CHR",
        "pl+Clojure",
        "pl+Datalog",
        "pl+Erlang",
        "pl+KL0",
        "pl+KL1",
        "pl+Logtalk",
        "pl+Mercury",
        "pl+Oz",
        "pl+Strand",
        "pl+Visual-Prolog",
      ],
      paradigms: ["para+logic"],
      people: [["person+Alain-Colmerauer", "designer"]],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Pure",
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
      influences: ["pl+Q", "pl+Haskell", "pl+Lisp", "pl+Alice", "pl+MATLAB"],
      licenses: ["lic+gnu-lesser-gpl"],
      paradigms: ["para+functional", "para+declarative", "para+term-rewriting"],
      people: [["person+Albert-Graf", "designer"]],
      platforms: ["platf+cross-platform", "platf+bsd", "platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+strong", "tsys+dynamic"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PureData",
    "PureData",
    {
      name: "PureData",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
    },
    { influenced: ["pl+Lucid"] },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+PureScript",
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
      influences: ["pl+Haskell", "pl+JavaScript"],
      licenses: ["lic+bsd"],
      paradigms: ["para+functional"],
      people: [["person+Phil-Freeman", "designer"]],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Pyomo",
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
      influenced: ["pl+AMPL"],
      influences: ["pl+Python", "pl+AMPL", "pl+General-Algebraic-Modeling-System"],
      licenses: ["lic+bsd"],
      people: [
        ["person+Gabriel-Hackebeil", "designer"],
        ["person+William-E-Hart", "designer"],
        ["person+Carl-Laird", "designer"],
        ["person+John-Siirola", "designer"],
        ["person+Jean-Paul-Watson", "designer"],
        ["person+David-Woodruff", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+macos", "platf+windows"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+Python",
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
      dialects: ["pl+Mojo"],
      implementations: [
        "pl+CPython",
        "pl+PyPy",
        "pl+Stackless-Python",
        "pl+MicroPython",
        "pl+CircuitPython",
        "pl+IronPython",
        "pl+Jython",
      ],
      influenced: [
        "pl+Nim",
        "pl+Haxe",
        "pl+Ada",
        "pl+Java",
        "pl+Standard-ML",
        "pl+Scheme",
        "pl+Pyomo",
        "pl+Whiley",
        "pl+Lisp",
        "pl+Squirrel",
        "pl+C-Plus-Plus",
        "pl+Cobra",
        "pl+eC",
        "pl+Genie",
        "pl+Solidity",
        "pl+Ruby",
        "pl+ECMAScript",
        "pl+Ezhil",
        "pl+Dylan",
        "pl+Julia",
        "pl+Modula-3",
        "pl+Icon",
        "pl+APL",
        "pl+Crystal",
        "pl+occam",
        "pl+Io",
        "pl+Godot-EngineGDScript",
        "pl+Ring",
        "pl+C",
        "pl+Cython",
        "pl+V",
        "pl+CLU",
        "pl+PowerShell",
        "pl+Groovy",
        "pl+Kotlin",
        "pl+Boo",
        "pl+ABC",
        "pl+Smalltalk",
        "pl+D-programming-language",
      ],
      influences: [
        "pl+ABC",
        "pl+Ada",
        "pl+ALGOL-68",
        "pl+APL",
        "pl+C",
        "pl+C-Plus-Plus",
        "pl+CLU",
        "pl+Dylan",
        "pl+Haskell",
        "pl+Icon",
        "pl+Lisp",
        "pl+Modula-3",
        "pl+Perl",
        "pl+Standard-ML",
        "pl+Apache-Groovy",
        "pl+Boo",
        "pl+Cobra",
        "pl+CoffeeScript",
        "pl+D",
        "pl+F-Sharp",
        "pl+GDScript",
        "pl+Genie",
        "pl+Go",
        "pl+JavaScript",
        "pl+Julia",
        "pl+Mojo",
        "pl+Nim",
        "pl+Ring",
        "pl+Ruby",
        "pl+Swift",
      ],
      licenses: ["lic+python-software-foundation"],
      paradigms: [
        "para+multi-paradigm",
        "para+objects",
        "para+imperative",
        "para+functional",
        "para+structured",
        "para+reflective",
      ],
      people: [["person+Guido-van-Rossum", "designer"]],
      platforms: [
        "platf+linux",
        "platf+macos",
        "platf+windows",
        "platf+web",
        "platf+bsd",
        "platf+ios",
        "platf+rpi",
        "platf+unix",
        "platf+android",
      ],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+strong", "tsys+optional"],
    },
  );
}
