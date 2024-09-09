import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+mono", {
      images: [{ kind: "logo", title: "Mono", url: "/images/plangs/m/mono/logo.png" }],
      name: "Mono",
      description:
        "Mono is a free and open-source .NET Framework-compatible software framework. Originally by Ximian which was acquired by Novell, it was later developed by Xamarin which was acquired by Microsoft. In August 2024, Microsoft transferred ownership of Mono to WineHQ. Mono can be run on many software systems.",
      websites: [
        { href: "https://www.mono-project.com/", title: "www.mono-project.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Mono_(software)", title: "Mono", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "6.12.0.206", date: "2024-01-01" }],
    })
    .addImplements(["pl+c-sharp", "pl+visual-basic"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+riscv", "platf+windows", "platf+x86-64"])
    .addTags(["tag+framework"])
    .addWrittenIn(["pl+c", "pl+c-sharp"]);
}
