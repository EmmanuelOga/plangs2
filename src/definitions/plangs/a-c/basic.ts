import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+applesoft-basic", "Applesoft BASIC", {
    name: "Applesoft BASIC",
    websites: [{ kind: "wikipedia", title: "Applesoft BASIC", href: "https://en.wikipedia.org/wiki/Applesoft_BASIC" }],
    releases: [
      { version: "unknown", date: "1977-01-01", kind: "first" },
      { version: "unknown", date: "1978-01-01", kind: "stable" },
    ],
  });

  lb.define(
    "pl+atari-basic",
    "Atari BASIC",
    {
      name: "Atari BASIC",
      websites: [{ kind: "wikipedia", title: "Atari BASIC", href: "https://en.wikipedia.org/wiki/Atari_BASIC" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/AtariBasicExample.png/300px-AtariBasicExample.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1979-01-01", kind: "first" },
        { version: "unknown", date: "1983-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+data-general-business-basic"],
      licenses: ["lic+commercial", "lic+proprietary"],
      people: [
        ["person+kathleen-o-brien", "designer"],
        ["person+paul-laughton", "designer"],
      ],
      platforms: ["platf+atari"],
    },
  );

  lb.define(
    "pl+basic",
    "BASIC",
    {
      name: "BASIC",
      websites: [{ kind: "wikipedia", title: "BASIC", href: "https://en.wikipedia.org/wiki/BASIC" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
        },
      ],
      releases: [{ version: "unknown", date: "1964-05-01", kind: "first" }],
    },
    {
      dialects: ["pl+atari-basic", "pl+open"],
      implementations: [
        "pl+applesoft-basic",
        "pl+atari-basic",
        "pl+bbc-basic",
        "pl+casio-basic",
        "pl+commodore-basic",
        "pl+dartmouth-basic",
        "pl+freebasic",
        "pl+liberty-basic",
        "pl+ms-basic",
        "pl+powerbasic",
        "pl+qb64",
        "pl+quickbasic",
        "pl+sinclair-basic",
        "pl+ti-basic",
        "pl+tiny-basic",
      ],
      influences: ["pl+algol-60", "pl+fortran", "pl+fortran-95", "pl+joss", "pl+speedcoding"],
      paradigms: ["para+imperative", "para+non", "para+objects"],
      people: [
        ["person+john-g-kemeny", "designer"],
        ["person+thomas-e-kurtz", "designer"],
      ],
    },
  );

  lb.define(
    "pl+basic-ap",
    "BASIC A+",
    {
      name: "BASIC A+",
      websites: [{ kind: "wikipedia", title: "BASIC A+", href: "https://en.wikipedia.org/wiki/BASIC_A%2B" }],
    },
    { influences: ["pl+atari-basic"] },
  );

  lb.define(
    "pl+basic-plus",
    "BASIC-PLUS",
    {
      name: "BASIC-PLUS",
      websites: [{ kind: "wikipedia", title: "BASIC-PLUS", href: "https://en.wikipedia.org/wiki/BASIC-PLUS" }],
      releases: [{ version: "unknown", date: "1970-01-01", kind: "first" }],
    },
    { influences: ["pl+dartmouth-basic", "pl+focal", "pl+tymshare-super-basic"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+basic-xl",
    "BASIC XL",
    {
      name: "BASIC XL",
      websites: [{ kind: "wikipedia", title: "BASIC XL", href: "https://en.wikipedia.org/wiki/BASIC_XL" }],
    },
    { influences: ["pl+atari-basic"] },
  );

  lb.define(
    "pl+basic4android",
    "Basic4android",
    {
      name: "Basic4android",
      websites: [{ kind: "wikipedia", title: "Basic4android", href: "https://en.wikipedia.org/wiki/Basic4android" }],
    },
    { influences: ["pl+visual-basic"] },
  );

  lb.define(
    "pl+basic4ppc",
    "Basic4ppc",
    {
      name: "Basic4ppc",
      websites: [
        { kind: "wikipedia", title: "B4x", href: "https://en.wikipedia.org/wiki/Basic4ppc" },
        { kind: "homepage", title: "www.b4x.com", href: "http://www.b4x.com" },
      ],
      releases: [{ version: "unknown", date: "2005-01-01", kind: "first" }],
    },
    {
      influences: ["pl+visual-basic"],
      paradigms: ["para+event", "para+imperative"],
      platforms: ["platf+android", "platf+arduino", "platf+mac", "platf+win"],
      typeSystems: ["tsys+static", "tsys+weak"],
    },
  );

  lb.define("pl+bbc-basic", "BBC BASIC", {
    name: "BBC BASIC",
    websites: [{ kind: "wikipedia", title: "BBC BASIC", href: "https://en.wikipedia.org/wiki/BBC_BASIC" }],
    releases: [{ version: "unknown", date: "1981-01-01", kind: "first" }],
  });

  lb.define("pl+business-basic", "Business Basic", {
    name: "Business Basic",
    websites: [{ kind: "wikipedia", title: "Business Basic", href: "https://en.wikipedia.org/wiki/Business_Basic" }],
  });

  lb.define("pl+casio-basic", "Casio BASIC", {
    name: "Casio BASIC",
    websites: [{ kind: "wikipedia", title: "Casio BASIC", href: "https://en.wikipedia.org/wiki/Casio_BASIC" }],
  });

  lb.define(
    "pl+commodore-basic",
    "Commodore BASIC",
    {
      name: "Commodore BASIC",
      websites: [
        { kind: "wikipedia", title: "Commodore BASIC", href: "https://en.wikipedia.org/wiki/Commodore_BASIC" },
      ],
      releases: [
        { version: "unknown", date: "1977-01-01", kind: "first" },
        { version: "7.0", date: "1985-01-01", kind: "stable" },
        { version: "10.0", date: "1991-01-01", kind: "preview" },
      ],
    },
    { implementations: ["pl+assembly", "pl+mos-6502"], platforms: ["platf+commodore"] },
  );

  lb.define(
    "pl+dartmouth-basic",
    "Dartmouth BASIC",
    {
      name: "Dartmouth BASIC",
      websites: [
        { kind: "wikipedia", title: "Dartmouth BASIC", href: "https://en.wikipedia.org/wiki/Dartmouth_BASIC" },
      ],
      releases: [{ version: "unknown", date: "1964-01-01", kind: "first" }],
    },
    {
      influences: ["pl+algol", "pl+darsimco", "pl+fortran"],
      paradigms: ["para+array", "para+imperative"],
      people: [
        ["person+john-g-kemeny", "designer"],
        ["person+thomas-e-kurtz", "designer"],
      ],
    },
  );

  lb.define("pl+data-general-business-basic", "Data General Business Basic", {
    name: "Data General Business Basic",
    websites: [
      {
        kind: "wikipedia",
        title: "Data General Business Basic",
        href: "https://en.wikipedia.org/wiki/Data_General_Business_Basic",
      },
    ],
  });

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
      influences: ["pl+c", "pl+qbasic", "pl+quickbasic"],
      licenses: ["lic+gpl", "lic+lgpl"],
      paradigms: ["para+imperative", "para+objects"],
      people: [["person+andre-victor", "designer"]],
      platforms: ["platf+bsd", "platf+dos", "platf+linux", "platf+win"],
      typeSystems: ["tsys+static"],
    },
  );

  lb.define(
    "pl+gambas",
    "Gambas",
    {
      name: "Gambas",
      websites: [
        { kind: "wikipedia", title: "Gambas", href: "https://en.wikipedia.org/wiki/Gambas" },
        { kind: "homepage", title: "http://gambas.sourceforge.net", href: "http://gambas.sourceforge.net" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gambas_mascot.png/95px-Gambas_mascot.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1999-01-01", kind: "first" },
        { version: "3.19.1", date: "2024-03-17", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://gitlab.com/gambas/gambas/-/releases", title: "Releases · Gambas / gambas · GitLab" },
        ],
        os: [
          { href: "https://allbasic.info/forum/index.php?topic=118.0", title: "Gambas 3 OS X" },
          { href: "https://discuss.haiku-os.org/t/gambas-on-haiku/10500", title: "Gambas on Haiku?" },
        ],
        influenced_by: [
          { href: "http://gambaswiki.org/wiki/doc/intro?nh&l=en", title: "Gambas Documentation Introduction" },
        ],
      },
    },
    {
      influences: ["pl+java", "pl+visual-basic"],
      licenses: ["lic+gpl"],
      people: [["person+benoit-minisini", "designer"]],
      platforms: ["platf+bsd", "platf+cygwin", "platf+haiku", "platf+linux", "platf+mac", "platf+win"],
    },
  );

  lb.define(
    "pl+gw-basic",
    "GW-BASIC",
    {
      name: "GW-BASIC",
      websites: [{ kind: "wikipedia", title: "GW-BASIC", href: "https://en.wikipedia.org/wiki/GW-BASIC" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/GW-BASIC_3.23.png/300px-GW-BASIC_3.23.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "3.23", date: "1988-01-01", kind: "stable" },
      ],
      references: {
        license: [
          {
            href: "https://devblogs.microsoft.com/commandline/microsoft-open-sources-gw-basic/",
            title: "Microsoft Open-Sources GW-BASIC",
          },
        ],
      },
    },
    {
      influences: ["pl+ibm-basica", "pl+ibm-cassette-basic", "pl+ibm-disk-basic"],
      licenses: ["lic+mit", "lic+proprietary"],
      platforms: ["platf+dos"],
    },
  );

  lb.define("pl+ibm-basica", "IBM BASICA", {
    name: "IBM BASICA",
    websites: [
      {
        kind: "wikipedia",
        title: "IBM Cassette BASICIBM Disk BASICIBM Advanced BASIC (BASICA)",
        href: "https://en.wikipedia.org/wiki/IBM_BASICA",
      },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/IBM_Cassette_BASIC.png/300px-IBM_Cassette_BASIC.png",
      },
    ],
    releases: [{ version: "unknown", date: "1981-01-01", kind: "first" }],
  });

  lb.define("pl+ibm-cassette-basic", "IBM Cassette BASIC", {
    name: "IBM Cassette BASIC",
    websites: [
      { kind: "wikipedia", title: "IBM Cassette BASIC", href: "https://en.wikipedia.org/wiki/IBM_Cassette_BASIC" },
    ],
  });

  lb.define("pl+ibm-disk-basic", "IBM Disk BASIC", {
    name: "IBM Disk BASIC",
    websites: [{ kind: "wikipedia", title: "IBM Disk BASIC", href: "https://en.wikipedia.org/wiki/IBM_Disk_BASIC" }],
  });

  lb.define(
    "pl+level-i-basic",
    "Level I BASIC",
    {
      name: "Level I BASIC",
      websites: [{ kind: "wikipedia", title: "Level I BASIC", href: "https://en.wikipedia.org/wiki/Level_I_BASIC" }],
      releases: [{ version: "unknown", date: "1977-01-01", kind: "first" }],
    },
    { influences: ["pl+li-chen-wang", "pl+tiny-basic"], people: [["person+steve-leininger", "designer"]] },
  );

  lb.define(
    "pl+liberty-basic",
    "Liberty BASIC",
    {
      name: "Liberty BASIC",
      websites: [
        { kind: "wikipedia", title: "Liberty BASIC", href: "https://en.wikipedia.org/wiki/Liberty_BASIC" },
        { kind: "homepage", title: "libertybasic.com", href: "http://libertybasic.com" },
      ],
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "4.5.1", date: "2017-05-31", kind: "stable" },
      ],
      extensions: [".bas", ".fr3"],
    },
    {
      influences: ["pl+quickbasic"],
      paradigms: ["para+event", "para+imperative"],
      people: [["person+carl-gundel", "designer"]],
      platforms: ["platf+linux", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+ms-basic",
    "Microsoft BASIC",
    {
      name: "Microsoft BASIC",
      websites: [
        { kind: "wikipedia", title: "Microsoft BASIC", href: "https://en.wikipedia.org/wiki/Microsoft_BASIC" },
      ],
    },
    { influences: ["pl+basic-plus"] },
  );

  lb.define(
    "pl+ms-small-basic",
    "Microsoft Small Basic",
    {
      name: "Microsoft Small Basic",
      websites: [
        {
          kind: "wikipedia",
          title: "Microsoft Small Basic",
          href: "https://en.wikipedia.org/wiki/Microsoft_Small_Basic",
        },
        {
          kind: "homepage",
          title: "smallbasic-publicwebsite.azurewebsites.net",
          href: "https://smallbasic-publicwebsite.azurewebsites.net/",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Small_Basic.png/300px-Small_Basic.png",
        },
      ],
      references: {
        designed_by: [
          {
            href: "https://books.google.com/books?id=YXVVngEACAAJ",
            title: "Programming Games with Microsoft Small Basic",
          },
          {
            href: "https://techcommunity.microsoft.com/t5/small-basic-blog/featured-article-interviews-with-vijaye-raji-the-creator-of/ba-p/337729",
            title: "Featured Article: Interviews with Vijaye Raji, the creator of Small Basic",
          },
        ],
        license: [{ href: "https://github.com/sb/smallbasic-editor/blob/master/LICENSE", title: "SmallBasic" }],
      },
      releases: [
        { version: "unknown", date: "2008-10-23", kind: "first" },
        { version: "1.2", date: "2015-10-01", kind: "stable" },
      ],
      extensions: [".sb"],
    },
    {
      influences: ["pl+logo", "pl+objectlogo", "pl+qbasic", "pl+visual-basic-.net"],
      licenses: ["lic+mit"],
      paradigms: ["para+imperative", "para+objects", "para+structured"],
      platforms: ["platf+.net", "platf+web", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );

  lb.define(
    "pl+msx-basic",
    "MSX BASIC",
    {
      name: "MSX BASIC",
      websites: [
        { kind: "wikipedia", title: "MSX BASIC", href: "https://en.wikipedia.org/wiki/MSX_BASIC" },
        { kind: "homepage", title: "www.microsoft.com", href: "http://www.microsoft.com" },
      ],
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "4.1", kind: "stable" },
      ],
    },
    { influences: ["pl+gw-basic"], licenses: ["lic+eula", "lic+ms"], paradigms: ["para+imperative"] },
  );

  lb.define(
    "pl+ns-basic",
    "NS Basic",
    {
      name: "NS Basic",
      websites: [
        { kind: "wikipedia", title: "NSB/AppStudio", href: "https://en.wikipedia.org/wiki/NS_Basic" },
        { kind: "homepage", title: "www.appstudio.dev", href: "https://www.appstudio.dev" },
      ],
      releases: [{ version: "9.0.4", date: "2024-05-01", kind: "stable" }],
    },
    { influences: ["pl+visual-basic"], licenses: ["lic+proprietary"] },
  );

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
    { influences: ["pl+turbo-basic"], people: [["person+robert--bob--zale", "developer"]] },
  );

  lb.define(
    "pl+qbasic",
    "QBasic",
    {
      name: "QBasic",
      websites: [{ kind: "wikipedia", title: "QBasic", href: "https://en.wikipedia.org/wiki/QBasic" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QBasic_Opening_Screen.png/220px-QBasic_Opening_Screen.png",
        },
      ],
      releases: [{ version: "unknown", date: "1991-01-01", kind: "first" }],
    },
    {
      influences: ["pl+gw-basic", "pl+quickbasic"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative"],
      platforms: ["platf+arcaos", "platf+dos", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+quickbasic",
    "QuickBASIC",
    {
      name: "QuickBASIC",
      websites: [
        { kind: "wikipedia", title: "QuickBASIC", href: "https://en.wikipedia.org/wiki/QuickBASIC" },
        { kind: "homepage", title: "www.microsoft.com", href: "https://www.microsoft.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QuickBasic_Opening_Screen.png/220px-QuickBasic_Opening_Screen.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "unknown", date: "1990-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+gw-basic"], licenses: ["lic+proprietary"], platforms: ["platf+x86"] },
  );

  lb.define(
    "pl+sinclair-basic",
    "Sinclair BASIC",
    {
      name: "Sinclair BASIC",
      websites: [{ kind: "wikipedia", title: "Sinclair BASIC", href: "https://en.wikipedia.org/wiki/Sinclair_BASIC" }],
      releases: [{ version: "unknown", date: "1979-01-01", kind: "first" }],
    },
    {
      licenses: ["lic+proprietary"],
      paradigms: ["para+imperative"],
      people: [["person+steve-vickers", "designer"]],
      platforms: ["platf+zx-spectrum", "platf+zx80", "platf+zx81"],
    },
  );

  lb.define(
    "pl+smallbasic",
    "SmallBasic",
    {
      name: "SmallBasic",
      websites: [
        { kind: "wikipedia", title: "SmallBASIC", href: "https://en.wikipedia.org/wiki/SmallBasic" },
        { kind: "repository", title: "smallbasic.github.io", href: "https://smallbasic.github.io" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png" },
      ],
      references: { stable_release: [{ href: "https://smallbasic.github.io", title: "Browse Files for SmallBASIC" }] },
      releases: [{ version: "12.27", date: "2024-04-26", kind: "stable" }],
      extensions: [".bas"],
    },
    { implementations: ["pl+basic"], influences: ["pl+qbasic"], licenses: ["lic+gpl3"] },
  );

  lb.define("pl+ti-basic", "TI-BASIC", {
    name: "TI-BASIC",
    websites: [{ kind: "wikipedia", title: "TI-BASIC", href: "https://en.wikipedia.org/wiki/TI-BASIC" }],
  });

  lb.define(
    "pl+tiny-basic",
    "Tiny BASIC",
    {
      name: "Tiny BASIC",
      websites: [{ kind: "wikipedia", title: "Tiny BASIC", href: "https://en.wikipedia.org/wiki/Tiny_BASIC" }],
      releases: [{ version: "unknown", date: "1976-01-01", kind: "first" }],
    },
    {
      people: [
        ["person+dennis-allison", "designer"],
        ["person+li-chen-wang", "developer"],
      ],
    },
  );

  lb.define(
    "pl+trs-80-level-ii-basic",
    "Microsoft BASIC",
    {
      name: "Microsoft BASIC",
      websites: [
        {
          kind: "wikipedia",
          title: "TRS-80 Level II BASIC",
          href: "https://en.wikipedia.org/wiki/TRS-80_Level_II_BASIC",
        },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2018-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+level-i-basic"] },
  );

  lb.define("pl+turbo-basic", "Turbo Basic", {
    name: "Turbo Basic",
    websites: [{ kind: "wikipedia", title: "Turbo Basic", href: "https://en.wikipedia.org/wiki/Turbo_Basic" }],
  });

  lb.define(
    "pl+turbo-basic-xl",
    "Turbo-BASIC XL",
    {
      name: "Turbo-BASIC XL",
      websites: [{ kind: "wikipedia", title: "Turbo-BASIC XL", href: "https://en.wikipedia.org/wiki/Turbo-BASIC_XL" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Turbo-BASIC_XL-1.5.png/220px-Turbo-BASIC_XL-1.5.png",
        },
      ],
      releases: [{ version: "unknown", date: "1985-01-01", kind: "first" }],
    },
    { influences: ["pl+atari-basic"], platforms: ["platf+atari"] },
  );

  lb.define(
    "pl+tymshare-super-basic",
    "Tymshare SUPER BASIC",
    {
      name: "Tymshare SUPER BASIC",
      websites: [
        { kind: "wikipedia", title: "SUPER BASIC", href: "https://en.wikipedia.org/wiki/Tymshare_SUPER_BASIC" },
      ],
      releases: [{ version: "unknown", date: "1968-01-01", kind: "first" }],
    },
    { influences: ["pl+cal", "pl+dartmouth-basic", "pl+joss"] },
  );

  lb.define(
    "pl+vilnius-basic",
    "Vilnius BASIC",
    {
      name: "Vilnius BASIC",
      websites: [{ kind: "wikipedia", title: "Vilnius Basic", href: "https://en.wikipedia.org/wiki/Vilnius_BASIC" }],
      releases: [{ version: "unknown", date: "1986-01-01", kind: "first" }],
    },
    { dialects: ["pl+basic"], influences: ["pl+msx-basic"], paradigms: ["para+algorithmic", "para+imperative"] },
  );

  lb.define(
    "pl+visual-basic",
    "Visual Basic",
    {
      name: "Visual Basic",
      websites: [
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic" },
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)" },
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
    },
    {
      implementations: ["pl+ms-visual-studio"],
      influences: ["pl+basic", "pl+ms-basic", "pl+qbasic"],
      paradigms: ["para+event", "para+objects"],
      platforms: ["platf+dos", "platf+win"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  lb.define(
    "pl+visual-basic-.net",
    "Visual Basic .NET",
    {
      name: "Visual Basic .NET",
      websites: [
        { kind: "wikipedia", title: "Visual Basic .NET", href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET" },
      ],
    },
    { influences: ["pl+basic", "pl+visual-basic"] },
  );

  lb.define(
    "pl+visual-basic-for-applications",
    "Visual Basic for Applications",
    {
      name: "Visual Basic for Applications",
      websites: [
        {
          kind: "wikipedia",
          title: "Visual Basic for Applications",
          href: "https://en.wikipedia.org/wiki/Visual_Basic_for_Applications",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Microsoft_Visual_Basic_for_Applications_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "7.1", kind: "stable" },
      ],
    },
    {
      influences: ["pl+quickbasic", "pl+visual-basic"],
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+multi"],
      platforms: ["platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+xojo",
    "Xojo",
    {
      name: "Xojo",
      websites: [
        { kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" },
        { kind: "homepage", title: "xojo.com", href: "http://xojo.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg" }],
      references: { stable_release: [{ href: "https://www.xojo.com/download/", title: "Xojo: Downloads" }] },
      releases: [{ version: "3.1", date: "2023-10-25", kind: "stable" }],
    },
    { influences: ["pl+basic", "pl+visual-basic"], licenses: ["lic+freemium"] },
  );
}
