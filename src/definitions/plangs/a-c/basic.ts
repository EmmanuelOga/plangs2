import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+basic")
    .merge({
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
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fblogo.gif/121px-Fblogo.gif" },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/GW-BASIC_3.23.png/300px-GW-BASIC_3.23.png",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/IBM_Cassette_BASIC.png/300px-IBM_Cassette_BASIC.png",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Small_Basic.png/300px-Small_Basic.png",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QBasic_Opening_Screen.png/220px-QBasic_Opening_Screen.png",
        },
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/QuickBasic_Opening_Screen.png/220px-QuickBasic_Opening_Screen.png",
        },
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png" },
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
        { name: "FreeBASIC", version: "1.10.1", date: "2023-01-01", kind: "stable" },
        { name: "GW-BASIC", version: "3.23", date: "1988-01-01", kind: "stable" },
        { name: "Microsoft BASIC", version: "unknown", date: "2018-01-01", kind: "stable" },
        { name: "Microsoft Small Basic", version: "1.2", date: "2015-01-01", kind: "stable" },
        { name: "NSB/AppStudio", version: "9.0.4", date: "2024-01-01", kind: "stable" },
        { name: "QuickBASIC", version: "unknown", date: "1990-01-01", kind: "stable" },
        { name: "SmallBASIC", version: "12.27", date: "2024-01-01", kind: "stable" },
        { name: "Visual Basic", version: "17.9.2", date: "2024-01-01", kind: "stable" },
        { name: "Visual Basic for Applications", version: "7.1", date: "2021-01-01", kind: "stable" },
      ],
      extensions: [".sb", ".vb"],
    })
    .addDialects(["pl+open", "pl+basic"])
    .addImplementations(["pl+basic", "pl+.net", "pl+roslyn", "pl+mono"])
    .addInfluences([
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
    ])
    .addPerson("person+john-g-kemeny", { role: "designer" })
    .addPerson("person+thomas-e-kurtz", { role: "designer" })
    .addLicenses([
      "lic+gpl",
      "lic+lgpl",
      "lic+proprietary",
      "lic+ms",
      "lic+eula",
      "lic+gpl3",
      "lic+roslyn",
      "lic+commercial",
    ])
    .addLicense("lic+mit", {
      refs: [
        {
          href: "https://devblogs.microsoft.com/commandline/microsoft-open-sources-gw-basic/",
          title: "Microsoft Open-Sources GW-BASIC",
        },
        { href: "https://github.com/sb/smallbasic-editor/blob/master/LICENSE", title: "SmallBasic" },
      ],
    })
    .addLicense("lic+apache", {
      refs: [
        {
          href: "https://web.archive.org/web/20190502004515/https://github.com/dotnet/roslyn/blob/1ff27b046b5c03abb38bfeda44eb82da0b8df9de/License.txt",
          title: "Dotnet/Roslyn",
        },
      ],
    })
    .addParadigms([
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
    ])
    .addPlatforms([
      "platf+dos",
      "platf+bsd",
      "platf+linux",
      "platf+win",
      "platf+web",
      "platf+arcaos",
      "platf+x86",
      "platf+mono",
      "platf+android",
      "platf+ios",
      "platf+mac",
      "platf+unix",
    ])
    .addPlatform("platf+.net", {
      refs: [
        {
          href: "https://web.archive.org/web/20181119070011/https://blogs.msdn.microsoft.com/vbteam/2018/11/12/visual-basic-in-net-core-3-0/",
          title: "Visual Basic in .NET Core 3.0",
        },
      ],
    })
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+dynamic", "tsys+nominative"])
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://web.archive.org/web/20150404001840/http://support.microsoft.com/en-us/kb/311329",
          title: "Option Explicit and Option Strict in Visual Basic .NET and in Visual Basic",
        },
      ],
    })
    .addTypeSystem("tsys+safe", {
      refs: [
        {
          href: "https://web.archive.org/web/20150404001840/http://support.microsoft.com/en-us/kb/311329",
          title: "Option Explicit and Option Strict in Visual Basic .NET and in Visual Basic",
        },
      ],
    });

  /**/

  g.buildPlang("pl+gambas")
    .merge({
      name: "Gambas",
      websites: [
        { kind: "wikipedia", title: "Gambas", href: "https://en.wikipedia.org/wiki/Gambas" },
        { kind: "homepage", title: "http://gambas.sourceforge.net", href: "http://gambas.sourceforge.net" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gambas_mascot.png/95px-Gambas_mascot.png",
        },
      ],
      releases: [{ name: "Gambas", version: "3.19.1", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addInfluence("pl+java", {
      refs: [
        { href: "http://gambaswiki.org/wiki/doc/intro?nh&l=en", title: "Gambas Documentation Introduction" },
        {
          href: "https://web.archive.org/web/20171009041815/http://gambaswiki.org/wiki/doc/intro?nh&l=en",
          title: "Gambas Documentation Introduction",
        },
      ],
    })
    .addPerson("person+benoit-minisini", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addPlatforms(["platf+linux", "platf+bsd", "platf+win", "platf+cygwin"])
    .addPlatform("platf+mac", {
      refs: [{ href: "https://allbasic.info/forum/index.php?topic=118.0", title: "Gambas 3 OS X" }],
    })
    .addPlatform("platf+haiku", {
      refs: [{ href: "https://discuss.haiku-os.org/t/gambas-on-haiku/10500", title: "Gambas on Haiku?" }],
    });

  /**/

  g.buildPlang("pl+xojo")
    .merge({
      name: "Xojo",
      websites: [{ kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg" }],
      releases: [{ name: "Xojo", version: "3.1", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+freemium"]);

  /**/
}
