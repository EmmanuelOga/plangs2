import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+basic",
    {
      name: "Visual Basic",
      websites: [
        { kind: "wikipedia", title: "BASIC", href: "https://en.wikipedia.org/wiki/BASIC" },
        { kind: "wikipedia", title: "BASIC-PLUS", href: "https://en.wikipedia.org/wiki/BASIC-PLUS" },
        { kind: "wikipedia", title: "Dartmouth BASIC", href: "https://en.wikipedia.org/wiki/Dartmouth_BASIC" },
        {
          kind: "wikipedia",
          title: "Tymshare SUPER BASIC",
          href: "https://en.wikipedia.org/wiki/Tymshare_SUPER_BASIC",
        },
        { kind: "wikipedia", title: "Microsoft BASIC", href: "https://en.wikipedia.org/wiki/Microsoft_BASIC" },
        { kind: "wikipedia", title: "B4x", href: "https://en.wikipedia.org/wiki/Basic4ppc" },
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic" },
        { kind: "wikipedia", title: "FreeBASIC", href: "https://en.wikipedia.org/wiki/FreeBASIC" },
        { kind: "wikipedia", title: "QuickBASIC", href: "https://en.wikipedia.org/wiki/QuickBASIC" },
        { kind: "wikipedia", title: "GW-BASIC", href: "https://en.wikipedia.org/wiki/GW-BASIC" },
        { kind: "wikipedia", title: "IBM Cassette BASIC", href: "https://en.wikipedia.org/wiki/IBM_Cassette_BASIC" },
        { kind: "wikipedia", title: "IBM Disk BASIC", href: "https://en.wikipedia.org/wiki/IBM_Disk_BASIC" },
        { kind: "wikipedia", title: "IBM BASICA", href: "https://en.wikipedia.org/wiki/IBM_BASICA" },
        { kind: "wikipedia", title: "QBasic", href: "https://en.wikipedia.org/wiki/QBasic" },
        { kind: "wikipedia", title: "MSX BASIC", href: "https://en.wikipedia.org/wiki/MSX_BASIC" },
        {
          kind: "wikipedia",
          title: "Microsoft Small Basic",
          href: "https://en.wikipedia.org/wiki/Microsoft_Small_Basic",
        },
        { kind: "wikipedia", title: "Visual Basic .NET", href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET" },
        { kind: "wikipedia", title: "Vilnius BASIC", href: "https://en.wikipedia.org/wiki/Vilnius_BASIC" },
        { kind: "wikipedia", title: "NSB/AppStudio", href: "https://en.wikipedia.org/wiki/NS_Basic" },
        { kind: "wikipedia", title: "SmallBasic", href: "https://en.wikipedia.org/wiki/SmallBasic" },
        { kind: "repository", title: "smallbasic.github.io", href: "https://smallbasic.github.io" },
        { kind: "wikipedia", title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic_(.NET)" },
        {
          kind: "wikipedia",
          title: "Classic Visual Basic",
          href: "https://en.wikipedia.org/wiki/Visual_Basic_(classic)",
        },
        {
          kind: "wikipedia",
          title: "Visual Basic for Applications",
          href: "https://en.wikipedia.org/wiki/Visual_Basic_for_Applications",
        },
        { kind: "wikipedia", title: "Basic4android", href: "https://en.wikipedia.org/wiki/Basic4android" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif" },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/GW-BASIC_3.23.png/300px-GW-BASIC_3.23.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/IBM_Cassette_BASIC.png/300px-IBM_Cassette_BASIC.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Small_Basic.png/300px-Small_Basic.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QBasic_Opening_Screen.png/220px-QBasic_Opening_Screen.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QuickBasic_Opening_Screen.png/220px-QuickBasic_Opening_Screen.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png" },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Visual_Basic_6.0_logo.png/210px-Visual_Basic_6.0_logo.png",
        },
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Microsoft_Visual_Basic_for_Applications_logo.svg",
        },
      ],
      releases: [
        { version: "1.10.1", date: "2023-01-01", kind: "stable" },
        { version: "3.23", date: "1988-01-01", kind: "stable" },
        { version: "unknown", date: "2018-01-01", kind: "stable" },
        { version: "1.2", date: "2015-01-01", kind: "stable" },
        { version: "4.1", kind: "stable" },
        { version: "9.0.4", date: "2024-01-01", kind: "stable" },
        { version: "unknown", date: "1990-01-01", kind: "stable" },
        { version: "12.27", date: "2024-01-01", kind: "stable" },
        { version: "17.9.2", date: "2024-01-01", kind: "stable" },
        { version: "7.1", date: "2021-01-01", kind: "stable" },
      ],
      extensions: [".sb", ".vb"],
    },
    {
      dialects: ["pl+open", "pl+basic"],
      implementations: ["pl+basic", "pl+.net-framework-sdk", "pl+roslyn", "pl+mono", "pl+ms-visual-studio"],
      influences: [
        "pl+basic",
        "pl+darsimco",
        "pl+fortran",
        "pl+algol",
        "pl+focal",
        "pl+c",
        "pl+logo",
        "pl+objectlogo",
        "pl+speedcoding",
        "pl+joss",
        "pl+cal",
      ],
      licenses: [
        "lic+gpl",
        "lic+lgpl",
        "lic+proprietary",
        "lic+mit",
        "lic+ms",
        "lic+eula",
        "lic+gpl3",
        "lic+roslyn",
        "lic+apache",
        "lic+commercial",
      ],
      paradigms: [
        "para+imperative",
        "para+non",
        "para+objects",
        "para+event",
        "para+array",
        "para+structured",
        "para+algorithmic",
        "para+multi",
        "para+dec",
        "para+generic",
        "para+reflective",
      ],
      people: ["person+john-g-kemeny", "person+thomas-e-kurtz"],
      platforms: [
        "platf+dos",
        "platf+bsd",
        "platf+linux",
        "platf+win",
        "platf+.net",
        "platf+web",
        "platf+arcaos",
        "platf+x86",
        "platf+mono",
        "platf+android",
        "platf+ios",
        "platf+mac",
        "platf+unix",
      ],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+dynamic", "tsys+strong", "tsys+safe", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+gambas",
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
      releases: [{ version: "3.19.1", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic", "pl+java"],
      licenses: ["lic+gpl"],
      people: ["person+benoit-minisini"],
      platforms: ["platf+linux", "platf+bsd", "platf+mac", "platf+haiku", "platf+win", "platf+cygwin"],
    },
  );

  lb.define(
    "pl+xojo",
    {
      name: "Xojo",
      websites: [{ kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg" }],
      releases: [{ version: "3.1", date: "2023-01-01", kind: "stable" }],
    },
    { influences: ["pl+basic"], licenses: ["lic+freemium"] },
  );
}
