import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+win")
    .merge({
      name: "Windows Forms (WinForms)",
      websites: [
        {
          kind: "wikipedia",
          title: "Universal Windows Platform",
          href: "https://en.wikipedia.org/wiki/Universal_Windows_Platform",
        },
        { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
        { kind: "wikipedia", title: "Windows Forms", href: "https://en.wikipedia.org/wiki/Windows_Forms" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/37/WinForms_Logo.png" }],
      releases: [{ version: "8.0.0", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm", "platf+.net", "platf+mono"]);

  /**/
}
