import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mono", {
      name: "Mono",
      description:
        "Mono is a free and open-source .NET Framework-compatible software framework. Originally by Ximian which was acquired by Novell, it was later developed by Xamarin which was acquired by Microsoft. In August 2024, Microsoft transferred ownership of Mono to WineHQ. Mono can be run on many software systems.",
      websites: [
        { href: "https://www.mono-project.com/", title: "www.mono-project.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Mono_(software)", title: "Mono", kind: "wikipedia" },
      ],
      releases: [{ version: "6.12.0.206", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Mono", url: "/images/plangs/m/mono/logo.png" }],
    })
    .addImplements(["pl+c-sharp", "pl+visual-basic"])
    .addLicenses(["license+mit"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
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
    .addWrittenIn(["pl+c", "pl+c-sharp"]);
}
