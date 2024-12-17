import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mono", {
      name: "Mono",
      description:
        "Free and open-source .NET Framework-compatible software framework. Originally by Ximian which was acquired by Novell, it was later developed by Xamarin which was acquired by Microsoft. In August 2024, Microsoft transferred ownership of Mono to WineHQ. Mono can be run on many software systems.",
      shortDesc: ".NET compatible software framework.",
      created: "2004",
      extensions: [".cs", ".vb"],
      extGithubPath: "mono/mono",
      extHomeURL: "https://www.mono-project.com/",
      extWikipediaPath: "Mono_(software)",
      githubStars: 11200,
      isTranspiler: false,
      keywords: [".net", "cross-platform", "mono"],
      releases: [{ version: "6.12.0.206", name: "Mono 6.12.0.206", date: "2024-02-13" }],
    })
    .relImplements.add("pl+c-sharp", "pl+visual-basic")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+compiled", "para+multi", "para+oop")
    .relPlatforms.add("plat+android", "plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64")
    .relTags.add(
      "tag+3dg",
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+compiler",
      "tag+dataq",
      "tag+dbms",
      "tag+framework",
      "tag+games",
      "tag+gui",
      "tag+scripting",
      "tag+shell",
    )
    .relTypeSystems.add("tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+c-sharp");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
