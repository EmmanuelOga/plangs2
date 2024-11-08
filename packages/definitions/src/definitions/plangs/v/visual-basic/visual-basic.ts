import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+visual-basic", {
      name: "Visual Basic",
      description:
        'Visual Basic (VB), originally called Visual Basic .NET (VB.NET), is a multi-paradigm, object-oriented programming language, implemented on .NET, Mono, and the .NET Framework. Microsoft launched VB.NET in 2002 as the successor to its original Visual Basic language, the last version of which was Visual Basic 6.0. Although the ".NET" portion of the name was dropped in 2005, this article uses "Visual Basic [.NET]" to refer to all Visual Basic languages released since 2002, in order to distinguish between them and the classic Visual Basic. Along with C# and F#, it is one of the three main languages targeting the .NET ecosystem. Microsoft updated its VB language strategy on 6 February 2023, stating that VB is a stable language now and Microsoft will keep maintaining it.',
      keywords: ["visualbasic", "visual basic", "vb", "vb.net"],
      websites: [
        { title: "Visual Basic Documentation", href: "https://docs.microsoft.com/dotnet/visual-basic/", kind: "other" },
        { title: "Visual Basic", href: "https://en.wikipedia.org/wiki/Visual_Basic_(.NET)", kind: "wikipedia" },
        { title: "Visual Basic on Reddit", kind: "reddit", href: "https://reddit.com/r/visualbasic" },
        { title: "Visual Basic on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET" },
      ],
      extensions: [".vb"],
      year: 2001,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "17.9.2", name: "Visual Basic 17.9.2", date: "2024-01-01" }],
      github: { name: "Visual Basic .NET", langId: "389", color: "#945db7", popular: false, type: "programming" },
      stackovTags: ["vb.net"],
    })
    .addInfluencedBy(["pl+basic", "pl+haskell", "pl+visual-basic"])
    .addLicenses(["license+apache"])
    .addParadigms([
      "paradigm+declarative",
      "paradigm+event-driven",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+dos", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+low-code",
      "tag+rad",
      "tag+shell",
      "tag+testing",
      "tag+ui",
    ])
    .addTypeSystems(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
