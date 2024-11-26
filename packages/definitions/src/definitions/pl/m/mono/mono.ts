import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+mono", {
      name: "Mono",
      description:
        "Mono is a free and open-source .NET Framework-compatible software framework. Originally by Ximian which was acquired by Novell, it was later developed by Xamarin which was acquired by Microsoft. In August 2024, Microsoft transferred ownership of Mono to WineHQ. Mono can be run on many software systems.",
      keywords: [".net", "cross-platform", "mono"],
      extensions: [".cs", ".vb"],
      releases: [{ version: "6.12.0.206", name: "Mono 6.12.0.206", date: "2024-02-13" }],
      extWikipediaPath: "Mono_(software)",
      extHomeURL: "https://www.mono-project.com/",
      created: "2004",
    })
    .relImplements.add(["pl+c-sharp", "pl+visual-basic"])
    .relLicense.add(["license+mit"])
    .relParadigm.add(["para+compiled", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .relTags.add([
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
    .relTsys.add(["tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+c", "pl+c-sharp"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
