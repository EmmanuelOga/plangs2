import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mono", {
      name: "Mono",
      description:
        "Mono is a free and open-source .NET Framework-compatible software framework. Originally by Ximian which was acquired by Novell, it was later developed by Xamarin which was acquired by Microsoft. In August 2024, Microsoft transferred ownership of Mono to WineHQ. Mono can be run on many software systems.",
      keywords: ["mono"],
      websites: [
        { title: "www.mono-project.com", href: "https://www.mono-project.com/", kind: "homepage" },
        { title: "Mono", href: "https://en.wikipedia.org/wiki/Mono_(software)", kind: "wikipedia" },
      ],
      extensions: [".cs", ".vb"],
      year: 2004,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "6.12.0.206", name: "Mono 6.12.0.206", date: "2024-01-01" }],
    })
    .addImplements(["pl+c-sharp", "pl+visual-basic"])
    .addInfluencedBy(["pl+dotnet"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags([
      "tag+3dg",
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+dataq",
      "tag+dbms",
      "tag+framework",
      "tag+games",
      "tag+scripting",
      "tag+shell",
      "tag+ui",
    ])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
